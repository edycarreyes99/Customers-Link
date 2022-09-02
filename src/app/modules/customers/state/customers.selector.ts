import {createFeatureSelector} from "@ngrx/store";
import {ICustomer} from "../interfaces/customer";

export const selectCustomers = createFeatureSelector<ICustomer[]>('customers');
