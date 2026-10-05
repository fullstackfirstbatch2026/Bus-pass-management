import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from '../../environments/environment';
@Component({selector:'app-layout',standalone:true,imports:[RouterLink,RouterLinkActive],templateUrl:'./layout.component.html',styleUrl:'./layout.component.css'})
export class LayoutComponent {
  private router=inject(Router); mobileOpen=false; demo=environment.demoFallback; title='Overview';
  nav=[{label:'Overview',icon:'grid',path:'/'},{label:'Passengers',icon:'users',path:'/passengers'},{label:'Routes',icon:'route',path:'/routes'},{label:'Bus passes',icon:'card',path:'/passes'}];
  constructor(){this.router.events.pipe(filter(e=>e instanceof NavigationEnd)).subscribe(()=>{this.mobileOpen=false; const p=this.router.url; this.title=p==='/passengers'?'Passengers':p==='/routes'?'Routes':p==='/passes'?'Bus passes':p==='/issue-pass'?'Issue pass':'Overview';});}
  toggle(){this.mobileOpen=!this.mobileOpen;} close(){this.mobileOpen=false;}
  @HostListener('window:resize') onResize(){if(window.innerWidth>900)this.mobileOpen=false;}
}
