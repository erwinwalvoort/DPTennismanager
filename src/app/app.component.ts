import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { FCM} from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  user: any;

  constructor(
	  private platform: Platform,
	  private splashScreen: SplashScreen,
	  private statusBar: StatusBar,
	  private fcm: FCM,
	  private router: Router,
	) {
	  this.initializeApp();
	}

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

	//console.log("start applicatie");
	//console.log(this.platform.platforms());

	var isDesktop = this.platform.platforms().includes("desktop");	
	//console.log(isDesktop);
	if (!isDesktop) {
		this.fcm.getToken().then(token => {
			console.log("getToken:"+token);
		});	
		this.fcm.onTokenRefresh().subscribe(token => {
			console.log("onTokenRefresh:"+token);
		});	
		this.fcm.onNotification().subscribe(data => {
			console.log(data);
			if (data.wasTapped) {
				console.log('wasTapped: Received in background');
				document.getElementById("tab-button-message").click();
				//this.router.navigate(["message"]);
			} else {
				console.log('not wasTapped + Received in foreground');
				document.getElementById("tab-button-message").click();
				//this.router.navigate(["message"]);
			}
		});
	}
	//window.localStorage.removItem('userdata' );
	//console.log(window.localStorage.getItem('userdata'));
	this.user = JSON.parse(window.localStorage.getItem('userdata')); 
	if (!this.user) {
		this.router.navigate(["login"]);
	}
  }
  
  ionViewDidLoad() {
		console.log("ionviewDIDLoad app component")
	}

	ionViewDidEnter() {
		console.log("ionviewDIDEnter app component")
	}
}
