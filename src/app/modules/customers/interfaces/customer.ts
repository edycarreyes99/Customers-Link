export interface ICustomer {
  id: string;
  firstName: string;
  lastName: string;
  status: 'active' | 'pending' | 'inactive';
  email: string;
  phone: string;
}
