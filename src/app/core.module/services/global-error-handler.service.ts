import { ErrorHandler, Injectable, NgZone } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private zone: NgZone) {}

 public handleError(error: Error): void {

    this.zone.run(() =>
    // you can add your way to handle errors.
    // for now I am showing errors in alert
    alert(error.message)
    );
    console.error('Error from global error handler', error);
  }
}
