import { Routes } from '@angular/router';
import { List } from './list/list';
import { PathParamDetails } from './path-param-details/path-param-details';
import { QueryParamDetails } from './query-param-details/query-param-details';
import { RouteStateDetails } from './route-state-details/route-state-details';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: List,
  },
  {
    path: 'pp-details/:id',
    component: PathParamDetails,
  },
  {
    path: 'qp-details',
    component: QueryParamDetails,
  },
  {
    path: 'rs-details',
    component: RouteStateDetails,
  },
];
