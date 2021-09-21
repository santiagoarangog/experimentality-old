import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SliderComponent} from './slider/slider.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './header/header.component';
import {NavigationComponent} from './navigation/navigation.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    SliderComponent,
    HeaderComponent,
    NavigationComponent
  ],
  exports: [
    SliderComponent,
    NavigationComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ]
})
export class SharedModule {
}
