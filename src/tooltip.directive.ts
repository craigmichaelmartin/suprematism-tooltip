import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

export type TooltipPosition = 'top'|'bottom'|'left'|'right';

@Directive({
  selector: '[supreTooltipText]'
})
export class TooltipDirective {

  private position: TooltipPosition = 'top';

  @Input('supreTooltipText') text: string;

  @Input() set supreTooltipPosition(position: TooltipPosition) {
    this.position = position;
  }

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.renderer.setElementClass(this.el.nativeElement, this.getClass(), true);
    this.renderer.setElementAttribute(this.el.nativeElement, 'data-hint', this.text);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.setElementClass(this.el.nativeElement, this.getClass(), false);
  }

  private getClass(): string {
    return `tooltip--${this.position}`;
  }

}
