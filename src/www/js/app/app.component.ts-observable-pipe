import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs/Rx';

import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({ name: 'myAsync', pure: false })
// export class MyAsyncPipe implements PipeTransform {
// 	transform(value: any) {
// 		value.subscribe(function(v) {
// 			return v;
// 		})
// 	}
// }


@Component({
	selector: 'my-app',
	template: `<h1>{{message | async}}</h1>`
})
export class AppComponent implements OnInit {

	message: Observable<number>;

	ngOnInit() {

		//var o: Observable<number> = Observable.range(1,5);

		var o: Observable<number> = Observable.create(function(observer) {

			var t=0;

			setInterval(function() {
				observer.next(t++);
			},500);

		});

		this.message = o.map(num => num * 2);


	}

}
