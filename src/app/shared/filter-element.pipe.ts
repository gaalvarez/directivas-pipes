import { Pipe, PipeTransform } from '@angular/core';
import { PeriodicElement } from '../app.component';

@Pipe({
  name: 'filterElement',
})
export class FilterElementPipe implements PipeTransform {
  transform(value: PeriodicElement[], ref: number): unknown {
    return value.filter((item) => item.weight > ref);
  }
}
