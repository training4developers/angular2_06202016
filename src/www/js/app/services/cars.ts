import { Injectable } from '@angular/core';
import { ICar } from '../interfaces/icar.ts';
import { Car } from '../models/car.ts';

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
