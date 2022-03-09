import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(items: any[], searchText: string): string[] {
  //   if (!items || !items.length) return items
  //   if (!searchText || !searchText.length) return items
  //   return items.filter(item => {
  //     return item.viewValue.toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1
  //   })
  // }

  transform(list: string[], searchText: string) {
    if (!list || !list.length ) { return [] }
    else if (!searchText || !searchText.length) { return list }
    return list.filter(item => {
      return item.toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1
    })
  }

}
