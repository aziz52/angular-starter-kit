import { NgModule, ModuleWithProviders, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ConfigProvider, LoaderService, AppInterceptor } from './services';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  exports: [CommonModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      console.log('Core module is already loaded');
      throw new Error('Core module is already loaded');
    }
  }
  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [AppInterceptor, ConfigProvider, LoaderService,
        { provide: APP_INITIALIZER, useFactory: appConfigServiceFactory, deps: [ConfigProvider], multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }
      ]
    };
  }
}

export function appConfigServiceFactory(config: ConfigProvider): any {
  return () => config.load();
}

export { ConfigProvider, LoaderService } from './services';
export { BaseConstants } from './constants';
