import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.css'],
  })
  export class Textbox {
    @Output() user_effort_feedback = new EventEmitter<any>();

    updateParent(): void{
      this.user_effort_feedback.emit(this.role)
    }
    
    @Input()
    maxChars: number;

    role = '';
    chars = 0;


  }
  