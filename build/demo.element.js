var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CustomElement } from './custom-elements';
export var LsMap = (function (_super) {
    __extends(LsMap, _super);
    function LsMap() {
        _super.apply(this, arguments);
    }
    LsMap.prototype.connectedCallback = function () {
        this.innerHTML = 'Hello World';
    };
    LsMap = __decorate([
        CustomElement({
            tagName: 'demo-element'
        }), 
        __metadata('design:paramtypes', [])
    ], LsMap);
    return LsMap;
}(HTMLElement));
//# sourceMappingURL=/Users/dannyblue/Documents/projects/ts-custom-elements/demo.element.js.map