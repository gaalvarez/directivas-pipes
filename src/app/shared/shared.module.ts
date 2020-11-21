import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NumberOnlyDirective } from './number-only/number-only.directive';
import { CurrencyMaskDirective } from './currency-mask/currency-mask.directive';

@NgModule({
  declarations: [NumberOnlyDirective, CurrencyMaskDirective],
  imports: [CommonModule],
  exports: [NumberOnlyDirective, CurrencyMaskDirective],
  providers: [CurrencyPipe],
})
export class SharedModule {}
