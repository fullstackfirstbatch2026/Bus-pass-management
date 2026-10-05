import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { Passenger } from '../../core/models';
@Component({selector:'app-passengers',standalone:true,imports:[FormsModule],templateUrl:'./passengers.component.html',styleUrl:'../../shared/page.css'})
export class PassengersComponent { private api=inject(ApiService); data:Passenger[]=[]; query=''; ngOnInit(){this.api.getPassengers().subscribe(x=>this.data=x)} get filtered(){const q=this.query.toLowerCase().trim();return this.data.filter(p=>!q||`${p.name} ${p.email} ${p.phone}`.toLowerCase().includes(q))} initials(n:string){return n.split(' ').map(x=>x[0]).slice(0,2).join('')} }
