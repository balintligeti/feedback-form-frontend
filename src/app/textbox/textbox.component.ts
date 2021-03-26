import { Component } from '@angular/core';

@Component({
    selector: 'textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.css'],
  })
  export class Textbox {
    maxChars = 140;
    role = '';
    chars = 0;
  
    onChange() {
  
    }

  }
  