import { Component } from '@angular/core';
import { NavController, } from '@ionic/angular';
import { Router } from  "@angular/router";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    apiUrl : any;
	user : any;
	lastgame : any;
	nextgame : any;
	message : any;
	messagecount : any;
	 

  constructor( private 	navCtrl: NavController, 
				private http: HttpClient, 
			   private  router:  Router  )  {
	

	this.apiUrl = 'http://tennismanager.dp-it.nl/webservice.asmx';
	   
	this.user = JSON.parse(window.localStorage.getItem('userdata')); 
	this.lastgame = [];
	this.nextgame = [];
	this.messagecount = 0;
  }

  btnLogout() {
		window.localStorage.removeItem('userdata');
		
		this.router.navigate(["login"]);
	}
		
	ionViewDidLoad() {
		
		console.log("ionviewDIDLoad home")
	}

	ionViewDidEnter() {
		console.log("ionviewDIDnter home")
		this.user = JSON.parse(window.localStorage.getItem('userdata')); 
		
		//lastgame
		this.http.get(this.apiUrl+'/LastGame?shortname='+this.user.shortname).subscribe((response) => {
			this.lastgame=JSON.parse(response.toString());
		})
		//nextgame
		this.http.get(this.apiUrl+'/NextGame?shortname='+this.user.shortname).subscribe((response) => {
			this.nextgame=JSON.parse(response.toString());
		})
		//count message
		console.log(this.user.id);
		this.http.get(this.apiUrl+'/AllMessages?user_id='+this.user.id).subscribe((response) => {
			var message=JSON.parse(response.toString());
				this.messagecount = message.length;
		})
	}
	
	messageSelected (){
		document.getElementById("tab-button-message").click();

	}
	gameSelected (game){
		window.localStorage.setItem('gamedata', JSON.stringify(game));
		document.getElementById("tab-button-game").click();

	}
}
