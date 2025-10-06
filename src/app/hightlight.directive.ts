import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HightlightDirective {
  @Input('appHighlight') highlightColor: string = '';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'white';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = 'white';
  }
}
