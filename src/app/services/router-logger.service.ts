import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterLoggerService
{
  private httpClient: HttpClient;
  currentUserName: string = null;

  constructor(private httpBackend: HttpBackend)
  {
  }

  public log(logMsg: string): Observable<any>
  {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post("/api/routerlogger", logMsg,
    { headers: new HttpHeaders().set("content-type", "text/plain") }
    );
  }
}
