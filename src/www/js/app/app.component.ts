import { Component, OnInit } from '@angular/core'
import { CarTableComponent } from './components/car-table.ts';
import { CarsData } from './services/cars.ts';

@Component({
	selector: 'my-app',
	template: `<h1>Car Manager</h1>
		<car-table [the-cars]="carList"
			(carView)="carView($event)" (carEdit)="carEdit($event)"></car-table>
	`,
	directives: [ CarTableComponent ],
	providers: [ CarsData ]
})
export class AppComponent implements OnInit {

	carList: Object[];

	constructor(private carsData: CarsData) { }

	ngOnInit() {
		this.carsData.getAll().subscribe(cars => this.carList = cars);
		//this.carsData.getAll().then(cars => this.carList = cars);
	}

	carView(carId) {
		console.log('view', carId);
	}

	carEdit(carId) {
		console.log('edit', carId);
	}

}
