export class Point {

    x: number;
    y: number;

    constructor (x: number, y: number){
    this.x=x; 
    this.y=y; 
    }

    setX (x:number):void{
        this.x= x; 
    }

    getX ():number{
        return this.x; 
    }

    setY (y:number):void{
        this.y = y; 
    }

    getY ():number{
        return this.y; 
    }

    toString():string{
        return "("+this.x + "," + this.y+")";

    }

    distanceToOrigin():number{
        let distancia =  Math.sqrt((this.x - 0)**2 + (this.y - 0)**2)
        return distancia;
    }

    calculateDistance(anotherPoint:Point):number{
        let distancia = Math.sqrt((this.x - anotherPoint.getX())**2 + (this.y - anotherPoint.getY())**2)
        return distancia;
    }


}
