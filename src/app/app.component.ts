import { Component } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ScrollTop';
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string
  ) {}

  onActivate(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 50); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 30);  // scroll speed
    }
  }
}
