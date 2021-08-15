import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMilesToKM'
})
export class ConvertMilesToKMPipe implements PipeTransform {

  transform(value: any, targetUnits: string): unknown {
    if(!value){
      return;
    }
    switch(targetUnits){
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      case 'cm':
        return value * 1.60934 * 1000 * 1000;
      default:
        throw new Error('Target unit not sported');
    }
    return value * 1.60934;
  }

}
