import { CurrencyPipe } from '@angular/common';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCurrencyMask]',
})
export class CurrencyMaskDirective {
  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef, private currencyPipe: CurrencyPipe) {
    this.el = elementRef.nativeElement;
  }

  //remover todo menos el punto decimal si existe
  @HostListener('focus', ['$event.target.value'])
  onfocus(value) {}

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
    return this.currencyPipe.transform(value, '', '$');
  }

  parse(value: string): string {
    return value;
  }
}
