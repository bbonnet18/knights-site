import {Injectable} from '@angular/core';
import {Field, Address, FieldAddresses} from './model';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
// this will return all of the fields
export class FieldService{
	allFields:Field[];// the full list 
	fa:FieldAddresses;
	constructor(){
		this.fa = new FieldAddresses();
		this.allFields = this.fa.getFieldsList();
	}
	getFields():Observable<Field[]>{// return an observable of a bunch of fields
		let fieldAddress:Address = new Address('4201 Stringfellow Road','Chantilly','VA',20151); 
		let fieldOne:Field = new Field("Chantilly HS", fieldAddress);
		let fieldAddress2:Address = new Address('5801 Franconia Rd','Alexandria', 'VA',22310)
		let fieldTwo:Field = new Field('Edison HS',fieldAddress2);
		let fields:Field[] = [fieldOne, fieldTwo];
		
		console.log('total fields - ',this.allFields.length);
		
		return Observable.of(fields).delay(1000).do(v => console.log('did the observable'));
	}
}