import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { TaskStatusDetail } from '../models/task-status-detail';
import { GroupedTask } from '../models/grouped-task';


@Injectable({
  providedIn: 'root'
})
export class TasksService
{
  constructor(private httpClient: HttpClient)
  {
  }

  getTasks() : Observable<GroupedTask[]>
  {
    return this.httpClient.get<GroupedTask[]>("/api/tasks", { responseType: "json" });
  }

  getTaskByTaskID(TaskID: number) : Observable<Task>
  {
    return this.httpClient.get<Task>("/api/tasks/searchbytaskid/" + TaskID, { responseType: "json" });
  }

  updateTaskStatus(taskStatusDetail: TaskStatusDetail) : Observable<TaskStatusDetail>
  {
    return this.httpClient.put<TaskStatusDetail>("/api/updatetaskstatus", taskStatusDetail, { responseType: "json" });
  }

  insertTask(newTask: Task): Observable<Task>
  {
    return this.httpClient.post<Task>("/api/createtask", newTask, { responseType: "json" });
  }
}

