import { Component, Input } from '@angular/core';

@Component({
    selector: 'textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.css'],
  })
  export class Textbox {
    @Input()
    maxChars: number;

    role = '';
    chars = 0;
  
    onChange() {
  
    }

  }
  