import {Injectable} from '@angular/core';
import {Field, Address} from './model';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()

export class FieldService{
	constructor(){
		
	}
	getFields():Observable<Field[]>{// return an observable of a bunch of fields
		let benAddress:Address = new Address('Bens house',13132);
		let fields:Field[] = [new Field('Ben Field', benAddress), new Field('Bonnet Field')];
		return Observable.of(fields).delay(1000).do(v => console.log('did the observable'));
	}
}