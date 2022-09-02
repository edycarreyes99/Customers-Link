import {ICustomer} from "../interfaces/customer";
import {createReducer} from "@ngrx/store";

export const initialState: ReadonlyArray<ICustomer> = [];

export const customersReducer = createReducer(initialState);
