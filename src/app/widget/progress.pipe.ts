import { Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Pipe({
  name: 'progress'
})
export class ProgressPipe implements PipeTransform {

  transform(value: string): Observable<string> {

    return Observable.create((observer) => {
      for (let i = 0; i < value.length; i++) {


        setTimeout(() => {
          const str = value.substring(0, i + 1);
          console.log(str);
          observer.next(str);
        }, 300 * i);
      }
    });
  }

}
