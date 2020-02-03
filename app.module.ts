import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { DistComponent } from './dist/dist.component';
import {Routes,RouterModule} from '@angular/router';
import {  FormsModule } from "@angular/forms";
import { CountryListComponent } from './country/country-list/country-list.component';
import {SelectService} from './country/country.service';
import {ReactiveFormsModule} from '@angular/forms';
import { StatelistComponent } from './state/statelist/statelist.component';
import { DistListComponent } from './dist/dist-list/dist-list.component';
import {countryfilterPipe} from './country/countryfilter.pipe';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import {LoginSService} from  './login-s.service';


const approutes:Routes=[
  {path:'country',component:CountryComponent},
  {path:'state',component:StateComponent},
  {path:'dist',component:DistComponent},

  {path:'login',component:LoginComponent}



];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CountryComponent,
    StateComponent,
    DistComponent,
    CountryListComponent,
    StatelistComponent,
    DistListComponent,
    countryfilterPipe,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    ReactiveFormsModule
  ],
  providers: [SelectService,LoginSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
