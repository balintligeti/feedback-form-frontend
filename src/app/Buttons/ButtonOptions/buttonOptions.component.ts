import { Component } from '@angular/core';

@Component({
  selector: 'button-options',
  templateUrl: './buttonOptions.component.html',
  styleUrls: ['./buttonOptions.component.css']
})
export class buttonOptions {
  lastId: number;

  enableDisableRule(id: number) {
    this.lastId = (this.lastId == id) ? 5 : id 
}
}