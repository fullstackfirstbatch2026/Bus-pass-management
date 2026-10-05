import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../core/api.service';
import { BusPass, Passenger, Route } from '../../core/models';
@Component({selector:'app-dashboard',standalone:true,imports:[RouterLink,DatePipe],templateUrl:'./dashboard.component.html',styleUrl:'../../shared/page.css'})
export class DashboardComponent {
  private api=inject(ApiService); passengers:Passenger[]=[]; routes:Route[]=[]; passes:BusPass[]=[]; loading=true;
  ngOnInit(){forkJoin({passengers:this.api.getPassengers(),routes:this.api.getRoutes(),passes:this.api.getPasses()}).subscribe(x=>{this.passengers=x.passengers;this.routes=x.routes;this.passes=x.passes;this.loading=false;});}
  get active(){return this.passes.filter(p=>p.status==='ACTIVE').length}
  get expired(){return this.passes.filter(p=>p.status==='EXPIRED').length}
  get revenue(){return this.passes.reduce((a,p)=>a+p.amount,0)}
  get aboveAverageRoutes(){return this.routes.filter(r=>r.aboveAverage)}
  get aboveAverageCount(){return this.aboveAverageRoutes.length}
  get recentPasses(){return this.passes.slice(0,5)}
  get maxReg(){return Math.max(...this.routes.map(r=>r.registrations||0),1)}
  initials(n:string){return n.split(' ').map(x=>x[0]).slice(0,2).join('')}
}
