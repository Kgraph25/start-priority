import { Component, OnInit } from '@angular/core';
import { Choice } from '../../models/choice.model';
import { PrioritySelectionService } from '../../services/priority-selection.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  selectedChoices: Choice[] = [];
  answers: { [questionId: string]: string } = {};
  recommendation: string = '';

  constructor(private priorityService: PrioritySelectionService) { }

  ngOnInit(): void {
    this.selectedChoices = this.priorityService.getPriority();
    this.answers = this.priorityService.getAnswers();
    this.generateRecommendation();
  }

  generateRecommendation() {
    let recommendation = 'お客様におすすめのエアコンは、';
    if (this.selectedChoices.length > 0) {
      recommendation += this.selectedChoices.map(choice => choice.name).join('、') + 'を重視したモデルです。';
    }
    if (this.answers['environment']) {
      recommendation += `\n使用環境は${this.answers['environment']}ですね。`;
    }
    if (this.answers['function']) {
      recommendation += `\n重視する機能は${this.answers['function']}ですね。`;
    }
     if (this.answers['manufacturer']) {
      recommendation += `\nご希望のメーカーは${this.answers['manufacturer']}ですね。`;
    }
    this.recommendation = recommendation;
  }
}
