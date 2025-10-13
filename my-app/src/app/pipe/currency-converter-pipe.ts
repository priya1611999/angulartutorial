import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    console.log("value", value, "args", args);
    if (args.length === 0) {
      return value;
    } else if (args.length > 0) {
      let [data] = args;
      console.log("data", data);

      return value * data;
    }
    // Ensure a return statement for all code paths
    return value;
  }

}
