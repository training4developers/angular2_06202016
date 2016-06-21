import { Component } from '@angular/core';

class Country {
	constructor(public name: string, public code: string) {}
}

class Car {
	constructor(
		public make: string,
		public model: string,
		public year: string,
		public color: string
	) { }
}

@Component({
  selector: 'my-app',
  template: `<h1>{{message | uppercase}}</h1>
	<input type="text" [(ngModel)]="message"><br>

	Color: Filter: <input type="text" [(ngModel)]="colorFilter">
	<ul>
		<li *ngFor="let color of sortedColors">{{color}}</li>
	</ul>

	<ul>
		<li *ngFor="let country of countries">
			{{country.code}} - {{country.name}}
		</li>
	</ul>

	<table>
		<thead>
			<tr>
				<th>Make</th>
				<th>Model</th>
				<th>Year</th>
				<th>Color</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="let car of cars">
				<td>{{car.make}}</td>
				<td>{{car.model}}</td>
				<td>{{car.year}}</td>
				<td>{{car.color}}</td>
			</tr>
		</tbody>
	</table>
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




	countries: Country[] = [
		new Country('United States', 'US'),
		new Country('China', 'CN'),
		new Country('India', 'IN'),
		new Country('Russia', 'RU')
	];

	cars: Car[] = [
		new Car('Lambourghini', 'Diablo', '2018', 'red'),
		new Car('Ford', 'Pinto', '1978', 'hot pink'),
		new Car('Gily', 'S', '2015', 'teal')
	];

	message: string = 'Hi Class!';

}
