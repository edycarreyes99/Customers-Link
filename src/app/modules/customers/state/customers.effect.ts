import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CustomersService} from "../services/customers.service";
import {select, Store} from "@ngrx/store";
import {customersFetchDataSourceSuccess, invokeCustomersDataSource} from "./customers.action";
import {EMPTY, map, mergeMap, withLatestFrom} from "rxjs";
import {selectCustomers} from "./customers.selector";

@Injectable()
export class CustomersEffect {
  constructor(
    private actions$: Actions,
    private customersService: CustomersService,
    private store: Store
  ) {
  }

  loadAllCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeCustomersDataSource),
      withLatestFrom(this.store.pipe(select(selectCustomers))),
      mergeMap(([, customers]) => {
        if (customers.length > 0) {
          return EMPTY;
        }
        return this.customersService.index().pipe(
          map((customers) => customersFetchDataSourceSuccess({customers}))
        );
      })
    )
  );

}
