import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-manage-customer-modal',
  templateUrl: './manage-customer-modal.component.html',
  styleUrls: ['./manage-customer-modal.component.scss']
})
export class ManageCustomerModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
  }

}
