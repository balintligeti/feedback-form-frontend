import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.css'],
  })
  export class Textbox {
    @Output() user_string_feedback = new EventEmitter<any>();

    updateParent(): void{
      if (this.role != '') {
        this.user_string_feedback.emit(this.role)
      }
    }
    
    @Input()
    maxChars: number;

    role = '';
    chars = 0;


  }
  