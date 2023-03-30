import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  scrollToContact() {
    const a = document.getElementById('Contact1234') as HTMLElement;
    a.scrollIntoView();
  }

}
