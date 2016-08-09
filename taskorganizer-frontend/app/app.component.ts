import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { TasksComponent } from './task/task-component/task.component';
import { TaskDetailComponent } from './task/task-detail-component/task-detail.component';
import { TaskService } from './task/task.service';

@Component({
    selector: 'task-organizer',
    template: '<router-outlet></router-outlet>',
	providers: [
		ROUTER_PROVIDERS,
		TaskService
	],
	directives: [TasksComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
  {
    path: '/tasks',
    name: 'Tasks',
    component: TasksComponent,
    useAsDefault: true
  },

  {
    path: '/taskdetails/:id',
    name: 'TaskDetails',
    component: TaskDetailComponent
  }
])

export class AppComponent { 
	
}
