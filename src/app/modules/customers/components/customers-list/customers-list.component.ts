import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ICustomer} from "../../interfaces/customer";
import {select, Store} from "@ngrx/store";
import {selectCustomers} from "../../state/customers.selector";
import {invokeCustomersDataSource} from "../../state/customers.action";
import {merge, startWith} from "rxjs";
import {CustomersService} from "../../services/customers.service";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit, AfterViewInit {
  // ViewChild Variables
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  // Component Variables
  customers$ = this.store.pipe(select(selectCustomers));
  customers: ICustomer[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'status', 'email', 'phone', 'actions'];
  dataSource: MatTableDataSource<ICustomer>;

  constructor(
    private store: Store,
    private customersService: CustomersService
  ) {
    this.dataSource = new MatTableDataSource(this.customers);
  }

  ngOnInit(): void {
    this.store.dispatch(invokeCustomersDataSource());
    this.customers$.subscribe((customers) => {
      this.customers = customers;
      this.dataSource = new MatTableDataSource(this.customers);
      this.dataSource.sort = this.sort ?? null;
      this.dataSource.paginator = this.paginator ?? null;

      if (customers.length === 0) {
        console.log('Customers list is empty');
        this.customersService.poblate(this.customersService.generateFakeData());
        this.store.dispatch(invokeCustomersDataSource());
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort ?? null;
    this.dataSource.paginator = this.paginator ?? null;
  }

  searchCustomer(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
