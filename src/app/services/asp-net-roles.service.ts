import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AspNetRoles } from '../models/asp-net-roles';

@Injectable({
  providedIn: 'root'
})
export class AspNetRolesService {

  constructor(private httpClient : HttpClient)
  {

  }

  getListOfRole(): Observable<AspNetRoles[]>
  {
    return this.httpClient.get<AspNetRoles[]>("/api/AspNetRoles", { responseType: "json" });
  }

  appendnewRole(appendRole: AspNetRoles): Observable<AspNetRoles>
   {
     return this.httpClient.post<AspNetRoles>("/api/AspNetRoles", appendRole, { responseType: "json" });
   }

   modifyRole(existingRole: AspNetRoles): Observable<AspNetRoles>
   {
     return this.httpClient.put<AspNetRoles>("/api/AspNetRoles", existingRole, { responseType: "json" });
   }


   deleteRejectedStatus(id: number): Observable<string>
   {
     return this.httpClient.delete<string>("/api/AspNetRoles?id=" + id);
   }
}
