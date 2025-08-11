import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-path-param-details',
  imports: [],
  templateUrl: './path-param-details.html',
  styleUrl: './path-param-details.scss',
})
export class PathParamDetails implements OnInit {
  itemId: string | null = '';

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.itemId = params.get('id'); // 'id' is the name defined in the route config
    });
  }
}
