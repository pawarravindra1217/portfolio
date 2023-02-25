import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
