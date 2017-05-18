import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';
import { RosterComponent } from './roster/roster.component';
import { StatsComponent } from './stats/stats.component';
import { LatestComponent } from './latest/latest.component';
import { RosterModule } from './roster/roster.module'; // importing this gives us access to the playerRouting module 
/* import { playerRouting } from './roster/roster.module'; */
import { LocationComponent } from './location/location.component';
import { FieldService } from './field.service';
import { GameService } from './game.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ScheduleComponent,
    ContactComponent,
    RosterComponent,
    StatsComponent,
    LatestComponent, 
	LocationComponent
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule,
    FormsModule,
    HttpModule,
	RosterModule,/*adding to imports, gives access to all the things it imported, like playerRouting/playerRoutes*/
/* 	playerRouting, */
	routing,
  ],
  providers: [{provide:LocationStrategy, useClass:HashLocationStrategy},FieldService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
