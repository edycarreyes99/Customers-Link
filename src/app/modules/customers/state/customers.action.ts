import {createAction, props} from "@ngrx/store";
import {ICustomer} from "../interfaces/customer";

export const invokeCustomersDataSource = createAction('[Customers] Invoke Customers Fetch Data from Data Source');

export const customersFetchDataSourceSuccess = createAction('[Customers] Customers Fetched from Data Source Successfully', props<{ customers: ICustomer[] }>());
