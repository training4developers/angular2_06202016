/// <reference path="../typings/index.d.ts" />

import path = require('path');
import fs = require('fs');
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
	app.use('/css', express.static(path.join(config.webServer.folder, '/css')));
	app.use('/js', express.static(path.join(config.webServer.folder, '/js')));

	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, 'www','index.html'));
	});

	server.listen(config.webServer.port, () =>
		console.log(`web server running on port ${config.webServer.port}`));
}
