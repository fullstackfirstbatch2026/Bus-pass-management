import { Component, inject } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { Route } from '../../core/models';
@Component({selector:'app-routes',standalone:true,templateUrl:'./routes.component.html',styleUrl:'../../shared/page.css'})
export class RoutesComponent { private api=inject(ApiService); routes:Route[]=[]; above:Route[]=[]; ngOnInit(){this.api.getRoutes().subscribe(x=>this.routes=x);this.api.getAboveAverageRoutes().subscribe(x=>this.above=x)} get totalDistance(){return this.routes.reduce((a,r)=>a+(r.distanceKm||0),0)} get avg(){return this.routes.length?Math.round(this.routes.reduce((a,r)=>a+(r.registrations||0),0)/this.routes.length):0} }
