import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

interface Widget {
	id: number;
	name: string;
	description: string;
	color: string;
	size: string;
	quantity: number;
}

@Injectable()
export class Widgets {

	constructor(private http: Http) { }

	getAll(): Observable<Widget[]> {
		return this.http.get('http://t4dclass.herokuapp.com/api/widgets')
			.map(res => res.json());
	}

}

@Component({
	selector: 'widget-list',
	template: `<ul><li *ngFor="let widget of widgets">{{widget.name}}
		<button (click)="editButton(widget._id)">Edit</button></li></ul>`
})
export class WidgetList {

	@Input()
	widgets: Widget[];

	@Output()
	editWidget: EventEmitter<string> = new EventEmitter<string>();

	editButton(widgetId: string) {
		this.editWidget.emit(widgetId);
	}

}

@Component({
	selector: 'my-app',
	template: `<h1>Widget Manager</h1>
	<widget-list [widgets]="widgets" (editWidget)="editWidget($event)"></widget-list>`,
	providers: [ Widgets ],
	directives: [ WidgetList ]
})
export class AppComponent implements OnInit {

	widgets: Widget[];

	constructor(private widgetsSvc: Widgets) { }

	ngOnInit() {
		this.widgetsSvc.getAll().subscribe(results => {
			this.widgets = results;
		});
	}

	editWidget(widgetId: string) {
		console.log(widgetId, "clicked");
	}

}
