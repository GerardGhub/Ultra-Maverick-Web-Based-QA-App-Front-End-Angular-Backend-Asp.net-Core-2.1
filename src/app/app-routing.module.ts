import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading, PreloadAllModules } from '@angular/router';
import { AboutComponent } from "./admin/components/about/about.component";
import { CanDeactivateGuardService } from './guards/can-deactivate-guard.service';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, data: { linkIndex: 2 } },
  { path: "signup", component: SignUpComponent, canDeactivate: [CanDeactivateGuardService], data: { linkIndex: 3 } },
  { path: "about", component: AboutComponent, data: { linkIndex: 1 } },
  { path: "admin", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule) },
  { path: "employee", loadChildren: () => import("./employee/employee.module").then(m => m.EmployeeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule
{
}









// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AboutComponent } from './admin/about/about.component';
// import { DashboardComponent } from './admin/dashboard/dashboard.component';
// import { ProjectsComponent } from './admin/projects/projects.component';
// import { CanActivateGuardService } from './can-activate-guard.service';
// import { LoginComponent } from './login/login.component';

// const routes: Routes = [
//   {path: "",redirectTo: "login", pathMatch: "full"},
//   {path: "login", component: LoginComponent},
//   {path: "dashboard", component: DashboardComponent, canActivate: [ CanActivateGuardService ], data: {
//     expectedRole: "Admin"}},
//   {path: "about", component: AboutComponent},
//   {path: "projects", component: ProjectsComponent, canActivate: [ CanActivateGuardService], data: {
//     expectedRole: "Admin"}}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes, { useHash: true})],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
