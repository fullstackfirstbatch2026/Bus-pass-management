import { BusPass, Passenger, PassType, Route } from './models';
export const DEMO_PASSENGERS: Passenger[] = [
 {passengerId:101,name:'Arun Kumar',email:'arun.kumar@email.com',phone:'98765 42130',gender:'Male',address:'Velachery, Chennai'},
 {passengerId:102,name:'Priya Nair',email:'priya.nair@email.com',phone:'98401 78321',gender:'Female',address:'Adyar, Chennai'},
 {passengerId:103,name:'Rahul Das',email:'rahul.das@email.com',phone:'97910 45218',gender:'Male',address:'Tambaram, Chennai'},
 {passengerId:104,name:'Meena S',email:'meena.s@email.com',phone:'98843 12980',gender:'Female',address:'Guindy, Chennai'},
 {passengerId:105,name:'Karthik R',email:'karthik.r@email.com',phone:'90031 66442',gender:'Male',address:'Porur, Chennai'}
];
export const DEMO_ROUTES: Route[] = [
 {routeId:1,routeName:'R1 — Metro Connector',source:'Tambaram',destination:'Guindy',distanceKm:18,registrations:42,aboveAverage:true},
 {routeId:2,routeName:'R2 — IT Corridor',source:'Adyar',destination:'Sholinganallur',distanceKm:16,registrations:31,aboveAverage:true},
 {routeId:3,routeName:'R3 — Central Link',source:'Velachery',destination:'Central',distanceKm:14,registrations:12,aboveAverage:false},
 {routeId:4,routeName:'R4 — Airport Express',source:'Guindy',destination:'Airport',distanceKm:9,registrations:8,aboveAverage:false},
 {routeId:5,routeName:'R5 — OMR North',source:'Sholinganallur',destination:'Tidel Park',distanceKm:11,registrations:24,aboveAverage:true}
];
export const DEMO_TYPES: PassType[] = [
 {passTypeId:1,typeName:'Monthly',durationDays:30,price:950,description:'Unlimited travel for 30 days'},
 {passTypeId:2,typeName:'Quarterly',durationDays:90,price:2450,description:'Unlimited travel for 90 days'},
 {passTypeId:3,typeName:'Student',durationDays:30,price:550,description:'Discounted monthly student pass'}
];
export const DEMO_PASSES: BusPass[] = [
 {passId:5001,passengerId:101,passengerName:'Arun Kumar',routeId:1,routeName:'R1 — Metro Connector',source:'Tambaram',destination:'Guindy',passTypeId:1,passTypeName:'Monthly',issueDate:'2026-09-04',expiryDate:'2026-10-03',status:'ACTIVE',amount:950},
 {passId:5002,passengerId:102,passengerName:'Priya Nair',routeId:2,routeName:'R2 — IT Corridor',source:'Adyar',destination:'Sholinganallur',passTypeId:3,passTypeName:'Student',issueDate:'2026-09-18',expiryDate:'2026-10-17',status:'ACTIVE',amount:550},
 {passId:5003,passengerId:103,passengerName:'Rahul Das',routeId:3,routeName:'R3 — Central Link',source:'Velachery',destination:'Central',passTypeId:2,passTypeName:'Quarterly',issueDate:'2026-06-10',expiryDate:'2026-09-07',status:'EXPIRED',amount:2450},
 {passId:5004,passengerId:104,passengerName:'Meena S',routeId:5,routeName:'R5 — OMR North',source:'Sholinganallur',destination:'Tidel Park',passTypeId:1,passTypeName:'Monthly',issueDate:'2026-09-25',expiryDate:'2026-10-24',status:'ACTIVE',amount:950},
 {passId:5005,passengerId:105,passengerName:'Karthik R',routeId:1,routeName:'R1 — Metro Connector',source:'Tambaram',destination:'Guindy',passTypeId:1,passTypeName:'Monthly',issueDate:'2026-08-01',expiryDate:'2026-08-30',status:'EXPIRED',amount:950}
];
