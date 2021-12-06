import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TblNearlyExpiryMgmt } from '../models/tbl-nearly-expiry-mgmt';

@Injectable({
  providedIn: 'root'
})
export class TblNearlyExpiryMgmtService {

  constructor(private httpClient : HttpClient) 
  {

  }
  getAllExpiryDaysData(): Observable<TblNearlyExpiryMgmt[]>
  {
    return this.httpClient.get<TblNearlyExpiryMgmt[]>("/api/tblNearlyExpiryMgmt", { responseType: "json" });
  }

  insertExpiryDaysData(newXpirylevel: TblNearlyExpiryMgmt): Observable<TblNearlyExpiryMgmt>
  {
    return this.httpClient.post<TblNearlyExpiryMgmt>("/api/tblNearlyExpiryMgmt", newXpirylevel, { responseType: "json" });
  }

  updateExpiryDaysData(existingAllowablePercentage: TblNearlyExpiryMgmt): Observable<TblNearlyExpiryMgmt>
  {
    return this.httpClient.put<TblNearlyExpiryMgmt>("/api/tblNearlyExpiryMgmt", existingAllowablePercentage, { responseType: "json" });
  }
  deleteExpiryDaysData(id: number): Observable<string>
   {
     return this.httpClient.delete<string>("/api/tblNearlyExpiryMgmt?id=" + id);
   }
}
