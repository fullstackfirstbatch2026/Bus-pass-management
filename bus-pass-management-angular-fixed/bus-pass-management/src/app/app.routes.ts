import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PassengersComponent } from './pages/passengers/passengers.component';
import { RoutesComponent } from './pages/routes/routes.component';
import { PassesComponent } from './pages/passes/passes.component';
import { IssuePassComponent } from './pages/issue-pass/issue-pass.component';
export const routes: Routes = [
 {path:'',component:DashboardComponent,title:'Dashboard — TransitFlow'},
 {path:'passengers',component:PassengersComponent,title:'Passengers — TransitFlow'},
 {path:'routes',component:RoutesComponent,title:'Routes — TransitFlow'},
 {path:'passes',component:PassesComponent,title:'Bus Passes — TransitFlow'},
 {path:'issue-pass',component:IssuePassComponent,title:'Issue Pass — TransitFlow'},
 {path:'**',redirectTo:''}
];
