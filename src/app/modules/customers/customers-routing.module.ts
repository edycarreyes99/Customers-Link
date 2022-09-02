import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersViewComponent} from "./components/customers-view/customers-view.component";

const routes: Routes = [
  {
    path: '',
    component: CustomersViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {
}
