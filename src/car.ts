import { Model } from './model';

export class Car implements Model {
	constructor(
		public make: string,
		public model: string,
		public year: number,
		public color: string,
		public price: number,
		public id?: number
	) { }
}
