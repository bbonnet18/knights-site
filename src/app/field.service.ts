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

		
		return Observable.of(this.allFields).delay(1000).do(v => console.log('did the observable'));
	}
}