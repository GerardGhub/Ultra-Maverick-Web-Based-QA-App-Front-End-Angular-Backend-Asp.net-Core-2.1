import { Component, OnInit } from '@angular/core';
import { Chart } from "angular-highcharts";
import { DashboardService } from 'src/app/services/dashboard.service';
import { LoginService } from 'src/app/services/login.service';
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { columnChartOptions } from 'src/app/charts/column-chart';
import { Booking } from 'src/app/models/booking';
import { Project } from 'src/app/models/project';
import { interval, Observable, Subscription } from 'rxjs';
import { WhCheckerDashboardService } from 'src/app/services/wh-checker-dashboard.service';
import { DryWhStoreOrders } from 'src/app/models/dry-wh-store-orders';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;
  ToDay: Date;

  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMembers = [];

  //properties
  dashboardGridCols: number = 4;
  cardColspan: number = 2;
  bookings: Booking[] = [];
  WhRejects: Project[] = [];
  WhStoreOrders: DryWhStoreOrders[] = [];
  columnChart: Chart = new Chart(columnChartOptions);
  bookingsLoadingStarted: boolean = false;
  projects: Project[] = [];
  totalPoRowCount: number = null;
  totalPoRowCountCancelled: number = null;
  totalPoPartialReceiving: number = null;
  totalPoPartialRejectatWH: number = null;
  private updateSubscription: Subscription;
  totalPartialPoReceivingRejectRowCount: number = null;

  totalStoreOrderRowCount: number = null;
  totalStoreOrderPreparedDistinctRowCount: number = null;

  totalCancelledTransactions: number = null;
  totalStoreDispatching: number = null;

  constructor(private dashboardService: DashboardService, 
    public loginService: LoginService, 
    private mediaObserver: MediaObserver,
    private whCheckerDashboardService: WhCheckerDashboardService) {

  }

  ngOnInit() {

    //responsive dashbaord
    this.mediaObserver.asObservable().subscribe((media: MediaChange[]) => {
      if (media.some(mediaChange => mediaChange.mqAlias == "lt-sm")) {
        this.dashboardGridCols = 1;
        this.cardColspan = 1;
      }
      else if (media.some(mediaChange => mediaChange.mqAlias == "lt-md")) {
        this.dashboardGridCols = 2;
        this.cardColspan = 2;
      }
      else {
        this.dashboardGridCols = 4;
        this.cardColspan = 2;
      }
    });
    //


    //bookings
    // this.bookingsLoadingStarted = true;
    // this.dashboardService.getBookings().subscribe(
    //   (response: any) =>
    //   {
    //     this.bookings = response;
    //     this.bookingsLoadingStarted = false;
    //     this.totalPartialPoReceivingRejectRowCount = response.length;
    //   },
    //   (error) =>
    //   {
    //     console.log(error);
    //     this.bookingsLoadingStarted = false;
    //   }
    // );














    this.loginService.detectIfAlreadyLoggedIn();
    this.Designation = "Team Leader";
    // this.Username = "Gerard Singian";

    this.ToDay = new Date();

    this.Clients = [
      "ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"
    ];

    this.Projects = [
      "Project A", "Project B", "Project C", "Project D"
    ];

    for (var i = 2019; i >= 2010; i--) {
      this.Years.push(i);
    }




    this.DashboardPoSummary();
    this.DashboardPoSummaryCancelled();
    this.DashboardPoSummaryPartialReceiving();
    this.DashboardPoSummaryPartialReceivingRejectonWH();

    this.DashboardStoreOrder();
    this.DashboardDistinctPreparedStoreOrder();
    // this.DashboardDistinctCancelledPreparedStoreOrder();
    this.DashboardAllTotalCancelledItems();
    this.DashboardAllStoreTotalDispatchDistinct();
    // this.IntervalPageforRefresh();
  }

  IntervalPageforRefresh() {
    // this.updateSubscription = interval(1000).subscribe(
    //   (val) => { this.DashboardPoSummary()
    // }

    // );
    //in 10 seconds do something
    interval(10000).subscribe(x => {
      this.DashboardPoSummary();
    });

  }

  DashboardPoSummary() {
    this.dashboardService.getAllProjects()
      .subscribe(
        (response: Project[]) => {
          // debugger;

          this.projects = response;


          this.totalPoRowCount = response.length;
        }
      );
  }

  DashboardPoSummaryCancelled() {
    this.dashboardService.getAllProjectsCancelledTransaction()
      .subscribe(
        (response: Project[]) => {
          // debugger;

          this.projects = response;


          this.totalPoRowCountCancelled = response.length;
        }
      );
  }

  DashboardPoSummaryPartialReceiving() {
    this.dashboardService.getAllProjectsPartialPoService()
      .subscribe(
        (response: Project[]) => {
          // debugger;

          this.projects = response;


          this.totalPoPartialReceiving = response.length;
        }
      );
  }



  DashboardPoSummaryPartialReceivingRejectonWH() {
    this.dashboardService.getAllProjectsPartialReceivingReject()
      .subscribe(
        (response: Project[]) => {
          // debugger;

          this.WhRejects = response;


          this.totalPoPartialRejectatWH = response.length;
        }
      );
  }


  
  DashboardStoreOrder() {
    this.whCheckerDashboardService.getStoreOrders()
      .subscribe(
        (response: DryWhStoreOrders[]) => {
          // debugger;

          this.WhStoreOrders = response;


          this.totalStoreOrderRowCount = response.length;
        }
      );
  }




  DashboardDistinctPreparedStoreOrder() {
    this.whCheckerDashboardService.getDistinctPreparedStoreOrders()
      .subscribe(
        (response: DryWhStoreOrders[]) => {
          // debugger;

          this.WhStoreOrders = response;


          this.totalStoreOrderPreparedDistinctRowCount = response.length;
        }
      );
  }

  // DashboardDistinctCancelledPreparedStoreOrder() {
  //   this.whCheckerDashboardService.getDistinctPreparedCancelledStoreOrders()
  //     .subscribe(
  //       (response: DryWhStoreOrders[]) => {
  //         // debugger;

  //         this.WhStoreOrders = response;


  //         this.totalCancelledStoreOrderPreparedDistinctRowCount = response.length;
  //       }
  //     );
  // }


  DashboardAllTotalCancelledItems() {
    this.whCheckerDashboardService.getAllPreparedCancelledStoreOrders()
      .subscribe(
        (response: DryWhStoreOrders[]) => {
          // debugger;

          this.WhStoreOrders = response;


          this.totalCancelledTransactions = response.length;
        }
      );
  }

  DashboardAllStoreTotalDispatchDistinct() {
    this.whCheckerDashboardService.getAllDispatchingStoreOrders()
      .subscribe(
        (response: DryWhStoreOrders[]) => {
    

          this.WhStoreOrders = response;


          this.totalStoreDispatching = response.length;
        }
      );
  }

  

  // onProjectChange($event) {
  //   if ($event.target.innerHTML == "Project A") {
  //     this.ProjectCost = 2113507;
  //     this.CurrentExpenditure = 96788;
  //     this.AvailableFunds = 52436;
  //   }
  //   else if ($event.target.innerHTML == "Project B") {
  //     this.ProjectCost = 88923;
  //     this.CurrentExpenditure = 22450;
  //     this.AvailableFunds = 2640;
  //   }
  //   else if ($event.target.innerHTML == "Project C") {
  //     this.ProjectCost = 662183;
  //     this.CurrentExpenditure = 7721;
  //     this.AvailableFunds = 9811;
  //   }
  //   else if ($event.target.innerHTML == "Project D") {
  //     this.ProjectCost = 928431;
  //     this.CurrentExpenditure = 562;
  //     this.AvailableFunds = 883;
  //   }
  // }
}
