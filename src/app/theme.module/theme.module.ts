import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeDirective } from './directives';
import { ThemeService } from './services';
import { ThemeOptions } from './models';
import { ThemeConstants } from './constants';


@NgModule({
  declarations: [
    ThemeDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [ThemeService],
  exports: [ThemeDirective]
})

export class ThemeModule {
  public static forRoot(options: ThemeOptions): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        {
          provide: ThemeConstants.themeVariables.themes,
          useValue: options.themes
        },
        {
          provide: ThemeConstants.themeVariables.activeTheme,
          useValue: options.active
        }
      ]
    };
  }
}

export { darkTheme, lightTheme } from './themes';
export { ThemeService } from './services';
