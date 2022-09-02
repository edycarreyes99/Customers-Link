import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoAuthenticatedGuard} from "./core/guards/no-authenticated/no-authenticated.guard";
import {AuthenticatedGuard} from "./core/guards/authenticated/authenticated.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then((module) => module.LoginModule),
    canActivate: [NoAuthenticatedGuard]
  },
  {
    path: 'customers',
    loadChildren: () => import('./modules/customers/customers.module').then((module) => module.CustomersModule),
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
