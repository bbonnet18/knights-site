import {Component, OnInit, OnChanges} from '@angular/core';
import {Field, Address} from '../model';
@Component({
	selector:'field-location',
	inputs:['loc'],
	templateUrl:'./location.component.html',
	styleUrls:['./location.component.css']
})

export class LocationComponent implements OnInit, OnChanges{
	fieldName:Field;
	constructor(){
		let fieldAddress:Address = new Address('Chantilly HS','Chantilly','VA',20151); 
		this.fieldName = new Field("bens field", fieldAddress);
	}
	
	ngOnInit(){
		
	}
	// this is fired every time something changes, like an input to this component 
	ngOnChanges(){
		
	}
}