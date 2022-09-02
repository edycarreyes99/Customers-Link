import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router
  ) {
  }

  // Method to navigate to other routes
  async navigate(ruta: string, params?: any, relativeTo?: ActivatedRoute): Promise<boolean> {
    return this.router.navigate([`/${ruta}`], {
      queryParams: params ? params : {},
      relativeTo
    });
  }
}
