import {Injectable} from '@angular/core';
import {LocalStorageDatasource} from "../../../core/datasource/local-storage.datasource";
import {ICustomer} from "../interfaces/customer";
import {faker} from "@faker-js/faker";

@Injectable({
  providedIn: 'root'
})
export class CustomersService extends LocalStorageDatasource<ICustomer[], ICustomer> {

  constructor() {
    super();
  }

  generateFakeData(): ICustomer[] {
    const customers: ICustomer[] = [];
    for (let i = 0; i < 20; i++) {
      const customer: ICustomer = {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        status: 'active',
        email: faker.internet.email(),
        phone: faker.phone.number(),
      }

      customers.push(customer);
    }
    return customers;
  }
}
