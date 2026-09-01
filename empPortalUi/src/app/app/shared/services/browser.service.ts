import { Injectable,PLATFORM_ID,inject } from '@angular/core';
import  {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  private readonly platformId = inject(PLATFORM_ID);

  get isBrowser():Boolean{
    
    return isPlatformBrowser(this.platformId);
  }
  

  get isServer():Boolean{
    return !this.isBrowser
  }
}
