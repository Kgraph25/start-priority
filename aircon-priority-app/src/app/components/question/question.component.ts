import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Choice } from '../../models/choice.model';
import { PrioritySelectionService } from '../../services/priority-selection.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  selectedChoices: Choice[] = [];
  questions: { id: string, text: string }[] = [];
  answers: { [questionId: string]: string } = {};

  constructor(
    private router: Router,
    private priorityService: PrioritySelectionService
  ) { }

  ngOnInit(): void {
    this.priorityService.selectedChoices.subscribe(choices => {
      this.selectedChoices = choices;
      this.generateQuestions();
    });
  }

  generateQuestions() {
    this.questions = this.selectedChoices.map(choice => {
      switch (choice.id) {
        case 'environment':
          return { id: 'environment', text: 'どのような環境で使用しますか？' };
        case 'function':
          return { id: 'function', text: '最も重視する機能は何ですか？' };
        case 'manufacturer':
          return { id: 'manufacturer', text: '希望するメーカーはありますか？' };
        default:
          return { id: 'unknown', text: '不明な質問' };
      }
    });
  }

  addAnswer(questionId: string, answer: string) {
    this.answers[questionId] = answer;
  }

  navigateToCompletion() {
    for (const question of this.questions) {
      if (!this.answers[question.id]) {
        // エラー処理はSnackBarで実装
        return;
      }
      this.priorityService.addAnswer(question.id, this.answers[question.id]);
    }
    this.router.navigate(['/completion']);
  }
}
