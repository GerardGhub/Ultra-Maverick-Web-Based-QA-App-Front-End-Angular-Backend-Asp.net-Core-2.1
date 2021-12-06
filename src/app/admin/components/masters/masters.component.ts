import { Component, ComponentFactoryResolver, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AllowablePercentageComponent } from 'src/app/allowable-percentage/allowable-percentage.component';
import { ComponentLoaderDirective } from 'src/app/directives/component-loader.directive';
import { ReturnedPOTransactionStatusComponent } from 'src/app/returned-potransaction-status/returned-potransaction-status.component';
import { AspNetRolesComponent } from '../asp-net-roles/asp-net-roles.component';

import { CancelledPOTransactionStatusComponent } from '../cancelled-potransaction-status/cancelled-potransaction-status.component';
import { ClientLocationsComponent } from '../client-locations/client-locations.component';
import { CountriesComponent } from '../countries/countries.component';
import { RejectedStatusComponent } from '../rejected-status/rejected-status.component';
import { TaskPrioritiesComponent } from '../task-priorities/task-priorities.component';
import { TaskStatusComponent } from '../task-status/task-status.component';
import { TblNearlyExpiryMgmtComponent } from '../tbl-nearly-expiry-mgmt/tbl-nearly-expiry-mgmt.component';
import { UserAccountComponent } from '../user-account/user-account.component';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.scss']
})
export class MastersComponent implements OnInit
{
  RouteNames : string = "";


  masterMenuItems = [
   
  ];



  activeItem: string;
  tabs = [];

  @ViewChildren(ComponentLoaderDirective) componentLoaders: QueryList<ComponentLoaderDirective>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private router: Router )
  {
  }

  ngOnInit()
  {
    console.log(this.router.url); //  /routename
    this.RouteNames = this.router.url;


    if(this.RouteNames == "/admin/masters")
    {
    
  
    this.masterMenuItems = [
      { itemName: "Countries", displayName: "Location", component: CountriesComponent },
      { itemName: "ClientLocations", displayName: "Department", component: ClientLocationsComponent },
      { itemName: "TaskPriorities", displayName: "Task Priorities", component: TaskPrioritiesComponent },
      { itemName: "TaskStatus", displayName: "Task Status", component: TaskStatusComponent },
      { itemName: "RejectedStatus", displayName: "RM Rejected Status", component: RejectedStatusComponent },
      { itemName: "CancelledPOTransactionStatus", displayName: "RM Reject Status of QC", component: CancelledPOTransactionStatusComponent },
      { itemName: "ReturnedPOTransactionStatus", displayName: "RM Cancelled PO Status", component: ReturnedPOTransactionStatusComponent },
      { itemName: "AccountManagement", displayName: "Account Management", component: UserAccountComponent },
      { itemName: "AllowablePercentage", displayName: "Allowable Percentage", component: AllowablePercentageComponent },
      { itemName: "ExpirationDaysManagement", displayName: "Expiration Days", component: TblNearlyExpiryMgmtComponent },
      { itemName: "User Roles", displayName: "User Roles", component: AspNetRolesComponent },
    ];
    }
    
    if(this.RouteNames == "/admin/masters/user")
    {
      this.masterMenuItems = [
        { itemName: "AccountManagement", displayName: "Account Management", component: UserAccountComponent },
        { itemName: "User Roles", displayName: "User Roles", component: AspNetRolesComponent },
      ];
    }

    if(this.RouteNames == "/admin/masters/rmclassification")
    {
      this.masterMenuItems = [
     
        { itemName: "AllowablePercentage", displayName: "Allowable Percentage", component: AllowablePercentageComponent },
        { itemName: "ExpirationDaysManagement", displayName: "Expiration Days", component: TblNearlyExpiryMgmtComponent },
      ];
    }


    if(this.RouteNames == "/admin/masters/rmcancelandreturn")
    {
      this.masterMenuItems = [
        { itemName: "RejectedStatus", displayName: "RM Rejected Status", component: RejectedStatusComponent },
        { itemName: "CancelledPOTransactionStatus", displayName: "RM Reject Status of QC", component: CancelledPOTransactionStatusComponent },
        { itemName: "ReturnedPOTransactionStatus", displayName: "RM Cancelled PO Status", component: ReturnedPOTransactionStatusComponent },
      ];
    }

  }

  menuItemClick(clickedMasterMenuItem: any)
  {
    //console.log(clickedMasterMenuItem);
    this.activeItem = clickedMasterMenuItem.itemName;

    let matchingTabs = this.tabs.filter((tab) =>
    {
      return tab.itemName == clickedMasterMenuItem.itemName
    });

    if (matchingTabs.length == 0)
    {
      this.tabs.push({
        tabIndex: this.tabs.length,
        itemName: clickedMasterMenuItem.itemName,
        displayName: clickedMasterMenuItem.displayName
      });

      setTimeout(() => {
        var componentLoadersArray = this.componentLoaders.toArray();
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(clickedMasterMenuItem.component);

        var viewContainterRef = componentLoadersArray[this.tabs.length - 1].viewContainerRef;

        var componentRef = viewContainterRef.createComponent(componentFactory);

        this.tabs[this.tabs.length - 1].viewContainerRef = viewContainterRef;

        if (clickedMasterMenuItem.component.name == "CountriesComponent")
        {
          var componentInstance = componentRef.instance as CountriesComponent;
          // componentInstance.message = "Hello to Countries";
        }
      }, 100);
    }
  }

  onCloseClick(clickedTab: any)
  {
    clickedTab.viewContainerRef.remove();
    this.tabs.splice(this.tabs.indexOf(clickedTab), 1);
    if (this.tabs.length > 0)
    {
      this.activeItem = this.tabs[0].itemName;
    }
  }
}
