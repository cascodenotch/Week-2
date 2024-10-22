"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    Point.prototype.distanceToOrigin = function () {
        var distancia = Math.sqrt(Math.pow((this.x - 0), 2) + Math.pow((this.y - 0), 2));
        return distancia;
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var distancia = Math.sqrt(Math.pow((this.x - anotherPoint.getX()), 2) + Math.pow((this.y - anotherPoint.getY()), 2));
        return distancia;
    };
    Point.prototype.calculateQuadrant = function () {
        if (this.x == 0 || this.y == 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else if (this.x > 0 && this.y < 0) {
            return 4;
        }
    };
    return Point;
}());
exports.Point = Point;
