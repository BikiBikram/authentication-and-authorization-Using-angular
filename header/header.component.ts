import { Component, OnInit } from '@angular/core';
import {LoginSService} from  '../login-s.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

data:any="Login Here";


  constructor(public logingservice:LoginSService) { }

  ngOnInit() {
this.logingservice.loginmessage.subscribe(message =>{
 console.log(this.data  = message);


});

  }


}
