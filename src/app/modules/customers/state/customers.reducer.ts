import {ICustomer} from "../interfaces/customer";
import {createReducer, on} from "@ngrx/store";
import {customersFetchDataSourceSuccess, editCustomerSuccess, saveNewCustomerSuccess} from "./customers.action";

export const initialState: ReadonlyArray<ICustomer> = [];

export const customersReducer = createReducer(
  initialState,
  on(customersFetchDataSourceSuccess, (state, {customers}) => customers),
  on(saveNewCustomerSuccess, (state, {customer}) => [...state, customer]),
  on(editCustomerSuccess, (state, {customer}) => {
    let newState = state.filter((_) => _.id !== customer.id);
    newState.unshift(customer);
    return newState;
  })
);
