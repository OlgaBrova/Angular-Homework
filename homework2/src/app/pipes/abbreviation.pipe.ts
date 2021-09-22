import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviation'
})
export class AbbreviationPipe implements PipeTransform {

  transform(value: string): string {
    
    return value.trim().split(" ").map(x => x[0]).join('');
  }

}
