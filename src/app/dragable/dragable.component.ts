import { Component, OnInit } from '@angular/core';
import { position } from '../interfaces';

@Component({
  selector: 'app-dragable',
  templateUrl: './dragable.component.html',
  styleUrls: ['./dragable.component.css']
})
export class DragableComponent implements OnInit {

  position: position;
  info: string;

  constructor() { }

  ngOnInit() {
  }

}
