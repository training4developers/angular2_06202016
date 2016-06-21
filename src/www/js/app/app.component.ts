import { Component, Injectable, OnInit } from '@angular/core';

interface ICar {
	make: string;
	model: string;
	year: number;
	color: string;
}

class Car implements ICar {
	constructor(
		public make: string = '',
		public model: string = '',
		public year: number = undefined,
		public color: string = ''
	) { }
}

@Injectable()
export class Cars {

	private cars: ICar[] = [
		new Car('Lambourghini', 'Diablo', 2018, 'red'),
		new Car('Ford', 'Pinto', 1978, 'hot pink'),
		new Car('Gily', 'S', 2015, 'teal')
	];

	getAll(): ICar[] {
		return this.cars;
	}

	add(car: ICar): Cars {
		this.cars = this.cars.concat(car);
		return this;
	}

}

@Component({
  selector: 'my-app',
  template: `Color Filter: <input type="text" [(ngModel)]="colorFilter">
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
			<tr *ngFor="let car of sortedCars">
				<td>{{car.make}}</td>
				<td>{{car.model}}</td>
				<td>{{car.year}}</td>
				<td>{{car.color}}</td>
			</tr>
		</tbody>
	</table>
	<form>
		<label>
			Make <input type="text" [(ngModel)]="newCar.make">
		</label>
		<label>
			Model <input type="text" [(ngModel)]="newCar.model">
		</label>
		<label>
			Year <input type="number" [(ngModel)]="newCar.year">
		</label>
		<label>
			Color <input type="text" [(ngModel)]="newCar.color">
		</label>
		<button type="button" (click)="addCar()">Add Car</button>
	</form>`,
	providers: [ Cars ]
})
export class AppComponent implements OnInit {

	constructor(private carsSvc: Cars) { }

	cars: ICar[] = [];
	colorFilter: string = '';
	newCar: ICar = { make: '', model: '', year: undefined, color: '' };

	private lastCars: ICar[] = null;
	private filteredCars: any[];

	ngOnInit() {
		this.cars = this.carsSvc.getAll();
	}

	addCar(): void {
		this.cars = this.carsSvc.add(this.newCar).getAll();
		this.newCar = new Car();
	}

	get sortedCars() {

		if (this.lastCars !== this.cars) {
			this.filteredCars = [];
			this.cars.sort((carA, carB) => carA.year - carB.year);
			this.lastCars = this.cars;
		}

		if (this.filteredCars[this.colorFilter]) {
			return this.filteredCars[this.colorFilter];
		}

		return this.filteredCars[this.colorFilter] = this.cars.filter(car =>
			this.colorFilter.length === 0 || car.color.startsWith(this.colorFilter)
		);

	}

}
