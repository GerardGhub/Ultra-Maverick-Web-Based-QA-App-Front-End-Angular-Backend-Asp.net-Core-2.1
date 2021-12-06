import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RejectedStatus } from '../models/rejected-status';


@Injectable({
  providedIn: 'root'
})
export class RejectedStatusService {

  constructor(private httpClient : HttpClient)
   {

   }

   getListOfStatusOfReject(): Observable<RejectedStatus[]>
   {
     return this.httpClient.get<RejectedStatus[]>("/api/tblrejectedstatus", { responseType: "json" });
   }

   insertRejectStatus(newRejectedStatus: RejectedStatus): Observable<RejectedStatus>
   {
     return this.httpClient.post<RejectedStatus>("/api/tblrejectedstatus", newRejectedStatus, { responseType: "json" });
   }

   updateRejectedStatus(existingRejectedStatus: RejectedStatus): Observable<RejectedStatus>
   {
     return this.httpClient.put<RejectedStatus>("/api/tblrejectedstatus", existingRejectedStatus, { responseType: "json" });
   }


   deleteRejectedStatus(id: number): Observable<string>
   {
     return this.httpClient.delete<string>("/api/tblrejectedstatus?id=" + id);
   }

  // sample(): Observable<UserAccount[]>
  //  {
  //    return this.httpClient.get<UserAccount[]>("/api/umwebusers", { responseType: "json" });
  //  }

}
