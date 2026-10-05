import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { BusPass } from '../../core/models';
@Component({selector:'app-passes',standalone:true,imports:[FormsModule,DatePipe,RouterLink],templateUrl:'./passes.component.html',styleUrl:'../../shared/page.css'})
export class PassesComponent { private api=inject(ApiService); passes:BusPass[]=[]; query=''; status='ALL'; ngOnInit(){this.api.getPasses().subscribe(x=>this.passes=x)} get activeCount(){return this.passes.filter(p=>p.status==='ACTIVE').length} get expiredCount(){return this.passes.filter(p=>p.status==='EXPIRED').length} get totalValue(){return this.passes.reduce((a,p)=>a+p.amount,0)} get filtered(){const q=this.query.toLowerCase().trim();return this.passes.filter(p=>(this.status==='ALL'||p.status===this.status)&&(!q||`${p.passengerName} ${p.routeName} ${p.passTypeName} ${p.passId}`.toLowerCase().includes(q)))} initials(n:string){return n.split(' ').map(x=>x[0]).slice(0,2).join('')} }
