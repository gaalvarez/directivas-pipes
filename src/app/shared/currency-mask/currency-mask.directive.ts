import { CurrencyPipe } from '@angular/common';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCurrencyMask]',
})
export class CurrencyMaskDirective {
  @Input('simbolo')
  simbolo = '$';

  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef, private currencyPipe: CurrencyPipe) {
    this.el = elementRef.nativeElement;
  }

  //remover todo menos el punto decimal si existe
  @HostListener('focus', ['$event'])
  onfocus(event) {
    const valorInicial = this.el.value;
    this.el.value = this.parse(this.el.value);
    if (valorInicial !== this.el.value) {
      event.stopPropagation();
    }
  }

  //darle formato: agregar separadores de mil y simbolo de pesos $
  @HostListener('blur', ['$event'])
  onblur(event) {
    const valorInicial = this.el.value;
    this.el.value = this.transform(this.el.value);
    if (valorInicial !== this.el.value) {
      event.stopPropagation();
    }
  }

  transform(value: string): string {
    return this.currencyPipe.transform(value, '', this.simbolo);
  }

  parse(value: string): string {
    const [entero, fraccion] = value.split('.');
    return `${entero.replace(/[^0-9]*/g, '')}`;
  }
}
