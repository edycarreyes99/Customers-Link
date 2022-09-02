import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ICustomer} from "../interfaces/customer";

export const selectCustomers = createFeatureSelector<ICustomer[]>('customers');

export const selectCustomerById = (customerId: string) => createSelector(
  selectCustomers,
  (customers: ICustomer[]) => customers.find((customer) => customer.id === customerId)
);
