import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent, LayoutComponent, FooterComponent } from './components';
import { LayoutRoutes } from './layout-routing.module';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutes
  ],
  declarations: [HeaderComponent, LayoutComponent, FooterComponent],
  providers: []
})
export class LayoutModule { }

