import { EventEmitter, Inject, Injectable } from '@angular/core';

import { ThemeConstants } from '../constants';
import { Theme } from '../models';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {

  public themeChange = new EventEmitter<Theme>();

  constructor(@Inject(ThemeConstants.themeVariables.themes) public themes: Theme[],
  @Inject(ThemeConstants.themeVariables.activeTheme) public theme: string) { }

  getActiveTheme() : Theme {
    const theme = this.themes.find(t => t.name === this.theme);
    if (!theme) {
      throw new Error(`Theme not found: '${this.theme}'`);
    }
    return theme;
  }

  setTheme(name: string): void {
    this.theme = name;
    this.themeChange.emit(this.getActiveTheme());
  }
 
}
