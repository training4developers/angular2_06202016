import { Injectable } from '@angular/core';
import { provideRouter, RouterConfig, CanActivate, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { CarPlaceHolder } from './components/car-place-holder.ts';
import { CarTable } from './components/car-table.ts';
import { CarForm } from './components/car-form.ts';

@Injectable()
export class CarTableGuard implements CanActivate {

	constructor(private route: ActivatedRoute) {}

  canActivate(): Observable<boolean> | boolean {
		console.dir(this.route);
		this.route.params.subscribe(params => console.dir(params));
		console.log('guard');
		return true;
  }
}

const routes: RouterConfig = [
	{
		path: "cars",
		component: CarPlaceHolder,
		canActivate: [ CarTableGuard ],
		children: [
		 	{ path: "create", component: CarForm },
			{ path: ":id", component: CarTable }
		]
}];

export const APP_ROUTER_PROVIDER = [
	provideRouter(routes), CarTableGuard
];
