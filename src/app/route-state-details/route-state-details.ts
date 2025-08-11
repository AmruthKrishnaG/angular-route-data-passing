import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-state-details',
  imports: [],
  templateUrl: './route-state-details.html',
  styleUrl: './route-state-details.scss',
})
export class RouteStateDetails {
  itemDetails: string;
  somethingElse: string;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.itemDetails = navigation?.extras.state?.['itemDetails'];
    this.somethingElse = navigation?.extras.state?.['somethingElse'];
  }
}
