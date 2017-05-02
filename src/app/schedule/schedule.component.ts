import { Component, OnInit } from '@angular/core';
import { LocationComponent } from '../location/location.component';
import {FieldService} from '../field.service';
import {Field} from '../model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
	fieldLoc:string
	fieldServ:FieldService
	fields:Field[]
  constructor(fs:FieldService) {
	this.fieldServ = fs; 
  }

  ngOnInit() {
	  this.fieldLoc = "my location";
		this.fieldServ.getFields().subscribe(v => {
	  this.fields = v; 
	  console.log(this.fields.length, ':', v.length)});
  }

}
