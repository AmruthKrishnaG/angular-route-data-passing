import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-param-details',
  imports: [],
  templateUrl: './query-param-details.html',
  styleUrl: './query-param-details.scss',
})
export class QueryParamDetails {
  itemDetails: string | null = null;
  somethingElse: string | null = null;

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.itemDetails = params.get('itemDetails');
      this.somethingElse = params.get('somethingElse');
    });
  }
}
