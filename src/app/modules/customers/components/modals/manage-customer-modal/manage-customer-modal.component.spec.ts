import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCustomerModalComponent } from './manage-customer-modal.component';

describe('ManageCustomerModalComponent', () => {
  let component: ManageCustomerModalComponent;
  let fixture: ComponentFixture<ManageCustomerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCustomerModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCustomerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
