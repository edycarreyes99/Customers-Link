import {Component, OnInit} from '@angular/core';
import {USER_SIGNED_IN_LS} from "../../constants/local-storage.constants";
import {NavigationService} from "../../services/navigation/navigation.service";
import {ToastService} from "../../services/toast/toast.service";
import {SUCCESS_TOAST} from "../../constants/toast.constants";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private navigationService: NavigationService,
    private toastSetvice: ToastService
  ) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    const currentUser = localStorage.getItem(USER_SIGNED_IN_LS) ?? '';
    localStorage.removeItem(USER_SIGNED_IN_LS);
    this.navigationService.navigate('login');
    this.toastSetvice.showToast(SUCCESS_TOAST, 'Logout', `${currentUser} logged out. Welcome back!`);
  }

}
