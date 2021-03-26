import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalLarge {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

}
