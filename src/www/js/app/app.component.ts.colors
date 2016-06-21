import { Component } from '@angular/core';

class Country {
	constructor(public name: string, public code: string) {}
}

@Component({
  selector: 'my-app',
  template: `<h1>{{message | uppercase}}</h1>
	<input type="text" [(ngModel)]="message"><br>

	Color Filter: <input type="text" [(ngModel)]="colorFilter">
	<ul>
		<li *ngFor="let color of optimizedSortedColors">{{color}}</li>
	</ul>
	New Color: <input type="text" [(ngModel)]="newColor">
	<button (click)="addColor()">Add Color</button>

	<ul>
		<li *ngFor="let country of countries">
			{{country.code}} - {{country.name}}
		</li>
	</ul>
	`,
	// styles: [
	// 	'td { color:red; }'
	// ]
	styleUrls: [
		'css/home.css'
	]
})
export class AppComponent {

	colors: string[] = ['gold','red','white','blue','black','brown','purple','orange'];
	colorFilter: string = '';

	_lastColors: string[];
	_filteredColors: any[];

	get sortedColors(): string[] {

		return this.colors.filter(color =>
			this.colorFilter.length === 0 || color.startsWith(this.colorFilter)).sort();
	}

	get optimizedSortedColors(): string[] {
		console.log('sorted colors called');

		if (this._lastColors != this.colors) {
			this._filteredColors = [];
			console.log('now sorting');
			this.colors.sort();
			this._lastColors = this.colors;
		} else {
			if (this._filteredColors[this.colorFilter]) {
				return this._filteredColors[this.colorFilter];
			}
		}

		console.log('now filtering');
		return this._filteredColors[this.colorFilter] = this.colors.filter(color =>
			this.colorFilter.length === 0 || color.startsWith(this.colorFilter));
	}

	addColor() {
		//this.colors.push(this.newColor);
		this.colors = this.colors.concat(this.newColor);
		this.newColor = '';
	}




	countries: Country[] = [
		new Country('United States', 'US'),
		new Country('China', 'CN'),
		new Country('India', 'IN'),
		new Country('Russia', 'RU')
	];

	message: string = 'Hi Class!';

}
