import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countyFilter',
  pure: false
})
export class CountyFilterPipe implements PipeTransform {

  transform(items: any[], countyName: string): any {
    if (!items || !countyName) {
      return items;
    }
    return items.filter(item => item['county_name'] === countyName);
  }

}
