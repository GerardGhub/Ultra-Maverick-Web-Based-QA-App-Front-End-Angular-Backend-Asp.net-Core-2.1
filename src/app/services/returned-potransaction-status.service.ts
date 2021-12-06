import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnedPOTransactionStatus } from '../models/returned-potransaction-status';

@Injectable({
  providedIn: 'root'
})
export class ReturnedPOTransactionStatusService {

  constructor(private httpClient : HttpClient)
  {

  }

  getListOfStatusOfData(): Observable<ReturnedPOTransactionStatus[]>
  {
    return this.httpClient.get<ReturnedPOTransactionStatus[]>("/api/ReturnPOTransactionStatus", { responseType: "json" });
  }

  insertDataStatus(newDataStatus: ReturnedPOTransactionStatus): Observable<ReturnedPOTransactionStatus>
  {
    return this.httpClient.post<ReturnedPOTransactionStatus>("/api/ReturnPOTransactionStatus", newDataStatus, { responseType: "json" });
  }

  updateDataStatus(existingDataStatus: ReturnedPOTransactionStatus): Observable<ReturnedPOTransactionStatus>
  {
    return this.httpClient.put<ReturnedPOTransactionStatus>("/api/ReturnPOTransactionStatus", existingDataStatus, { responseType: "json" });
  }


  deleteDataStatus(id: number): Observable<string>
  {
    return this.httpClient.delete<string>("/api/ReturnPOTransactionStatus?id=" + id);
  }



}
