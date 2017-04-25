import { NgModule } from '@angular/core'; 
import { PlayerComponent } from './player/player.component'; 
/* import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'; */
import { HomeComponent } from './home/home.component';
import { playerRouting } from './roster.routing';
/* import { playerRoutes } from './roster.routing'; */
//create the routes
/* export const playerRoutes:Routes = [{
	path:'player',
	component:PlayerComponent
},

{
	path:'',
	component:HomeComponent
}
]
export const playerRouting:ModuleWithProviders = RouterModule.forChild(playerRoutes) */

//the actual module
@NgModule({
	declarations: [PlayerComponent, HomeComponent],
	imports:[playerRouting],// importing playerRouting means that it can be 
	// used in the importing modules - appmodule
})
export class RosterModule{}