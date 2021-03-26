import { Component } from '@angular/core';

@Component({
  selector: 'button-options',
  templateUrl: './buttonOptions.component.html',
  styleUrls: ['./buttonOptions.component.css']
})
export class buttonOptions {
  lastId: number | null;

  enableDisableRule(id: number) {
    this.lastId = (this.lastId == id) ? null : id 
}
}