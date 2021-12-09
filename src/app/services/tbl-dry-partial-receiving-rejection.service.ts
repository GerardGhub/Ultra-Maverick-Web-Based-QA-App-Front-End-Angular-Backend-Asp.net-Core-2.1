import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TblDryPartialReceivingRejection } from '../models/tbl-dry-partial-receiving-rejection';

@Injectable({
  providedIn: 'root'
})
export class TblDryPartialReceivingRejectionService {
  
  public MySubject: BehaviorSubject<boolean>;
  constructor(private httpClient: HttpClient) 
  {

    this.MySubject = new BehaviorSubject<boolean>(false);

   }

   getAlltblDryPartialReceivingRejection(): Observable<TblDryPartialReceivingRejection[]>
   {
     return this.httpClient.get<TblDryPartialReceivingRejection[]>("/api/tblDryPartialReceivingRejection", { responseType: "json" })
       .pipe(map(
         (data: TblDryPartialReceivingRejection[] ) =>    
         {
         
           for (let i = 0; i < data.length; i++)
           {
             //data[i].teamSize = data[i].teamSize * 100; //
             
           }
         
           return data;
         }
       ));
   }
 

   SearchRejectStatus(searchBy: string, searchText: string, searchIndex: number): Observable<TblDryPartialReceivingRejection[]>
   {
     return this.httpClient.get<TblDryPartialReceivingRejection[]>("/api/TblDryPartialReceivingRejection/search/" + searchBy + "/" + searchText + "/" + searchIndex, { responseType: "json" });
   }

}
