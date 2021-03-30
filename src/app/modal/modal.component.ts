import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../service/api.service';
import { UserFeedback } from '../model/userFeedback';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalLarge {
  user_effort_score = -1;
  educational_value_score = -1;
  user_effort_feedback = "User didn't answered.";
  educational_value_feedback = "User didn't answered.";

  userEffort(text: string) {
    this.user_effort_feedback = text
  }

  educationalValue(text: string) {
    this.educational_value_feedback = text
  }

  constructor(private modalService: NgbModal, private apiService:ApiService) {}

  openLg(content: any) {
    this.modalService.open(content, {  windowClass : "myCustomModalClass" });
  }

  firstButtonChoose(id: number) {
    this.user_effort_score = (this.user_effort_score == id) ? -1 : id;
  }

  secondButtonChoose(id: number) {
    this.educational_value_score = (this.educational_value_score == id) ? -1 : id;
  }

  addFeedback() {
    let feedback = new UserFeedback()
    if (this.user_effort_score != -1 || this.educational_value_score != -1 || this.user_effort_feedback != "User didn't answered." || this.educational_value_feedback != "User didn't answered.") {
      feedback.data.user_effort.score = this.user_effort_score
      feedback.data.educational_value.score = this.educational_value_score
      feedback.data.user_effort.feedback = this.user_effort_feedback
      feedback.data.educational_value.feedback = this.educational_value_feedback
      this.apiService.addFeedback(feedback)
        .subscribe() 
    }
    this.resetVariables()
  }

  resetVariables() {
    this.user_effort_score = -1;
    this.educational_value_score = -1;
    this.user_effort_feedback = "User didn't answered.";
    this.educational_value_feedback = "User didn't answered.";
  }
}
