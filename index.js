"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TooltipDirective = (function () {
    function TooltipDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.position = 'top';
    }
    Object.defineProperty(TooltipDirective.prototype, "supreTooltipPosition", {
        set: function (position) {
            this.position = position;
        },
        enumerable: true,
        configurable: true
    });
    TooltipDirective.prototype.onMouseEnter = function () {
        this.renderer.setElementClass(this.el.nativeElement, this.getClass(), true);
        this.renderer.setElementAttribute(this.el.nativeElement, 'data-hint', this.text);
    };
    TooltipDirective.prototype.onMouseLeave = function () {
        this.renderer.setElementClass(this.el.nativeElement, this.getClass(), false);
    };
    TooltipDirective.prototype.getClass = function () {
        return "tooltip--" + this.position;
    };
    __decorate([
        core_1.Input('supreTooltipText'), 
        __metadata('design:type', String)
    ], TooltipDirective.prototype, "text", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], TooltipDirective.prototype, "supreTooltipPosition", null);
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], TooltipDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], TooltipDirective.prototype, "onMouseLeave", null);
    TooltipDirective = __decorate([
        core_1.Directive({
            selector: '[supreTooltipText]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], TooltipDirective);
    return TooltipDirective;
}());
exports.TooltipDirective = TooltipDirective;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-tooltip/src/tooltip.directive.js.map