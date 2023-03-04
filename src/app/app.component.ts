import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  showPopover: boolean = false;
  isDarkTheme: boolean = false;

  constructor(private elementRef: ElementRef,) {

  }
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.isDarkTheme ? this.setDarkTheme() : this.setLighterTheme();
  }

  setDarkTheme() {
    document.documentElement.style.setProperty("--bg-black-900", "#151515"); 
    document.documentElement.style.setProperty("--bg-black-100", "#222222"); 
    document.documentElement.style.setProperty("--bg-black-50", "#393939"); 
    document.documentElement.style.setProperty("--text-black-900", "#ffffff"); 
    document.documentElement.style.setProperty("--text-black-700", "#e9e9e9"); 
  }

  setLighterTheme() {
    document.documentElement.style.setProperty("--bg-black-900", "#f2f2fc"); 
    document.documentElement.style.setProperty("--bg-black-100", "#fdf9ff"); 
    document.documentElement.style.setProperty("--bg-black-50", "#e8dfec"); 
    document.documentElement.style.setProperty("--text-black-900", "#302e4d"); 
    document.documentElement.style.setProperty("--text-black-700", "#504e70"); 
  }

  @HostListener('document:click',['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement): void {
    event.stopPropagation();
    if (!targetElement) {
      return;
    }
    this.showPopup(2, event);
  }

  showPopup(id: number, event: MouseEvent) {
    if(id == 1) {
      this.showPopover = !this.showPopover;
      event.stopPropagation()
    } else {
      this.showPopover = false;
    }
  }
}