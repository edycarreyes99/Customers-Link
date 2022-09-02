import {createAction, props} from "@ngrx/store";
import {ICustomer} from "../interfaces/customer";

export const invokeCustomersDataSource = createAction('[Customers] Invoke Customers Fetch Data from Data Source');
export const invokeSaveNewCustomer = createAction('[Customers] Invoke Save new Customer', props<{ customer: ICustomer }>());
export const invokeEditCustomer = createAction('[Customers] Invoke Edit Customer', props<{ customer: ICustomer }>());

export const customersFetchDataSourceSuccess = createAction('[Customers] Customers Fetched from Data Source Successfully', props<{ customers: ICustomer[] }>());
export const saveNewCustomerSuccess = createAction('[Customers] Customer Saved to Data Source Successfully', props<{ customer: ICustomer }>());
export const editCustomerSuccess = createAction('[Customers] Customer Modified to Data Source Successfully', props<{ customer: ICustomer }>());
