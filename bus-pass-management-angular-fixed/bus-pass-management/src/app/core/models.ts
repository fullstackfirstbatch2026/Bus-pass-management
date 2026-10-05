export interface Passenger { passengerId: number; name: string; email: string; phone: string; gender?: string; address?: string; }
export interface Route { routeId: number; routeName: string; source: string; destination: string; distanceKm: number; registrations?: number; aboveAverage?: boolean; }
export interface PassType { passTypeId: number; typeName: string; durationDays: number; price: number; description?: string; }
export interface BusPass { passId: number; passengerId: number; passengerName: string; routeId: number; routeName: string; source: string; destination: string; passTypeId: number; passTypeName: string; issueDate: string; expiryDate: string; status: 'ACTIVE'|'EXPIRED'|'CANCELLED'|'PENDING'; amount: number; }
export interface IssuePassRequest { passengerId: number; routeId: number; passTypeId: number; issueDate?: string; }
