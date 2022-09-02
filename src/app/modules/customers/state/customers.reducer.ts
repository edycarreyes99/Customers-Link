import {ICustomer} from "../interfaces/customer";
import {createReducer, on} from "@ngrx/store";
import {customersFetchDataSourceSuccess} from "./customers.action";

export const initialState: ReadonlyArray<ICustomer> = [];

export const customersReducer = createReducer(
  initialState,
  on(customersFetchDataSourceSuccess, (state, {customers}) => customers)
);
