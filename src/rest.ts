/// <reference path="../typings/index.d.ts" />

import express = require('express');
import bodyParser = require('body-parser');
import { Model } from './model';
import { BaseDataAccess } from './base-data-access';

const pluralize = require('pluralize');

export class Rest<T extends Model> {

	public router: express.Router = express.Router();

	constructor(private dataAccess: BaseDataAccess<T>) {

		this.router.param('id', function (req, res, next, id) {

			const parsedId = parseInt(req.params.id);

			if (isNaN(parsedId)) {
				res.status(500).json({ error: 'Id must be a number.' });
			} else {
		  	next();
			}

		});

		this.router.use(bodyParser.json());

		this.router.route(`/${pluralize(this.dataAccess.modelName)}`)
			.get((req, res) => {
				res.json(this.dataAccess.getAll());
			})
			.post((req, res) => {
				if (req.body.id) delete req.body.id;
				res.json(this.dataAccess.insert(req.body));
			});

		this.router.route(`/${pluralize(this.dataAccess.modelName)}/:id`)
			.get((req, res) => {
				res.json(this.dataAccess.get(parseInt(req.params.id)));
			})
			.put((req, res) => {
				req.body.id = parseInt(req.params.id);
				res.json(this.dataAccess.replace(req.body));
			})
			.delete((req, res) => {
				res.json(this.dataAccess.delete(parseInt(req.params.id)));
			});
	}

	static getRouter(dataAccess): express.Router {
		const rest = new Rest(dataAccess);
		return rest.router;
	}
}
