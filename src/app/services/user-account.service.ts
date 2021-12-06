import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAccount } from '../models/user-account';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  constructor(private httpClient : HttpClient) { }

  sample(): Observable<UserAccount[]>
  {
    return this.httpClient.get<UserAccount[]>("/api/umwebusers", { responseType: "json" });
  }
}
