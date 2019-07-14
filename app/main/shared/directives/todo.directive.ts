import { Directive, ElementRef, Renderer, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTodo]'
})
export class TodoDirective implements OnChanges {

  @Input() status;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnChanges() {
    let diffDays: number;
    diffDays = 0;
    if (this.status) {
      const date = new Date(this.status);
      const timeDiff = new Date().getTime() - date.getTime();
      diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    }
    if (diffDays === 0) {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', 'red');
    }
  }
}
