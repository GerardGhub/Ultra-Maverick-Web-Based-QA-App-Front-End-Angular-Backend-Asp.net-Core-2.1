import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemCapabilityStatus } from '../models/system-capability-status';

@Injectable({
  providedIn: 'root'
})
export class SystemCapabilityStatusService {

  constructor(private httpClient : HttpClient) { }

  getSystemCapabilityStatus(): Observable<SystemCapabilityStatus[]>
{
  return this.httpClient.get<SystemCapabilityStatus[]>("/api/SystemCapabilityStatus", { responseType: "json" });
}
}


