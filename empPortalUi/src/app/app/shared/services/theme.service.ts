import { Injectable,effect,inject,signal, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BrowserService } from './browser.service';
export type AppTheme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly browser = inject(BrowserService);
  private readonly document = inject(DOCUMENT);

  readonly theme = signal<AppTheme>('light');

  constructor() {

    if (this.browser.isBrowser) {

      const savedTheme =
        (localStorage.getItem('theme') as AppTheme) ?? 'light';

      this.theme.set(savedTheme);

    }
 
    effect(()=>{

    if (!this.browser.isBrowser) return;

      const currentTheme = this.theme();

      this.document.body.classList.remove('light-theme', 'dark-theme');
      this.document.body.classList.add(`${currentTheme}-theme`);

      localStorage.setItem('theme', currentTheme);
  });
  }

  toggleTheme(){
    this.theme.update(theme=>theme =='light'?'dark' : 'light');
  }

  
}
