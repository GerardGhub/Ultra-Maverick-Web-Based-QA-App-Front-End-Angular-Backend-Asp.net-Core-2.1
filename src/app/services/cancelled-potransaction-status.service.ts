import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CancelledPOTransactionStatus } from '../models/cancelled-potransaction-status';

@Injectable({
  providedIn: 'root'
})
export class CancelledPOTransactionStatusService {

  constructor(private httpClient : HttpClient)
  {

  }

  getListOfStatusOfData(): Observable<CancelledPOTransactionStatus[]>
  {
    return this.httpClient.get<CancelledPOTransactionStatus[]>("/api/CancelledPOTransactionStatus", { responseType: "json" });
  }

  insertDataStatus(newDataStatus: CancelledPOTransactionStatus): Observable<CancelledPOTransactionStatus>
  {
    return this.httpClient.post<CancelledPOTransactionStatus>("/api/CancelledPOTransactionStatus", newDataStatus, { responseType: "json" });
  }

  updateDataStatus(existingDataStatus: CancelledPOTransactionStatus): Observable<CancelledPOTransactionStatus>
  {
    return this.httpClient.put<CancelledPOTransactionStatus>("/api/CancelledPOTransactionStatus", existingDataStatus, { responseType: "json" });
  }


  deleteDataStatus(id: number): Observable<string>
  {
    return this.httpClient.delete<string>("/api/CancelledPOTransactionStatus?id=" + id);
  }



}
