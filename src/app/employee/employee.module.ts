import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './components/tasks/tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing/employee-routing.module';
import { SharedModule } from '../models/shared/shared.module';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { UpdateTaskStatusComponent } from './components/update-task-status/update-task-status.component';



@NgModule({
  declarations: [
    TasksComponent,
    CreateTaskComponent,
    EditTaskComponent,
    UpdateTaskStatusComponent,
  ],
  imports: [
    SharedModule,
    EmployeeRoutingModule
  ],
  exports:
  [
    TasksComponent,
    CreateTaskComponent,
    EditTaskComponent,
    UpdateTaskStatusComponent,
  ]
})
export class EmployeeModule { }

