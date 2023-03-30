import { AfterContentInit, AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'portfolio';
  showPopover: boolean = false;
  isDarkTheme: boolean = false;
  isHorizontalNav: boolean =  false;

  constructor(private elementRef: ElementRef,) {
   
  }

  ngAfterContentInit() {
    if(!this.isHorizontalNav == true) {
      (document.getElementsByClassName('all-sections')[0] as HTMLElement).style.display = 'none';
      (document.getElementsByClassName('page-wise')[0] as HTMLElement).style.display = 'block';
      Array.from((document.getElementsByClassName('section'))).forEach(element => {
          (element as HTMLElement).style.height = 'auto';
      });
    }
    const navToggler =  (document.getElementsByClassName('nav-toggler')[0] as HTMLElement);
    if(navToggler) {
      this.isHorizontalNav = true;
    } else {
      this.isHorizontalNav = false;
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
  
  optionSelected(event: string) {
    console.log('option selected', event);
    const a = document.getElementById(event+'1234') as HTMLElement;
    a.scrollIntoView();
  }
}