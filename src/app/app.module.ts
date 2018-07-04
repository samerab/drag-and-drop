import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DragableComponent } from './dragable/dragable.component';
import { MovableDirective } from './movable.directive';
import { DraggableDirective } from './draggable.directive';



@NgModule({
  declarations: [
    AppComponent,
    DragableComponent,
    MovableDirective,
    DraggableDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DragableComponent]
})
export class AppModule { }
