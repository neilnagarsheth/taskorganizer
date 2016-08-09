import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Task } from './task';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class TaskService{
	constructor (private http: Http){}
	private serverURL = "http://localhost:1337/";
	private getTaskURL = "getTask/";
	private getTasksURL = "getTasks/";
	private updateTaskURL = "updateTask/";
	private createTaskURL = "createTask/";

	getTask(id: number): Observable<Task>{
		return this.http
				    .get(this.serverURL + this.getTaskURL + id)
					.map(response => response.json())
					.catch(this.handleError);
	}

	getTasks(): Observable<Task[]> {
		return this.http
				    .get(this.serverURL + this.getTasksURL)
					.map(response => response.json())
					.catch(this.handleError);
	}

	updateTask(task: Task): Observable<Task[]>{
		let body = JSON.stringify(task);
		return this.http
				    .put(this.serverURL + this.updateTaskURL + task.id, body)
					.map(response => response.json())
					.catch(this.handleError);
	}

	createTask(task: Task): Observable<Task[]>{
		let body = JSON.stringify(task);
		return this.http
					.post(this.serverURL + this.createTaskURL, body)
					.map(response => response.json())
					.catch(this.handleError);
	}


	private handleError(error: any) {
		console.error('An error occurred', error);
		return Observable.throw(error);
	}
}
