import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';

import { NavigationComponent } from './navigation.component';
import { NavigationRoutingModule } from './navigation.routing';
import { NavigationService } from './navigation.service';
import { PaginationModule } from '../component';

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    NavigationRoutingModule,
    PaginationModule
  ],
  declarations: [NavigationComponent],
  providers: [
  { provide: 'NavigationService', useClass: NavigationService }
]
})
export class NavigationModule { }
