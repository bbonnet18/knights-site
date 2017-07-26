import { Component, OnInit } from '@angular/core';
import { LocationComponent } from '../location/location.component';
import {FieldService} from '../field.service';
import {GameService} from '../game.service';
import {Field, Game} from '../model';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
	fieldLoc:string;
	fieldServ:FieldService;
	gameServ:GameService;
	fields:Field[];
  constructor(fs:FieldService, gs:GameService) {
	this.fieldServ = fs; 
	this.gameServ = gs;
  }

  ngOnInit() {
		this.fieldLoc = "my location";
		this.fieldServ.getFields().subscribe(v => {
			// set the observable to the fields variable 
			this.fields = v; 
	  
		})
		
		this.gameServ.getGames().subscribe(g => {
			console.log(g);
		});
  };
  

}
