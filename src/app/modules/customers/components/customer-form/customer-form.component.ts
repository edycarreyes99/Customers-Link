import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {faker} from "@faker-js/faker";
import {ICustomer} from "../../interfaces/customer";
import {Store} from "@ngrx/store";
import {invokeEditCustomer, invokeSaveNewCustomer} from "../../state/customers.action";
import {ToastService} from "../../../../core/services/toast/toast.service";
import {SUCCESS_TOAST} from "../../../../core/constants/toast.constants";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  // Input Variables
  @Input() manageType: 'edit' | 'view' | 'create' = 'create';
  @Input() customer: ICustomer | undefined;

  // Output Variables
  @Output() validForm: EventEmitter<boolean>;
  @Output() customerManaged: EventEmitter<ICustomer>;

  // Component Variables
  customersForm: FormGroup;

  constructor(
    private store: Store,
    private toastService: ToastService
  ) {
    this.validForm = new EventEmitter<boolean>();
    this.customerManaged = new EventEmitter<ICustomer>();

    this.customersForm = new FormGroup({
      id: new FormControl(faker.datatype.uuid(), [
        Validators.required
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      status: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl('', [
        Validators.minLength(8)
      ])
    });
  }

  ngOnInit(): void {
    if (this.customer) {
      this.customersForm.setValue(this.customer);
    }

    this.customersForm.valueChanges.subscribe((value) => {
      this.validForm.emit(this.customersForm.valid);
    });
  }

  getControl(controlName: string): AbstractControl | null {
    return this.customersForm.get(controlName);
  }

  async createCustomer(): Promise<ICustomer> {
    return new Promise<ICustomer>(async (resolve, rejects) => {
      if (this.customersForm.valid) {
        const customer: ICustomer = this.customersForm.value;
        this.store.dispatch(invokeSaveNewCustomer({customer}));
        this.customerManaged.emit(customer);
        this.toastService.showToast(SUCCESS_TOAST, 'Customer Creation', `Customer ${customer.firstName} ${customer.lastName} created successfully!`);
        resolve(customer);
      } else {
        rejects(new Error('Form is not valid'));
      }
    });
  }

  async updateCustomer(): Promise<ICustomer> {
    return new Promise<ICustomer>(async (resolve, rejects) => {
      if (this.customersForm.valid) {
        const customer: ICustomer = this.customersForm.value;
        this.store.dispatch(invokeEditCustomer({customer}));
        this.customerManaged.emit(customer);
        this.toastService.showToast(SUCCESS_TOAST, 'Customer Edition', `Customer ${customer.firstName} ${customer.lastName} updated successfully!`);
        resolve(customer);
      } else {
        rejects(new Error('Form is not valid'));
      }
    });
  }

}
