import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false //recalculate pipe when data changes
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '')
      return value;

    let resultArray = [];
    for (let item of value) {
      if (item[propName] == filterString) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }
}
