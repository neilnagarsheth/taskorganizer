import { Component } from '@angular/core';
import { Task } from '../task';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';


import { TaskService } from '../task.service';

@Component({
	selector: 'task',
	templateUrl: 'app/task/task-component/task.component.html',
	styleUrls: ['app/task/task-component/task.component.css']
})


export class TasksComponent implements OnInit{
	constructor(private taskService: TaskService, private router: Router){ }
	errorMessage: string;
	tasks: Task[];

	ngOnInit(){
		this.getTasks();
	}

	gotoNewTask(){
		this.router.navigate(['NewTask']);
	}

	gotoTaskDetails(task: Task){
		if(!task.isDone){
			this.router.navigate(['TaskDetails', { id: task.id }]);
		}
	}

	getTaskDelete(id: number){
		//For now, just reload page
		//May need to wait until the css framework changes
		this.deleteTask(id);
		location.reload(true)
	}

	getTasks(){
		this.taskService.getTasks()
						.subscribe(
							response => this.tasks = response, 
					       	error => this.errorMessage = <any>error);
	}

	updateTask(task: Task){
		this.taskService.updateTask(task)
						.subscribe(error => this.errorMessage = <any>error);
	}

	deleteTask(id: number){
		this.taskService.deleteTask(id)
						.subscribe(error => this.errorMessage = <any>error);
	}


}
