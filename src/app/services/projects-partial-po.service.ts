import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

import { map } from "rxjs/operators";
import { Project } from '../models/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectsPartialPoService {

  public MySubject: BehaviorSubject<boolean>;

  constructor(private httpClient: HttpClient)
  {
    this.MySubject = new BehaviorSubject<boolean>(false);
  }

  toggleDetails()
  {
    this.MySubject.next(!this.MySubject.value);
  }

  getAllProjects(): Observable<Project[]>
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

  getAllProjectsCancelView(): Observable<Project[]>
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

  getProjectByProjectID(ProjectID: number): Observable<Project>
  {
    return this.httpClient.get<Project>("/api/ProjectsPartialPo/searchbyprojectid/" + ProjectID, { responseType: "json" });
  }

  insertProject2(newProject: Project): Observable<Project>
  {
    var requestHeaders = new HttpHeaders();
    requestHeaders = requestHeaders.set("X-XSRF-TOKEN", sessionStorage.XSRFRequestToken);
    return this.httpClient.post<Project>("/api/ProjectsPartialPo", newProject, { headers: requestHeaders, responseType: "json" });
  }

  updateProject(existingProject: Project): Observable<Project>
  {
    return this.httpClient.put<Project>("/api/ProjectsPartialPo", existingProject, { responseType: "json" });
    
  }

  SearchProjects(searchBy: string, searchText: string): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("/api/ProjectsPartialPo/search/" + searchBy + "/" + searchText, { responseType: "json" });
  }

}
