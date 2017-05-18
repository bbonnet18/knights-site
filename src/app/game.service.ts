import {Injectable} from '@angular/core';
import {Game,Field,Address} from './model';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {FieldService} from './field.service';

@Injectable()
// this will return all of the fields
export class GameService{
	games:Game[];// the full list 
	fields:Field[];//get's a reference to all the fields
	fs:FieldService;
	constructor(fs:FieldService){
		this.fs = fs;// a reference to the service
		this.buildFields();
	}
	
	buildFields():void{
		this.fs.getFields().subscribe(f=>console.log(f));
		
	}
	
	getGames():Observable<Game[]>{// return an observable of a bunch of fields
		/* let d:Date = new Date();
		let gm1:Game = new Game('The other team',d);
		this.games.push(gm1); */
		
		return Observable.of(this.games).delay(1000).do(v => console.log('did games'));
	}
}