import { Model } from './model';

export interface DataAccess<T extends Model> {
	getAll(): T[];
	get(id: number): T;
	insert(model: T): T;
	replace(model: T): T;
	delete(id: number): T;
}
