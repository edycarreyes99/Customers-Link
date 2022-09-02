import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Component Variables
  title = 'customers-link';
  hideNavbar = true;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/login' : {
            console.log('Hide navbar?: true')
            this.hideNavbar = true;
            break;
          }
          default : {
            console.log('Hide navbar?: false')
            this.hideNavbar = false;
          }
        }
      }
    });
  }
}
