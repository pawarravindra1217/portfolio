import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavInterface } from '../../modals/sidenav-items-modal';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sidenavItems: SidenavInterface[] = [
    {
      id: 1,
      name:'Home',
      pageRoute:'/features/home',
      icon:'fa fa-home'
    },
    {
      id: 2,
      name:'About',
      pageRoute:'/features/about',
      icon:'fa fa-info-circle'
    },
    {
      id: 3,
      name:'Services',
      pageRoute:'/features/services',
      icon:'fa fa-folder'
    },
    {
      id: 4,
      name:'Portfolio',
      pageRoute:'/features/portfolio',
      icon:'fa fa-suitcase'
    },
    {
      id: 5,
      name:'Contact',
      pageRoute:'/features/contact',
      icon:'fa fa-address-book'
    }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoPage(pageRoute: string): void {
    this.router.navigate([pageRoute]);
  }
}
