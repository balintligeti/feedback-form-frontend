import { Component } from '@angular/core';


@Component({
    selector: 'emojis',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css'],
  })
  export class FirstEmoji {
    lastId: number | null;
    emojiChoose(id: number) {
      this.lastId = (this.lastId == id) ? null : id 
    }
  }