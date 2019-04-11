import { Pipe, PipeTransform } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'progress'
})
export class ProgressPipe implements PipeTransform {

  transform(value: string, time: number = 300): Observable<string> {
    return interval(time).pipe(map(n => {
      return value.substring(0, n % (value.length + 1));
    }));

    // return Observable.create((observer) => {
    //   for (let i = 0; i < value.length; i++) {
    //     setTimeout(() => {
    //       const str = value.substring(0, i + 1);
    //       console.log(str);
    //       observer.next(str);
    //     }, 300 * i);
    //   }
    // });
  }

}
