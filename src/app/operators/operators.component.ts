import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { from, fromEvent, of, interval, combineLatest, timer } from 'rxjs';
import { map, filter, tap, debounceTime, reduce, retry, concatMap, switchMap, take, groupBy, mergeMap, skip, takeUntil, catchError} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Call any example you want to test here:
    this.example1();
    this.example2();
    this.example3();
    this.example5();
    this.example6();
    this.example7();
    this.example8();
    this.example9();
    this.example10();
    this.example11();
    this.example12();
    this.example13();
  }

  // Map
  example1() {
    const source = from([1, 2, 3, 4, 5]);
    const doubled = source.pipe(map(value => value * 2));

    doubled.subscribe(result => console.log('Example 1:', result));
  }

  // Filter
  example2() {
    const source = from([1, 2, 3, 4, 5]);
    const filtered = source.pipe(filter(value => value >= 3));

filtered.subscribe(result => console.log('Example 2:', result));
}

// Tap
example3() {
    const source = from([1, 2, 3, 4, 5]);
const tapped = source.pipe(tap(value => console.log(`Processing: ${value}`)));

tapped.subscribe();
}

example5() {
const numbers = of(1, 2, 3, 4, 5);
const sum = numbers.pipe(reduce((acc, value) => acc + value, 0));

sum.subscribe(result => console.log('Example 5:', result));}

example6() {
    if (isPlatformBrowser(this.platformId)) {
      const clicks = fromEvent(document, 'click');
      const result = clicks.pipe(concatMap(() => interval(1000).pipe(take(3))));

      result.subscribe(x => console.log(x));
    }
  }

  example7() {
    if (isPlatformBrowser(this.platformId)) {
      const clicks = fromEvent(document, 'click');
      const result = clicks.pipe(concatMap(() => interval(1000).pipe(take(3))));
      console.log('Example 7: Click anywhere on the document');
      result.subscribe(x => console.log(x));
    }
  }

  example8() {
    if (isPlatformBrowser(this.platformId)) {
      const clicks = fromEvent(document, 'click');
      const result = clicks.pipe(switchMap(() => interval(1000).pipe(take(3))));
      
      console.log('Example 8: Click anywhere on the document (switchMap)');
      result.subscribe(x => console.log('Example 8:', x));
    }
  }

  // GroupBy approach
  example9() {
    const source = from([1, 2, 3, 4, 5, 6]);
    
    const grouped = source.pipe(
      groupBy(val => val % 2 === 0 ? 'even' : 'odd'),
      mergeMap(group => 
        group.pipe(map(val => ({ type: group.key, value: val })))
      )
    );

    grouped.subscribe(result => 
      console.log(`${result.type}: ${result.value}`)
    );
  }

  // CombineLatest
  example10() {
    const first = timer(1000, 2000);
    const second = timer(2000, 2000);

    const combined = combineLatest([first, second]);
    console.log('Example 10: CombineLatest with timers');
    combined.pipe(take(4)).subscribe(value => console.log('Example 10:', value));
  }

  // Skip
  example11() {
    const source = interval(1000);
    const example = source.pipe(skip(3), take(5)); // Added take(5) to limit output

    console.log('Example 11: Skip first 3 values from interval');
    example.subscribe(value => console.log('Example 11:', value));
  }

  // TakeUntil
  example12() {
    const source = interval(1000);
    const timer$ = timer(5000);

    const example = source.pipe(takeUntil(timer$));
    console.log('Example 12: TakeUntil - emits until timer completes after 5 seconds');
    example.subscribe(value => console.log('Example 12:', value));
  }

  // CatchError
  example13() {
    const source = of('1', '2', 'invalid', '4', '5');

    const example = source.pipe(
      map(value => {
        const parsed = parseInt(value);
        if (isNaN(parsed)) {
          throw new Error(`Cannot parse: ${value}`);
        }
        return parsed;
      }),
      catchError(error => {
        console.log('Caught error:', error.message);
        return of(-1); // Return fallback value
      })
    );

    console.log('Example 13: CatchError with map and parseInt');
    example.subscribe({
      next: value => console.log('Example 13:', value),
      error: error => console.error('Example 13 Error:', error),
      complete: () => console.log('Example 13: Complete')
    });
  }
}

