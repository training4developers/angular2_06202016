import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'a' })
export class APipe implements PipeTransform {
	transform(value: string) {
		console.log('pipe a ran');
		return value;
	}
}

@Pipe({ name: 'b', pure: false })
export class BPipe implements PipeTransform {
	transform(value: string) {
		console.log('pipe b ran');
		return value;
	}
}

@Pipe({ name: 'sort', pure: false })
export class SortPipe implements PipeTransform {
	transform(values: string[]) {
		console.log('sort');
		return values.sort();

	}
}


@Component({
	selector: 'my-app',
	template: `
		<input type="text" [(ngModel)]="aText">{{aText | a}}<br>
		<input type="text" [(ngModel)]="bText">{{bText | b}}<br>
		<ul>
			<li *ngFor="let color of colors | sort">{{color}}</li>
		</ul>
		New Color: <input [(ngModel)]="newColor" type="text">
		<button (click)="addColor()">Add Color</button>
	`,
	pipes: [ APipe, BPipe, SortPipe ]
})
export class AppComponent {
	aText: string;
	bText: string;
	colors: string[] = ['red','white','blue'];
	newColor: string;

	addColor() {
		this.colors.push(this.newColor);
		//this.colors = this.colors.concat(this.newColor);
	}
}
