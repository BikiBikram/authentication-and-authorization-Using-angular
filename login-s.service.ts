import { Injectable } from '@angular/core';
import { LoginComponent} from './login/login.component';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSService {


private messageSource = new Subject<string>();
loginmessage  = this.messageSource.asObservable();

  constructor() { }

  SendMessage(message:string)
  {
    this.messageSource.next(message);
  }

}
