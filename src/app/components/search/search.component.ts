import { Component } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged, fromEvent, map, scan, throttleTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor() {
    
    
  }

  ngOnInit() {
    // const search$ = new Observable<Event>(observer => {
    //   console.log('Start in observable');
    //   const search = document.querySelector('#Search');
    //   search?.addEventListener('input', (event) => {
    //     observer.next(event);
    //   })

    //   console.log('End in observable');
    // });

    fromEvent<MouseEvent>(document, 'click')
    .pipe(
      throttleTime(1000),
      map((event) => event.clientX),
      scan((count, clientX) => count + clientX, 0))
    .subscribe((count) => {
      console.log(count);
    })


    // search$
    // .pipe(
    //   map(event => {
    //     return (event.target as HTMLInputElement).value;
    //   }),
    //   debounceTime(500),
    //   map(value => value.length > 3 ? value : ''),
    //   distinctUntilChanged()
    //   )
    // .subscribe(value => {
    //   console.log(value)
    // });
  }

  example: string = 'Example';
  exampleSearch: string = 'Гоголь';

  onInput(event: Event) {

  }
}
