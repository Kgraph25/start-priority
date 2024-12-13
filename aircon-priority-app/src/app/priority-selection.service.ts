import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Choice {
  id: string;
  name: string;
  isSelected: boolean;
  priority: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class PrioritySelectionService {
  private choices: Choice[] = [
    { id: 'businessType', name: '業種・用途', isSelected: false, priority: null },
    { id: 'installationMethod', name: '設置場所・方法', isSelected: false, priority: null },
    { id: 'manufacturer', name: 'エアコンメーカー', isSelected: false, priority: null }
  ];

  private choicesSubject = new BehaviorSubject<Choice[]>(this.choices);
  choices$ = this.choicesSubject.asObservable();

  private question1: string = '';
  private question2: string = '';
  private adviceMessage: string = '';

  constructor() { }

  getChoices(): Choice[] {
    return this.choices;
  }

  setChoicePriority(id: string, priority: number | null) {
    this.choices = this.choices.map(choice => {
      if (choice.id === id) {
        choice.priority = priority;
        choice.isSelected = priority !== null;
      }
      return choice;
    });
    this.choicesSubject.next(this.choices);
    this.updateQuestionsAndAdvice();
  }

  private updateQuestionsAndAdvice() {
    const selectedPriorities = this.choices
      .filter(choice => choice.isSelected)
      .sort((a, b) => (a.priority || 0) - (b.priority || 0))
      .map(choice => choice.id);

    if (selectedPriorities.length === 0) {
      this.question1 = '';
      this.question2 = '';
      this.adviceMessage = '';
      return;
    }

    if (selectedPriorities[0] === 'businessType') {
      this.question1 = 'どのような業種ですか？';
      if (selectedPriorities[1] === 'installationMethod') {
        this.question2 = '設置場所はどのような場所ですか？';
        this.adviceMessage = '業務の特性に最適な空調環境を提供する、特定メーカーのエアコンと、設置場所の状況に合わせた設置方法を組み合わせることで、快適性と効率性を最大限に高めます。';
      } else {
        this.question2 = 'どのメーカーのエアコンを希望しますか？';
        this.adviceMessage = '業務内容に適した空調能力を持つエアコンを、設置場所の条件に合わせて最適な方法で設置することで、快適な作業環境と効率的な運用を実現します。';
      }
    } else if (selectedPriorities[0] === 'installationMethod') {
      this.question1 = '設置場所はどのような場所ですか？';
      if (selectedPriorities[1] === 'businessType') {
        this.question2 = 'どのような業種ですか？';
        this.adviceMessage = '設置場所の条件を最大限に活かし、業務内容に合わせた空調環境を実現するために、最適なエアコンを選定し設置します。';
      } else {
        this.question2 = 'どのメーカーのエアコンを希望しますか？';
        this.adviceMessage = '設置場所の特性を考慮し、最適な設置方法を採用することで、特定メーカーのエアコンの性能を最大限に引き出し、快適で効率的な空間を実現します。';
      }
    } else {
      this.question1 = 'どのメーカーのエアコンを希望しますか？';
      if (selectedPriorities[1] === 'businessType') {
        this.question2 = 'どのような業種ですか？';
        this.adviceMessage = '特定メーカーの高性能エアコンを、業務内容と設置場所の条件に合わせて最適な方法で設置することで、快適性、省エネ性、信頼性を高めます。';
      } else {
        this.question2 = '設置場所はどのような場所ですか？';
        this.adviceMessage = '特定メーカーのエアコンの性能を最大限に活かすために、設置場所の条件に最適な設置方法を選び、快適な環境と効率的な運用を実現します。';
      }
    }
  }

  getQuestion1(): string {
    return this.question1;
  }

  getQuestion2(): string {
    return this.question2;
  }

  getAdviceMessage(): string {
    return this.adviceMessage;
  }
}
