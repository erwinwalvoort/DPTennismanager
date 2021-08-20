import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from  "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user : any;
  apiUrl : any;
  
  constructor( private 	navCtrl: NavController, 
				private http: HttpClient, 
			   private  router:  Router ) {
		this.apiUrl = 'http://tennismanager.dp-it.nl/webservice.asmx';
		this.user =[];
	}

  ngOnInit() {
  }

  btnRegister() {
	  
		this.navCtrl.back(); 
	}
  
  submitRegister(form) {
	  //alert(this.apiUrl+'/RegisterUser?input='+JSON.stringify(form.value));
	  
	 this.http.get(this.apiUrl+'/RegisterUser?input='+JSON.stringify(form.value)).subscribe((response) => {
		console.log(response);
		this.user= (response);
		if(this.user.message=='OK') 
			this.router.navigate(["login"]);
		else
			alert(this.user.message)
	});
	}
		  
	  
		

  
}
