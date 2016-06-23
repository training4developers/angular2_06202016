import { Component } from '@angular/core';

class Car {
	constructor(
		public make: string,
		public model: string,
		public year: number,
		public color: string
	) { }
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
			Make <input type="text" [(ngModel)]="carMake">
		</label>
		<label>
			Model <input type="text" [(ngModel)]="carModel">
		</label>
		<label>
			Year <input type="number" [(ngModel)]="carYear">
		</label>
		<label>
			Color <input type="text" [(ngModel)]="carColor">
		</label>
		<button type="button" (click)="addCar()">Add Car</button>
	</form>`
})
export class AppComponent {

	colorFilter: string = '';
	carMake: string;
	carModel: string;
	carYear: number;
	carColor: string;

	cars: Car[] = [
		new Car('Lambourghini', 'Diablo', 2018, 'red'),
		new Car('Ford', 'Pinto', 1978, 'hot pink'),
		new Car('Gily', 'S', 2015, 'teal')
	];

	private lastCars: Car[] = null;
	private filteredCars: any[];

	addCar(): void {

		const newCar = new Car(
			this.carMake, this.carModel, this.carYear, this.carColor
		);

		this.cars = this.cars.concat(newCar);

		this.carMake = '';
		this.carModel = '';
		this.carYear = undefined;
		this.carColor = '';
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
