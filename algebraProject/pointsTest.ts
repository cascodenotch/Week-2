import { Point } from "./points";

const coordenada = new Point(2,3);
coordenada.setX (8);
coordenada.setY (5);

console.log(coordenada.getX()); 
console.log(coordenada.getY()); 
console.log(coordenada.toString());

const coordenada2 = new Point (2,10);
console.log(coordenada.distanceToOrigin());
console.log(coordenada.calculateDistance(coordenada2));
