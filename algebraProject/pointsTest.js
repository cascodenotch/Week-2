"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var points_1 = require("./points");
var coordenada = new points_1.Point(2, 3);
coordenada.setX(8);
coordenada.setY(5);
console.log(coordenada.getX());
console.log(coordenada.getY());
console.log(coordenada.toString());
var coordenada2 = new points_1.Point(2, -10);
console.log(coordenada.distanceToOrigin());
console.log(coordenada.calculateDistance(coordenada2));
console.log(coordenada2.calculateQuadrant());
