import { NgModule } from '@angular/core';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardService } from '../services/dashboard.service';
import { ProjectsComponent } from './components/projects/projects.component';
import { CheckBoxPrinterComponent } from './components/check-box-printer/check-box-printer.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { SharedModule } from '../models/shared/shared.module';
import { CountriesComponent } from './components/countries/countries.component';
import { ClientLocationsComponent } from './components/client-locations/client-locations.component';
import { TaskStatusComponent } from './components/task-status/task-status.component';
import { MastersComponent } from './components/masters/masters.component';
import { TaskPrioritiesComponent } from './components/task-priorities/task-priorities.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RejectedStatusComponent } from './components/rejected-status/rejected-status.component';
import { CancelledPOTransactionStatusComponent } from './components/cancelled-potransaction-status/cancelled-potransaction-status.component';
import { StoreOrderComponent } from './components/store-order/store-order.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    ProjectsComponent,
    ProjectComponent,
    CheckBoxPrinterComponent,
    ProjectDetailsComponent,
    CountriesComponent,
    ClientLocationsComponent,
    TaskPrioritiesComponent,
    TaskStatusComponent,
    MastersComponent,
    RejectedStatusComponent,
    CancelledPOTransactionStatusComponent,
    StoreOrderComponent

  

  ],
  imports: [ SharedModule, AdminRoutingModule, RouterModule, MaterialModule, FlexLayoutModule,
    ChartModule ],
  exports: [DashboardComponent, MyProfileComponent, ProjectsComponent, ProjectDetailsComponent],
  providers: [ DashboardService],
  entryComponents: [ CountriesComponent,
    ClientLocationsComponent,
    TaskPrioritiesComponent,
    TaskStatusComponent,
  RejectedStatusComponent,
   CancelledPOTransactionStatusComponent,
  StoreOrderComponent]
})
export class AdminModule { }


