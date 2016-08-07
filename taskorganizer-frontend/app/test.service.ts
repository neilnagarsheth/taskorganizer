import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class TestService{
	constructor (private http: Http){}
	private testServer = "http://localhost:1337/getTestService";

	getTest(){
		return this.http
				   .get(this.testServer)
				   .map(response => response.json())

	}

	private handleError(error: any) {
		console.error('An error occurred', error);
	}
}
