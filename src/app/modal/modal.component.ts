import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { ApiService } from '../service/api.service';
import { UserFeedback } from '../model/userFeedback';

@Component({
  selector: 'first-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalLarge {
  closeResult: string;

  constructor(private modalService: NgbModal,private apiService:ApiService) {}

  openLg(content: any) {
    this.modalService.open(content, {  windowClass : "myCustomModalClass" });
  }

  lastIdFirst: number | null;
  firstButtonChoose(id: number) {
    this.lastIdFirst = (this.lastIdFirst == id) ? null : id 
  }

  lastIdSecond: number | null;
  secondButtonChoose(id: number) {
    this.lastIdSecond = (this.lastIdSecond == id) ? null : id 
  }

  feedback = new UserFeedback;

  addFeedback() {
    this.apiService.addFeedback(this.feedback)
      .subscribe(data => {
        console.log(data)
      })      
  }

}
