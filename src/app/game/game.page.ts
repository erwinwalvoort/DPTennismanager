import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  game : any;
    apiUrl : any;

  constructor(				private http: HttpClient, 
) {
	this.apiUrl = 'http://tennismanager.dp-it.nl/webservice.asmx';
	this.game = JSON.parse(window.localStorage.getItem('gamedata')); 
			
	  }

  ngOnInit() {
  }
	
	ionViewDidEnter() {
		console.log("ionviewDIDEnter game")
			
			this.game = JSON.parse(window.localStorage.getItem('gamedata')); 
			console.log(JSON.stringify(this.game))
	 
	}
	
	
	submitGame(form) {
//		form.value.id = this.game.id;
//		console.log(this.game.id);

		console.log(JSON.stringify(form.value));
//		this.http.get(this.apiUrl+'/SaveGame?input='+JSON.stringify(form.value)).subscribe((response) => {

//			console.log(response);
//			this.game= (response);
//			if(this.game.message=='OK') {
//				window.localStorage.setItem('gamedata', JSON.stringify(this.game));
//				document.getElementById("tab-button-game").click();
//				
//			}
//			else
//				alert(this.game.message)
//		
//		});
	}
}
