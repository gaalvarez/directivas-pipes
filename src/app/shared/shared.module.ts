import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NumberOnlyDirective } from './number-only/number-only.directive';
import { CurrencyMaskDirective } from './currency-mask/currency-mask.directive';
import { CarouselDirective } from './carousel/carousel.directive';
import { DelayDirective } from './delay/delay.directive';
import { FilterElementPipe } from './filter-element.pipe';

@NgModule({
  declarations: [
    NumberOnlyDirective,
    CurrencyMaskDirective,
    CarouselDirective,
    DelayDirective,
    FilterElementPipe,
  ],
  imports: [CommonModule],
  exports: [
    NumberOnlyDirective,
    CurrencyMaskDirective,
    CarouselDirective,
    DelayDirective,
    FilterElementPipe,
  ],
  providers: [CurrencyPipe],
})
export class SharedModule {}
