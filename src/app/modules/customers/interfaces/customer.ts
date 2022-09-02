export interface ICustomer {
  id: number;
  firstName: string;
  lastName: string;
  status: 'active' | 'pending' | 'inactive';
  email: string;
  phone: string;
}
