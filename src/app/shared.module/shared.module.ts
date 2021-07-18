import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SharedService } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  exports: [FormsModule, ReactiveFormsModule],
  entryComponents: [],
  providers: []
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [SharedService]
    };
  }

}

export { Constants } from './constants';
export { SharedService } from './services';

