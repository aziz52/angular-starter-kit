import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {
  counter = 0;
  public displayLoader = new Subject<number>();

  showLoader(val: boolean): void {
    if (!val && this.counter === 0) { return; }
    this.counter = val ? this.counter + 1 : this.counter - 1;
    this.displayLoader.next(this.counter);
  }
}

