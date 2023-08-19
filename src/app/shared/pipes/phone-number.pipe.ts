import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(phoneNumber: string): string {
    const ddd = phoneNumber.substring(0, 3);
    const firstPart = phoneNumber.substring(3, 8);
    const secondPart = phoneNumber.substring(8);

    return `(${ddd})${firstPart}-${secondPart}`;
  }

}
