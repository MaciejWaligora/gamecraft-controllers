"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewController = void 0;
class ViewController {
    constructor(config) {
        this._currentAnimations = [];
        this._config = config;
    }
    addAnimation(animation) {
        this._currentAnimations.push(animation);
    }
    removeAnimatio(animation) {
        this._currentAnimations = this._currentAnimations.filter(animation => !animation.isFinished());
    }
}
exports.ViewController = ViewController;
