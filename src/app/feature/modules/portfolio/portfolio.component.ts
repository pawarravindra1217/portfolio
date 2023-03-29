import { Component, OnInit } from '@angular/core';
import { PortfolioInterface } from './modals/portfolio-interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioDetails: PortfolioInterface[] = [
    {
      id:1,
      title:'Bito',
      type: 'IDE Plugin',
      imagePath:'assets/images/portfolio1.png'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
