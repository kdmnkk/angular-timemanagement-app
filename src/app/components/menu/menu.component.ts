import { Component } from '@angular/core';
import {Router} from "@angular/router";

export interface NavItem {
  icon: string;
  route: string;
}

export const NavItems: NavItem[] = [
  {
    icon: 'home',
    route: 'home'
  },
  {
    icon: 'list',
    route: 'todo'
  },
  {
    icon: 'view_module',
    route: 'tables'
  },
  {
    icon: 'event',
    route: 'calendar'
  },
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  NavItems = NavItems;

  constructor(private router: Router) {}

  isRouteActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}
