import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
//create the routes
export const playerRoutes:Routes = [{
	path:'player',
	component:PlayerComponent
},

{
	path:'',
	component:HomeComponent
}
]

export const playerRouting:ModuleWithProviders = RouterModule.forChild(playerRoutes)