import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnDestroy {
  names: string[] = ['Lijo', 'Bijo', 'Cijo', 'Dijo'];
  displayedNames: string[] = [];
  subscription!: Subscription;

  constructor() {
    // Custom Observable
    const nameObservable = new Observable<number>((observer) => {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < this.names.length) {
          observer.next(index);
          index++;
        } else {
          observer.complete();
          clearInterval(intervalId);
        }
      }, 2000);
    });

    this.subscription = nameObservable.subscribe({
      next: (index) => {
        const name = this.names[index];
        console.log('Name emitted:', name);
        this.displayedNames.push(name);
      },
      complete: () => console.log('All names emitted')
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('Subscription unsubscribed in ngOnDestroy');
    }
  }
}
