/// <reference path="../typings/index.d.ts" />

import path = require('path');
import http = require('http');
import express = require('express');

import { Car } from './car';
import { BaseDataAccess } from './base-data-access';
import { Rest } from './rest';

export class CarDataAccess extends BaseDataAccess<Car> { }

var carData = new CarDataAccess('car');
carData.insert(new Car('Ford', 'Fusion', 2015, 'red', 12000));
carData.insert(new Car('Chevrolet', 'S10', 2015, 'red', 12000));
carData.insert(new Car('Toyota', '4Runner', 2015, 'red', 12000));

export default function(config) {

	const app = express();
	const server = http.createServer(app);

	const io = require('socket.io')(server);

	io.on('connection', function (socket) {
	  socket.on('log', function (data) {
	    console.log(data.message);
	  });
	});

	app.use('/api', Rest.getRouter(carData));
	app.use('/libs', express.static(path.join(__dirname, '../node_modules')));
	app.use(express.static(config.webServer.folder));

	server.listen(config.webServer.port, () =>
		console.log(`web server running on port ${config.webServer.port}`));
}
