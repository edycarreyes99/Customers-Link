import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ICustomer} from "../../../interfaces/customer";
import {Store} from "@ngrx/store";
import {invokeDeleteCustomer} from "../../../state/customers.action";
import {SUCCESS_TOAST} from "../../../../../core/constants/toast.constants";
import {ToastService} from "../../../../../core/services/toast/toast.service";

@Component({
  selector: 'app-delete-customer-modal',
  templateUrl: './delete-customer-modal.component.html',
  styleUrls: ['./delete-customer-modal.component.scss']
})
export class DeleteCustomerModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { customer: ICustomer },
    public dialogRef: MatDialogRef<DeleteCustomerModalComponent>,
    private store: Store,
    private toastService: ToastService
  ) {
  }

  ngOnInit(): void {
  }

  async deleteCustomer(): Promise<ICustomer> {
    return new Promise<ICustomer>(async (resolve, rejects) => {
      const customer = this.data.customer;
      this.store.dispatch(invokeDeleteCustomer({customer}));
      this.dialogRef.close(this.data.customer);
      this.toastService.showToast(SUCCESS_TOAST, 'Customer Deletion', `Customer ${customer?.firstName} ${customer?.lastName} deleted successfully`);
      resolve(this.data.customer);
    });
  }
}
