import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cars } from '../services/cars.ts';
import { ICar } from '../interfaces/icar.ts';
import { Car } from '../models/car.ts';

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
	<button (click)="createCar()">Create Car</button>`
})
export class CarTable implements OnInit {

	constructor(
		private router: Router,
		private carsSvc: Cars
	) { }

	cars: ICar[] = [];
	colorFilter: string = '';

	private lastCars: ICar[] = null;
	private filteredCars: any[];

	ngOnInit() {
		this.cars = this.carsSvc.getAll();
	}

	createCar() {
		this.router.navigate(['/create']);
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
