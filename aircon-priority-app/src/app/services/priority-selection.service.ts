import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Choice } from '../models/choice.model';

@Injectable({
  providedIn: 'root'
})
export class PrioritySelectionService {
  choices: Choice[] = [
    { id: 'environment', name: '使用場所の環境', isSelected: false, priority: null },
    { id: 'function', name: '重視する機能', isSelected: false, priority: null },
    { id: 'manufacturer', name: 'メーカー', isSelected: false, priority: null }
  ];

  selectedChoices = new BehaviorSubject<Choice[]>([]);
  answers: { [questionId: string]: string } = {};

  setPriority(choice: Choice, priority: number) {
    choice.priority = priority;
  }

  getPriority(): Choice[] {
    return this.choices.sort((a, b) => (a.priority || 0) - (b.priority || 0));
  }

  addAnswer(questionId: string, answer: string) {
    this.answers[questionId] = answer;
  }

  getAnswers() {
    return this.answers;
  }

  resetChoices() {
    this.choices.forEach(choice => {
      choice.isSelected = false;
      choice.priority = null;
    });
  }

  saveToFirebase() {
    // Firebase実装時に実装
  }

  loadFromFirebase() {
    // Firebase実装時に実装
  }

  saveToIndexedDB() {
    // オフライン対応時に実装
  }

  loadFromIndexedDB() {
    // オフライン対応時に実装
  }

  syncWithFirebase() {
    // オフライン対応時に実装
  }
}
