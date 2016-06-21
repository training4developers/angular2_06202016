import { ICar } from '../interfaces/icar.ts';

export class Car implements ICar {
	constructor(
		public make: string = '',
		public model: string = '',
		public year: number = undefined,
		public color: string = ''
	) { }
}
