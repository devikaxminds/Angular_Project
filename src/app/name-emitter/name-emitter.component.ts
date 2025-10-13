import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-name-emitter',
  templateUrl: './name-emitter.component.html',
  styleUrls: ['./name-emitter.component.css']
})
export class NameEmitterComponent implements OnInit, OnDestroy {
  names: string[] = ['Alice', 'Bob', 'Charlie', 'David'];
  displayedNames: string[] = [];
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = interval(2000)
      .pipe(take(this.names.length))
      .subscribe({
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
