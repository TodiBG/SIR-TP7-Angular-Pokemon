import { LowerCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], pokeName: string, filterString: string): any[] {
    const res: any[] = [];

    if (values.length === 0 || pokeName.trim() === ""|| filterString.trim() === "" ) {
      return values;
    }


    for (const item of values) {
      const regex = new RegExp(filterString.toLowerCase().trim());

      if ( regex.test(item[pokeName].toLowerCase()) ) {
        res.push(item);
      }
    }

    return res; 
  }

}
