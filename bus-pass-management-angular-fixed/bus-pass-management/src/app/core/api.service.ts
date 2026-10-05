import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, map, Observable, of, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { DEMO_PASSENGERS, DEMO_PASSES, DEMO_ROUTES, DEMO_TYPES } from './demo-data';
import { BusPass, IssuePassRequest, Passenger, PassType, Route } from './models';

@Injectable({providedIn:'root'})
export class ApiService {
  private http = inject(HttpClient); private base = environment.apiUrl;
  private demo = environment.demoFallback;
  private request<T>(url:string, fallback:T): Observable<T> {
    return this.http.get<T>(`${this.base}${url}`).pipe(catchError(err => this.demo ? of(fallback) : throwError(() => err)));
  }
  getPassengers() { return this.request<Passenger[]>('/passengers', DEMO_PASSENGERS); }
  getRoutes() { return this.request<Route[]>('/routes', DEMO_ROUTES); }
  getPassTypes() { return this.request<PassType[]>('/pass-types', DEMO_TYPES); }
  getPasses() { return this.request<BusPass[]>('/bus-passes', DEMO_PASSES); }
  getAboveAverageRoutes() { return this.request<Route[]>('/routes/above-average', DEMO_ROUTES.filter(r=>r.aboveAverage)); }
  issuePass(payload:IssuePassRequest):Observable<BusPass> {
    if (this.demo) {
      const passenger = DEMO_PASSENGERS.find(x=>x.passengerId===payload.passengerId)!;
      const route = DEMO_ROUTES.find(x=>x.routeId===payload.routeId)!;
      const type = DEMO_TYPES.find(x=>x.passTypeId===payload.passTypeId)!;
      const start = payload.issueDate ? new Date(payload.issueDate) : new Date();
      const end = new Date(start); end.setDate(end.getDate()+type.durationDays-1);
      return of({passId:Date.now(),passengerId:passenger.passengerId,passengerName:passenger.name,routeId:route.routeId,routeName:route.routeName,source:route.source,destination:route.destination,passTypeId:type.passTypeId,passTypeName:type.typeName,issueDate:start.toISOString().slice(0,10),expiryDate:end.toISOString().slice(0,10),status:'ACTIVE',amount:type.price});
    }
    return this.http.post<BusPass>(`${this.base}/bus-passes/issue`,payload);
  }
}
