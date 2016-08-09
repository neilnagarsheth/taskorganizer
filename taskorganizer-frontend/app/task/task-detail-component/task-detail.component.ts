import { Component } from '@angular/core';
import { Task } from '../task';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { RouteParams } from '@angular/router-deprecated';

import { TaskService } from '../task.service';

@Component({
  	selector: 'task-detail',
	templateUrl: 'app/task/task-detail-component/task-detail.component.html'
})

export class TaskDetailComponent implements OnInit{
	constructor(private taskService: TaskService, private routeParams: RouteParams, private router: Router){ }
	errorMessage: string;
	selectedTask: Task;
	selectedId: number = 0;
	isDataAvailable: boolean = false;	

	ngOnInit(){
		 if(this.routeParams.get('id') !== null){
			let id = +this.routeParams.get('id');
			this.getTask(id);
	    } else {
	    	this.selectedTask = new Task();
	    	this.isDataAvailable = true;
	    }
	}

	getTask(id: number){
		this.taskService.getTask(id)
						.subscribe(
							response => this.handleResponse(response), 
					       	error => this.errorMessage = <any>error);
	}

	updateTask(task: Task){
		this.taskService.updateTask(task)
						.subscribe(
							response => this.navigateToTasks(),
							error => this.errorMessage = <any>error);
	}

	handleResponse(response: Task){
		this.selectedTask = response;
		this.selectedId = this.selectedTask.id;
		this.isDataAvailable = true;
	}

	sendTask(task: Task){
		if(this.selectedId){
			this.updateTask(task);
		} else{
			//create
		}
	}

	navigateToTasks(){
		this.router.navigate(['Tasks']);
	}


}