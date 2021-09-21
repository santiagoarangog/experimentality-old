import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslocoRootModule} from '../../transloco-root.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    TranslocoRootModule,
    NgbModule,
    SharedModule,
    RouterModule
  ]
})
export class ShopModule {
}
