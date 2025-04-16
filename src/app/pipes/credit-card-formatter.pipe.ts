import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter',
  standalone: true
})
export class CreditCardFormatterPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/(\d{4})(?=\d)/g, '$1-');
  }
}
