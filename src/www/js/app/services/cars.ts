import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CarsData {

	constructor(private http: Http) { }

	getAll(): Observable<Object[]> {
		return this.http.get('/api/cars').map(res => res.json());
		// return this.http.get('/api/cars').map(res => {
		// 	return res.json()
		// });
		// return this.http.get('/api/cars').map(function(res) {
		// 	return res.json()
		// });
	}

	// getAll(): Promise<Object[]> {
	// 	return this.http.get('/api/cars').toPromise().then(res => res.json());
	// }

}
