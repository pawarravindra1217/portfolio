import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  showPopover: boolean = false;
  isDarkTheme: boolean = false;
  isHorizontalNav: boolean =  false;

  constructor(private elementRef: ElementRef,) {
   
  }

  ngAfterViewInit() {
    if(!this.isHorizontalNav == true) {
      (document.getElementsByClassName('page-wise')[0] as HTMLElement).style.display = 'none';
      (document.getElementsByClassName('all-sections')[0] as HTMLElement).style.display = 'block';
      Array.from((document.getElementsByClassName('section'))).forEach(element => {
          (element as HTMLElement).style.height = 'auto';
      });
    }
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
  
  changeLayout(event: any) {
    event == 1 ? this.isHorizontalNav = false : this.isHorizontalNav = true;
    if(event === 1) {
      (document.getElementsByClassName('page-wise')[0] as HTMLElement).style.display = 'none';
      (document.getElementsByClassName('all-sections')[0] as HTMLElement).style.display = 'block';
      (document.getElementsByClassName('section')[0] as HTMLElement).style.height = 'auto';
      Array.from((document.getElementsByClassName('section'))).forEach(element => {
        (element as HTMLElement).style.height = 'auto';
      });
    } else {
      (document.getElementsByClassName('all-sections')[0] as HTMLElement).style.display = 'none';
      (document.getElementsByClassName('page-wise')[0] as HTMLElement).style.display = 'block';
      (document.getElementsByClassName('section')[0] as HTMLElement).style.height = 'auto';
      // Array.from((document.getElementsByClassName('section'))).forEach(element => {
      //   (element as HTMLElement).style.height = 'auto';
      // });
    }
  }
  

  
}