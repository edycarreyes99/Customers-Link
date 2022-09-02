import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerFormComponent} from "../../customer-form/customer-form.component";


@Component({
  selector: 'app-manage-customer-modal',
  templateUrl: './manage-customer-modal.component.html',
  styleUrls: ['./manage-customer-modal.component.scss']
})
export class ManageCustomerModalComponent implements OnInit {
  //ViewChild Variables
  @ViewChild('customerForm') customerForm: CustomerFormComponent | undefined;

  // Component Variables
  isValidForm = false

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ManageCustomerModalComponent>
  ) {
  }

  ngOnInit(): void {
  }

  async manageCustomer(): Promise<void> {
    return new Promise<void>(async (resolve, rejects) => {
      if (this.isValidForm) {
        switch (this.data.dialogType) {
          case 'Create':
            await this.customerForm?.createCustomer();
            resolve();
            break;

          case 'Edit':
            console.log('Editing customer');
            resolve();
            break;

          case 'View':
            console.log('Viewing customer');
            resolve();
            break;
        }
      } else {
        rejects();
      }
    });
  }

}
