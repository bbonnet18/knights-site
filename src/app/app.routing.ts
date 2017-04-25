import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { RosterComponent } from './roster/roster.component';
import { StatsComponent } from './stats/stats.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {LatestComponent} from './latest/latest.component';
import {RosterModule} from './roster/roster.module';
/*import {playerRouting } from './roster/roster.module';*/
import {playerRoutes} from './roster/roster.routing'; 
const appRoutes:Routes = [
{
	path:'',
	redirectTo:'home',
	pathMatch:'full'
},
{
	path:'home',
	component:LatestComponent
},
 {
	path:'',
	component:AppComponent
},
{
	path:'contact',
	component:ContactComponent
},
{
	path:'stats',
	component:StatsComponent
},
{
	path:'roster',
	component:RosterComponent,
	children:playerRoutes
},
{
	path:'schedule',
	component:ScheduleComponent
}

]

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
