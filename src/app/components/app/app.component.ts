import { Component } from '@angular/core';

import { LoaderService } from '@app/core.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  public showLoader= false;

  constructor(private loaderService: LoaderService){
    this.loaderService.displayLoader.subscribe((counter: number) => {
      if (counter !== 0) {
        this.showLoader = true;
      } else {
        this.showLoader = false;
      }
    });
  }

  title = 'angular-starter-kit v12';
}
