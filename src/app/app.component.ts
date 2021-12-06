import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { RouterLoggerService } from './services/router-logger.service';
// import { fadeAnimation, slideUpAnimation, z } from "./my-animation";
import { fadeAnimation, slideUpAnimation, zoomUpAnimation , zoomLeftAnimation, slideLeftOrRightAnimation, keyFrameAnimation} from "./my-animation";
import { Project } from './models/project';
import { DashboardService } from './services/dashboard.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ keyFrameAnimation ]
})
export class AppComponent
{
  showStatistics: boolean = false;
  projects: Project[] = [];
  WhRejects: Project[] = [];
  totalPoRowCount: number = null;
  totalPoRowCountCancelled: number = null;
  totalPoPartialReceiving: number = null;
  totalPoPartialReceivingNearlyExpiryApproval = null;
  //Rejection Call at back End
  totalPoPartialRejectatWH: number = null;

  constructor(private dashboardService: DashboardService, public loginService : LoginService, private domSanitizer : DomSanitizer, private routerLoggerService: RouterLoggerService, private router: Router)
  {
    
  }

  ngOnInit()
  {
    this.loginService.detectIfAlreadyLoggedIn();
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd)
      {
        let userName = (this.loginService.currentUserName)? this.loginService.currentUserName : "anonymous";
        
        let logMsg = new Date().toLocaleString() + ": " + userName + " navigates to " + event.url;

        this.routerLoggerService.log(logMsg).subscribe();
      }
    });
    this.DashboardPoSummary();
    this.DashboardPoSummaryCancelled();
    this.DashboardPoSummaryPartialReceiving();
    this.DashboardPoSummaryPartialReceivingNearlyExpiryApproval();
    this.DashboardPoSummaryPartialReceivingRejectionWH();
  }

   
  DashboardPoSummaryPartialReceivingRejectionWH()
  {
    this.dashboardService.getAllProjectsPartialReceivingReject()
    .subscribe(
      (response: Project[]) =>
      {
        // debugger;

        this.WhRejects = response;
      
       
        this.totalPoPartialRejectatWH = response.length;
      }
    );
  }




  DashboardPoSummary()
  {
    this.dashboardService.getAllProjects()
    .subscribe(
      (response: Project[]) =>
      {
        // debugger;

        this.projects = response;
       
       
        this.totalPoRowCount = response.length;
      }
    );
  }

    
  DashboardPoSummaryCancelled()
  {
    this.dashboardService.getAllProjectsCancelledTransaction()
    .subscribe(
      (response: Project[]) =>
      {
        // debugger;

        this.projects = response;
       
       
        this.totalPoRowCountCancelled = response.length;
      }
    );
  }
 
  DashboardPoSummaryPartialReceiving()
  {
    this.dashboardService.getAllProjectsPartialPoService()
    .subscribe(
      (response: Project[]) =>
      {
        // debugger;

        this.projects = response;
       
       
        this.totalPoPartialReceiving = response.length;
      }
    );
  }
  DashboardPoSummaryPartialReceivingNearlyExpiryApproval()
  {
    this.dashboardService.getAllProjetPONearlyExpiryApprovalService()
    .subscribe(
      (response: Project[]) =>
      {
        // debugger;

        this.projects = response;
       
       
        this.totalPoPartialReceivingNearlyExpiryApproval = response.length;
      }
    );
  }

  onSearchClick()
  {
    console.log(this.loginService.currentUserName);
  }

  getState(outlet)
  {
    return outlet.isActivated? outlet.activatedRoute.snapshot.url[0].path && outlet.activatedRouteData["linkIndex"] : "none";
  }
}
