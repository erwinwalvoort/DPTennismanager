import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  apiUrl : any;
  games : any;
  groupedGames : any;
  user : any;
  
  constructor(				private http: HttpClient, 
	) {
		this.apiUrl = 'http://tennismanager.dp-it.nl/webservice.asmx';
		this.user = JSON.parse(window.localStorage.getItem('userdata')); 
		this.groupedGames = [];
		//this.loadActiveGames();

		
	}

  ngOnInit() {
  }
	ionViewDidEnter() {
		console.log("ionviewDIDEnter schedule")

	//allgames
		this.groupedGames = [];
		this.loadActiveGames();
	  
	}

	loadActiveGames() {
		this.http.get(this.apiUrl+'/AllGames').subscribe((response) => {
			this.groupGames(JSON.parse(response.toString()));
		})
	}
	
	groupGames(games){
		console.log("--")

        let sortedGames = games.sort();
        let currentDate = "";
        let currentGames = [];

        sortedGames.forEach((value, index) => {

            if(value.strscheduleddate != currentDate){

                currentDate = value.strdisplaydate;

                let newGroup = {
                    date: currentDate,
                    games: []
                };

                currentGames = newGroup.games;
                this.groupedGames.push(newGroup);

            } 

            currentGames.push(value);

        });

    }
	gameSelected (game) {
		window.localStorage.setItem('gamedata', JSON.stringify(game));
		document.getElementById("tab-button-game").click();

    }
}
