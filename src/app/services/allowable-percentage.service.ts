import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllowablePercentage } from '../models/allowable-percentage';

@Injectable({
  providedIn: 'root'
})
export class AllowablePercentageService {

  constructor(private httpClient : HttpClient) 
  {

  }
  getAllAlowablePercentage(): Observable<AllowablePercentage[]>
  {
    return this.httpClient.get<AllowablePercentage[]>("/api/tblAllowablePercentageQA", { responseType: "json" });
  }

  insertAllowablePercentage(newAllowablePercentage: AllowablePercentage): Observable<AllowablePercentage>
  {
    return this.httpClient.post<AllowablePercentage>("/api/tblAllowablePercentageQA", newAllowablePercentage, { responseType: "json" });
  }

  updateAllowablePercentage(existingAllowablePercentage: AllowablePercentage): Observable<AllowablePercentage>
  {
    return this.httpClient.put<AllowablePercentage>("/api/tblAllowablePercentageQA", existingAllowablePercentage, { responseType: "json" });
  }
  deleteAllowablePercentage(id: number): Observable<string>
   {
     return this.httpClient.delete<string>("/api/tblAllowablePercentageQA?id=" + id);
   }


}
