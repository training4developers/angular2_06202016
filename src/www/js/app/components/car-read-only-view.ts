import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CarDetails } from '../components/car-details.ts';
import { CarsData } from '../services/cars.ts';
import { Subscription } from 'rxjs/Rx';

@Component({
	template: `<h2>Car Details</h2>
		<car-details [car]="car"></car-details>
	`,
	directives: [ CarDetails ]
})
export class CarReadOnlyView implements OnInit, OnDestroy {

	car: Object;
	sub: Subscription;

	constructor(private carsData: CarsData) { }

	ngOnInit() {
		this.sub = this.carsData.get(0).subscribe(car => this.car = car);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
