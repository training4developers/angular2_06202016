import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cars } from '../services/cars.ts';
import { ICar } from '../interfaces/icar.ts';
import { Car } from '../models/car.ts';

@Component({
  selector: 'my-app',
  template: `<form>
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
		<button type="button" (click)="cancelAddCar()">Cancel</button>
	</form>`
})
export class CarForm implements OnInit {

	constructor(
		private router: Router,
		private carsSvc: Cars
	) { }

	newCar: ICar = { make: '', model: '', year: undefined, color: '' };

	ngOnInit() {
	}

	addCar(): void {
		this.carsSvc.add(this.newCar);
		this.router.navigate(['/']);
	}

	cancelAddCar() {
		this.router.navigate(['/']);
	}


}
