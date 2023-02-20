import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(news: any, search: string = ""): any {
    if(!search.trim()) {
      return news
    }
    return news.filter((n: string) => {
      return n.toLowerCase().includes(search.toLowerCase())
    })
  }

}
