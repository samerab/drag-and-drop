import { Component, ViewChild, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import { DragableComponent } from './dragable/dragable.component';
import { position } from './interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('mainContainer', { read: ViewContainerRef }) container;

  constructor(private cfr: ComponentFactoryResolver
    ) { }

    ngAfterViewInit() {
      this.createBox('gg', {x: 0, y: 50});
      this.createBox('xxxx', {x: 200, y: 150});
       }

  createBox(info: string, position: position){
    
    let cf = this.cfr.resolveComponentFactory(DragableComponent);
    //this.container.clear();
    let component = this.container.createComponent(cf);
    (<DragableComponent>component.instance).position = position;
    (<DragableComponent>component.instance).info = info;

  }
  

  
}
