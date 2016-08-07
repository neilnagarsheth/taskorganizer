import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { TasksComponent } from './task/task-component/task.component';
import { TaskService } from './task/task.service';

@Component({
    selector: 'task-organizer',
    template: '<task></task>',
	providers: [
		ROUTER_PROVIDERS,
		TaskService
	],
	directives: [TasksComponent]
})
export class AppComponent { 
	
}
