import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomersRoutingModule} from './customers-routing.module';
import {CustomersViewComponent} from './components/customers-view/customers-view.component';
import {CustomersListComponent} from './components/customers-list/customers-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {StoreModule} from "@ngrx/store";
import {customersReducer} from "./state/customers.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CustomersEffect} from "./state/customers.effect";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ManageCustomerModalComponent} from './components/modals/manage-customer-modal/manage-customer-modal.component';


@NgModule({
  declarations: [
    CustomersViewComponent,
    CustomersListComponent,
    ManageCustomerModalComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forFeature('customers', customersReducer),
    EffectsModule.forFeature([CustomersEffect]),
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [
    ManageCustomerModalComponent
  ],
  entryComponents: [
    ManageCustomerModalComponent
  ]
})

export class CustomersModule {
}
