import { provideRouter, RouterConfig } from '@angular/router';

import { CarTable } from './components/car-table.ts';
import { CarForm } from './components/car-form.ts';

const routes: RouterConfig = [
	{ path: "", component: CarTable },
	{ path: "create", component: CarForm }
];

export const APP_ROUTER_PROVIDER = [
	provideRouter(routes)
];
