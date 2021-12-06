import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuardService } from '../../guards/can-activate-guard.service';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ProjectDetailsComponent } from '../components/project-details/project-details.component';
import { MastersComponent } from '../components/masters/masters.component';
import { ProjectsCancelledPoComponent } from '../components/projects-cancelled-po/projects-cancelled-po.component';
import { ProjectsPartialPoComponent } from '../components/projects-partial-po/projects-partial-po.component';
import { ProjetPONearlyExpiryApprovalComponent } from '../components/projet-ponearly-expiry-approval/projet-ponearly-expiry-approval.component';
import { TblNearlyExpiryMgmtComponent } from '../components/tbl-nearly-expiry-mgmt/tbl-nearly-expiry-mgmt.component';
import { WhRejectionApprovalComponent } from '../components/wh-rejection-approval/wh-rejection-approval.component';


const routes: Routes = [

  { path: "", canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }, children: [
    { path: "dashboard", component: DashboardComponent, data: { linkIndex: 0 }  },
    { path: "projects", component: ProjectsComponent, data: { linkIndex: 2 } },
    { path: "projects/view/:projectid", component: ProjectDetailsComponent, data: { linkIndex: 3 } },
    { path: "masters", component: MastersComponent, data: { linkIndex: 4 } },
    { path: "projectscancel", component: ProjectsCancelledPoComponent, data: { linkIndex: 5 } },
    { path: "projectspartialpo", component: ProjectsPartialPoComponent, data: { linkIndex: 6 } },
    { path: "projectsnearlyxpiryapproval", component: ProjetPONearlyExpiryApprovalComponent, data: { linkIndex: 7 } },
    { path: "expirydaymgmt", component: TblNearlyExpiryMgmtComponent, data: { linkIndex: 8 } },
    { path: "masters/user", component: MastersComponent, data: { linkIndex: 9 } },
    { path: "masters/rmclassification", component: MastersComponent, data: { linkIndex: 10 } },
    { path: "masters/rmcancelandreturn", component: MastersComponent, data: { linkIndex: 11 } },
    { path: "whrejectionapproval", component: WhRejectionApprovalComponent, data: { linkIndex: 12 } },
  ]},

];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule { }
