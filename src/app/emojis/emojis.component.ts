import { Component } from '@angular/core';


@Component({
    selector: 'emojis',
    templateUrl: './emojis.component.html',
    styleUrls: ['./emojis.component.css'],
  })
  export class FirstEmoji {
    lastId: number | null;
    emojiChoose(id: number) {
      this.lastId = (this.lastId == id) ? null : id 
    }
  }