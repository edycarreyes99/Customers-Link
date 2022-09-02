import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ICustomer} from "../../../interfaces/customer";

@Component({
  selector: 'app-delete-customer-modal',
  templateUrl: './delete-customer-modal.component.html',
  styleUrls: ['./delete-customer-modal.component.scss']
})
export class DeleteCustomerModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { customer: ICustomer },
    public dialogRef: MatDialogRef<DeleteCustomerModalComponent>
  ) {
  }

  ngOnInit(): void {
  }

}
