import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersViewComponent } from './components/customers-view/customers-view.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';


@NgModule({
  declarations: [
    CustomersViewComponent,
    CustomersListComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
