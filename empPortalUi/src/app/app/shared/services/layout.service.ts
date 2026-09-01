import { Injectable ,signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  readonly isSidebarOpen = signal(true);

  toogleSide() : void{
    this.isSidebarOpen.update(value=>!value);
  }

  openSidebar() :void{
    this.isSidebarOpen.set(true);
  }

  closeSidebar():void{
    this.isSidebarOpen.set(false);
  }
}
