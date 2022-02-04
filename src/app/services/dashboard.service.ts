import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Project } from '../models/project';

@Injectable()
export class DashboardService {
  constructor(private httpClient: HttpClient) { }


  
  getAllProjects(): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("/api/projects", { responseType: "json" })
      .pipe(map(
        (data: Project[] ) =>     
        {

          for (let i = 0; i < data.length; i++)
          {
            //data[i].teamSize = data[i].teamSize * 100;
           
          }
          return data;
        }
      ));
  }


  getAllProjectsCancelledTransaction(): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("/api/projects/cancelled", { responseType: "json" })
      .pipe(map(
        (data: Project[] ) =>     
        {

          for (let i = 0; i < data.length; i++)
          {
            //data[i].teamSize = data[i].teamSize * 100;
           
          }
          return data;
        }
      ));
  }

  getAllProjectsPartialPoService(): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("/api/ProjectsPartialPo", { responseType: "json" })
      .pipe(map(
        (data: Project[] ) =>     
        {

          for (let i = 0; i < data.length; i++)
          {
            //data[i].teamSize = data[i].teamSize * 100;
           
          }
          return data;
        }
      ));
  }

  getAllProjetPONearlyExpiryApprovalService(): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("/api/ProjectsPartialPo/ExpiryApproval", { responseType: "json" })
      .pipe(map(
        (data: Project[] ) =>     
        {

          for (let i = 0; i < data.length; i++)
          {
            //data[i].teamSize = data[i].teamSize * 100;
           
          }
          return data;
        }
      ));
  }


  
  getAllProjectsPartialReceivingReject(): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("/api/ProjectsPartialPo/WHReject", { responseType: "json" })
      .pipe(map(
        (data: Project[] ) =>     
        {

          for (let i = 0; i < data.length; i++)
          {
            //data[i].teamSize = data[i].teamSize * 100;
           
          }
          return data;
        }
      ));
  }


  getBookings(): Observable<Booking>
  {
    return this.httpClient.get<Booking[]>(`http://localhost:7000/bookings?_sort=checkIn@_order=desc`).pipe(map(
      (bookings: any) =>
      {
        bookings.forEach((booking: any) =>
        {
          booking.checkIn = new Date(booking.checkIn);
          booking.checkOut = new Date(booking.checkOut);
          booking.dateOfBirth = new Date(booking.dateOfBirth);
        });

        return bookings;
      }
    ));
  }

}
