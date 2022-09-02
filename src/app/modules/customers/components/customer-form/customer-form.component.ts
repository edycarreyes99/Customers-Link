import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {faker} from "@faker-js/faker";
import {ICustomer} from "../../interfaces/customer";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  // Component Variables
  customersForm: FormGroup;

  constructor() {
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
  }

  getControl(controlName: string): AbstractControl | null {
    return this.customersForm.get(controlName);
  }

}
