import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, args?: any): any {
    if (args) {
      items = items.filter((item: any) => (item.nome.toLowerCase().indexOf(args.toLowerCase())
          && item.nome.toLowerCase().indexOf(args.toLowerCase())) !== -1
      );
    }

    return items;
  }
}
