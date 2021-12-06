import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';

import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit 
{
  project: Project;
  routeParamasSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private projectsService: ProjectsService) 
  {
    this.project = new Project();
  }

  ngOnInit(): void 
  {
   this.routeParamasSubscription =  this.activatedRoute.params.subscribe((params) => {
      let pid = params["projectid"];

      this.projectsService.getProjectByProjectID(pid).subscribe((proj:Project) => {
        this.project = proj;
      });
    });
  }

    ngOnDestroy()
    {
      this.routeParamasSubscription.unsubscribe();
    }
}
