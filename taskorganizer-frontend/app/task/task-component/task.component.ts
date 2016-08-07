import { Component } from '@angular/core';
import { Task } from '../task';
import { OnInit } from '@angular/core';


import { TaskService } from '../task.service';

@Component({
	selector: 'task',
	templateUrl: 'app/task/task-component/task.component.html',
	styleUrls: ['app/task/task-component/task.component.css']
})

export class TasksComponent implements OnInit{
	constructor(private taskService: TaskService){ }
	errorMessage: string;
	tasks: Task[];

	ngOnInit(){
		this.getTasks();
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
}
