import { Component, OnInit } from '@angular/core';
import { PrioritySelectionService } from '../priority-selection.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question1.component.html',
  styleUrl: './question1.component.scss'
})
export class Question1Component implements OnInit {
  question1: string = '';

  constructor(private prioritySelectionService: PrioritySelectionService) { }

  ngOnInit(): void {
    this.question1 = this.prioritySelectionService.getQuestion1();
  }
}
