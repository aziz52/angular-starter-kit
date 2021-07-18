import { InjectionToken } from '@angular/core';

export class ThemeConstants {

    public static themeVariables = {
        themes: new InjectionToken('themes'),
        activeTheme: new InjectionToken('activeTheme')
    };

}
