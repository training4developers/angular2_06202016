import { Model } from './model';
import { DataAccess } from './data-access';

export class BaseDataAccess<T extends Model> implements DataAccess<T> {

	private lastIndex: number = 1;
	private models: T[] = [];

	constructor(public modelName: string) { }

	getAll(): T[] {
		return this.models;
	}

	get(id: number): T {
		return this.models.find(model => model.id === id);
	}

	insert(model: T): T {
		if (!model.id) model.id = this.lastIndex++;
		this.models.push(model);
		return model;
	}

	replace(model: T): T {
		this.delete(model.id);
		return this.insert(model);
	}

	delete(id: number): T {
		const model = this.models.find(model => model.id === id);
		const modelIndex = this.models.indexOf(model);
		this.models.splice(modelIndex, 1);
		return model;
	}
}
