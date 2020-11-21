import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NumberOnlyDirective } from './number-only/number-only.directive';
import { CurrencyMaskDirective } from './currency-mask/currency-mask.directive';
import { CarouselDirective } from './carousel/carousel.directive';

@NgModule({
  declarations: [NumberOnlyDirective, CurrencyMaskDirective, CarouselDirective],
  imports: [CommonModule],
  exports: [NumberOnlyDirective, CurrencyMaskDirective, CarouselDirective],
  providers: [CurrencyPipe],
})
export class SharedModule {}
