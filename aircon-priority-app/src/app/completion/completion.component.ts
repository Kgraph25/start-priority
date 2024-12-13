import { Component, OnInit } from '@angular/core';
import { PrioritySelectionService, Choice } from '../priority-selection.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './completion.component.html',
  styleUrl: './completion.component.scss'
})
export class CompletionComponent implements OnInit {
  choices: Choice[] = [];

  constructor(private prioritySelectionService: PrioritySelectionService, private router: Router) { }

  ngOnInit(): void {
    this.choices = this.prioritySelectionService.getChoices();
  }

  goToResult() {
    this.router.navigate(['/result']);
  }
}
