import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {state} from "@angular/animations";
import {NavigationService} from "../../services/navigation/navigation.service";
import {USER_SIGNED_IN_LS} from "../../constants/local-storage.constants";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private navigationService: NavigationService,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem(USER_SIGNED_IN_LS)) {
      return true;
    } else {
      this.navigationService.navigate('login');
      return false;
    }
  }

}
