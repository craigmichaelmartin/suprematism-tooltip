import { ElementRef, Renderer } from '@angular/core';
export declare type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export declare class TooltipDirective {
    private el;
    private renderer;
    private position;
    text: string;
    supreTooltipPosition: TooltipPosition;
    constructor(el: ElementRef, renderer: Renderer);
    onMouseEnter(): void;
    onMouseLeave(): void;
    private getClass();
}
