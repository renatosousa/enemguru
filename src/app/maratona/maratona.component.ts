import { Question } from './../models/question.model';
import { QuestService } from './../services/quest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maratona',
  templateUrl: './maratona.component.html',
  styleUrls: ['./maratona.component.css']
})
export class MaratonaComponent implements OnInit {

  questions: Question;
  error: any;
  constructor(private questService: QuestService) {
    this.getQuestions();
   }

  ngOnInit() {
  }

  getQuestions() {
    this.questService.nextQuestion().subscribe(
      (data: Question) => {
        this.questions = data;
        console.log(this.questions);
        console.log(data);
    }, error => {
      this.error = error;
      console.log(this.error);
    });
  }

}
