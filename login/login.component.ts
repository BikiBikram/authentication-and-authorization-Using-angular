import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import {Router } from '@angular/router';
import {LoginSService} from  '../login-s.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 bicky=[

  {
     "username":"bicky",
	   "email": "user1",
	   "password": "pwd1"
   },
    {
     "username":"abc",
	  "email": "jj",
	   "password": "123"
  },
   {
     "username":"lucky",
   	"email": "user2",
  	"password": "pwd2"
  },
    {
      "username":"xyz",
	  "email": "user3",
	   "password": "pwd3"
  }
]
  constructor(private _router:Router,public loginservice:LoginSService) { }

  ngOnInit() {
  }

     loginform = new FormGroup({
     username:new FormControl(''),
     email:new FormControl(''),
     password:new FormControl(''),

  });


OnSubmitForm()

  {

    var data = this.bicky.filter(log =>(log.email=== this.loginform.value.email) && (log.password === this.loginform.value.password) )

    if(data && data.length === 1)
    {
      console.log(this.loginservice.SendMessage("Hello    "+data[0].username));
    }
    else{
      console.log(this.loginservice.SendMessage("You Have Entered A Wrong Email & Password Plz Try Again!!"));
    }
      console.log(data[0]);
    }

}
