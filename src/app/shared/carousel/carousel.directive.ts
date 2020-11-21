import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCarousel]',
})
export class CarouselDirective implements OnInit {
  @Input('appCarouselFrom')
  items: any[];
  @Input('appCarouselAutoplay')
  set autoplay(autoplay: 'on' | 'off') {
    autoplay === 'on' ? this.setAutoplayTimer() : this.clearAutoplayTimer();
  }

  index = 0;

  timerId: number | null = null;
  context: CarouselContext | null = null;

  constructor(private tpl: TemplateRef<CarouselContext>, private vcr: ViewContainerRef) {}

  ngOnInit(): void {
    this.context = {
      $implicit: this.items[0],
      controller: { next: () => this.next(), prev: () => this.prev() },
    };
    this.vcr.createEmbeddedView(this.tpl, this.context);
  }

  next() {
    this.index++;
    if (this.index >= this.items.length) {
      this.index = 0;
    }
    this.context.$implicit = this.items[this.index];
  }

  prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.items.length - 1;
    }
    this.context.$implicit = this.items[this.index];
  }

  private clearAutoplayTimer() {
    window.clearInterval(this.timerId);
  }

  private setAutoplayTimer() {
    this.timerId = window.setInterval(() => this.next(), 1000);
  }
}

export interface CarouselContext {
  $implicit: any;
  controller?: {
    next: () => void;
    prev: () => void;
  };
}
