import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor (private router:Router){// this works because routing was imported into the module and it has the router 
		
	}
  goToLocation(hb:any):void{
	  let routeName:string = hb.innerText.toLowerCase();//set this to the name in the button text 
	  this.router.navigate([routeName]); 
  }
}
