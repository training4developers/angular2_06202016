import { Component, OnInit, Injectable, Inject,
	Input, Output, EventEmitter, OpaqueToken } from '@angular/core';
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

const Logger = new OpaqueToken('logger');

interface ILogger {
	log(entry: IEntry): void;
}

interface IEntry {
	message: string;
}

@Injectable()
export class ConsoleLogger implements ILogger {

	log(entry: IEntry): void {
		console.log(entry.message);
	}

}

declare var io;

@Injectable()
export class SocketLogger implements ILogger {

	private socket = io();

	log(entry: IEntry): void {
		this.socket.emit('log', entry);
	}

}

function loggerFactory(): ILogger {
	if (typeof io === 'undefined') {
		return new ConsoleLogger();
	} else {
		return new SocketLogger();
	}
}

function getConsoleLogger() {
	console.log('I was called');
	return new ConsoleLogger();
}

@Component({
	selector: 'widget-list',
	template: `<ul><li *ngFor="let widget of widgets">{{widget.name}}
		<button (click)="editButton(widget._id)">Edit</button></li></ul>`,
	providers: [ { provide: Logger, useFactory: getConsoleLogger }]
})
export class WidgetList {

	@Input()
	widgets: Widget[];

	@Output()
	editWidget: EventEmitter<string> = new EventEmitter<string>();

	constructor(@Inject(Logger) private logger: ILogger) { }

	editButton(widgetId: string) {
		this.editWidget.emit(widgetId);
	}

}

@Component({
	selector: 'my-app',
	template: `<h1>Widget Manager</h1>
	<input type="checkbox" [(ngModel)]="showMe"> Show Me
	<div *ngIf="showMe">
	<widget-list [widgets]="widgets" (editWidget)="editWidget($event)"></widget-list>
	</div>`,
	providers: [ Widgets, { provide: Logger, useFactory: loggerFactory} ],
	directives: [ WidgetList ]
})
export class AppComponent implements OnInit {

	widgets: Widget[];

	constructor(
		@Inject(Logger) private logger: ILogger,
		private widgetsSvc: Widgets
	) { }

	ngOnInit() {
		this.widgetsSvc.getAll().subscribe(results => {
			this.widgets = results;
		});
	}

	editWidget(widgetId: string) {
		this.logger.log({ message: `${widgetId} was clicked` });
	}

}
