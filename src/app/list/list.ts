import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  private router = inject(Router);

  pathParamNavigation(item: string) {
    this.router.navigate(['/pp-details', item]);
  }

  queryParamNavigation(item: string) {
    this.router.navigate(['/qp-details'], {
      queryParams: { itemDetails: item, somethingElse: 123 },
    });
  }

  routeStateNavigation(item: string) {
    this.router.navigate(['/rs-details'], {
      state: { itemDetails: item, somethingElse: 123 },
    });
  }
}
