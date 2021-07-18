import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Theme } from '../models';
import { ThemeService } from '../services';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();
  
  constructor(private elementRef: ElementRef,
    private themeService: ThemeService) { }

  ngOnInit(): void {
    const active = this.themeService.getActiveTheme();
    if (active) {
      this.updateTheme(active);
    }
    this.themeService.themeChange.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((theme: Theme) => this.updateTheme(theme));
  }

  updateTheme(theme: Theme): void {
    for (const key in theme.properties) {
      this.elementRef.nativeElement.style.setProperty(key, theme.properties[key]);
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
