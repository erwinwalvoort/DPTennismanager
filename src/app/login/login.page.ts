import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  apiUrl : any;
  user: any;
  
  constructor(	private 	navCtrl: NavController, 
				private http: HttpClient, 
					  private platform: Platform,
private  router:  Router,
					  private fcm: FCM,
	) {
					
	this.apiUrl = 'http://tennismanager.dp-it.nl/webservice.asmx';

  }


  ngOnInit() {
  }
  
  login(form){
	//alert(this.apiUrl+'/LoginUser?input='+JSON.stringify(form.value));
	this.http.get(this.apiUrl+'/LoginUser?input='+JSON.stringify(form.value)).subscribe((response) => {
		this.user=JSON.parse(response.toString());
		if (this.user.message=="OK") {
			var isDesktop = this.platform.platforms().includes("desktop");	
			if (!isDesktop) {
				this.fcm.getToken().then(token => {
					this.user = JSON.parse(window.localStorage.getItem('userdata')); 
					if (this.user) {
						//alert(this.user.id)
						this.http.get(this.apiUrl+'/UpdateToken?id='+this.user.id+'&token='+token).subscribe((response) => {
						});
					}
					console.log("getToken login:"+token);
				});	
			}
			window.localStorage.setItem('userdata', JSON.stringify(this.user));
			//this.navCtrl.back(); 
			console.log('ingelogd');
			this.router.navigate(["tabs"]);


		}
	});
  }
  
  btnRegister() {
	  this.router.navigate(["register"]);
  }
  
  
}
