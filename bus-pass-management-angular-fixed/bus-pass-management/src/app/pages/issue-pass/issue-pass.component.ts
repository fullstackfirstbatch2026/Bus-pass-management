import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { BusPass, Passenger, PassType, Route } from '../../core/models';
@Component({selector:'app-issue-pass',standalone:true,imports:[ReactiveFormsModule,RouterLink],templateUrl:'./issue-pass.component.html',styleUrl:'../../shared/page.css'})
export class IssuePassComponent {
 private api=inject(ApiService); private fb=inject(FormBuilder); private router=inject(Router);
 passengers:Passenger[]=[]; routes:Route[]=[]; types:PassType[]=[]; saving=false; toast=''; error=''; issued:BusPass|null=null;
 form=this.fb.nonNullable.group({passengerId:[0,[Validators.required,Validators.min(1)]],routeId:[0,[Validators.required,Validators.min(1)]],passTypeId:[0,[Validators.required,Validators.min(1)]],issueDate:[new Date().toISOString().slice(0,10),Validators.required]});
 ngOnInit(){this.api.getPassengers().subscribe(x=>this.passengers=x);this.api.getRoutes().subscribe(x=>this.routes=x);this.api.getPassTypes().subscribe(x=>this.types=x)}
 get selectedType(){return this.types.find(x=>x.passTypeId===this.form.controls.passTypeId.value)}
 get selectedPassenger(){return this.passengers.find(x=>x.passengerId===this.form.controls.passengerId.value)}
 get selectedRoute(){return this.routes.find(x=>x.routeId===this.form.controls.routeId.value)}
 get previewExpiry(){const t=this.selectedType;if(!t||!this.form.controls.issueDate.value)return '—';const d=new Date(this.form.controls.issueDate.value);d.setDate(d.getDate()+t.durationDays-1);return d.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}
 submit(){this.error='';this.toast='';if(this.form.invalid){this.form.markAllAsTouched();this.error='Please complete all required fields.';return}this.saving=true;this.api.issuePass(this.form.getRawValue()).subscribe({next:p=>{this.issued=p;this.saving=false;this.toast=`Pass #${p.passId} issued successfully`;},error:()=>{this.saving=false;this.error='Could not issue the pass. Check that the REST API is running and the endpoint is correct.'}})}
 reset(){this.issued=null;this.form.reset({passengerId:0,routeId:0,passTypeId:0,issueDate:new Date().toISOString().slice(0,10)});}
}
