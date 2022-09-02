import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {USER_SIGNED_IN_LS} from "../../constants/local-storage.constants";
import {NavigationService} from "../../services/navigation/navigation.service";

@Injectable({
  providedIn: 'root'
})
export class NoAuthenticatedGuard implements CanActivate {
  constructor(
    private navigationService: NavigationService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem(USER_SIGNED_IN_LS)) {
      this.navigationService.navigate('customers');
      return false;
    } else {
      return true;
    }
  }

}
