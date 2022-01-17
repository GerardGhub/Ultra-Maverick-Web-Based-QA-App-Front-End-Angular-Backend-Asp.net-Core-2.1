import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DryWhStoreOrders } from '../models/dry-wh-store-orders';

@Injectable({
  providedIn: 'root'
})
export class WhCheckerDashboardService {
  public MySubject: BehaviorSubject<boolean>;
  constructor(private httpClient: HttpClient)
  {
    this.MySubject = new BehaviorSubject<boolean>(false);
  }

  getStoreOrders(): Observable<DryWhStoreOrders[]>
   {
     return this.httpClient.get<DryWhStoreOrders[]>("/api/store_orders", { responseType: "json" });
   }

   getDistinctPreparedStoreOrders(): Observable<DryWhStoreOrders[]>
   {
     return this.httpClient.get<DryWhStoreOrders[]>("/api/dry_wh_orders_checklist_distinct", { responseType: "json" });
   }

   SearchPreparedItems(searchBy: string, searchText: string): Observable<DryWhStoreOrders[]>
   {
     return this.httpClient.get<DryWhStoreOrders[]>("/api/store_orders/search/" + searchBy + "/" + searchText, { responseType: "json" });
   }

   
   SearchRejectStatus(searchBy: string, searchText: string, searchIndex: number): Observable<DryWhStoreOrders[]>
   {
     return this.httpClient.get<DryWhStoreOrders[]>("/api/store_orders/search/" + searchBy + "/" + searchText + "/" + searchIndex, { responseType: "json" });
   }


}
