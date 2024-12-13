import { Component, OnInit } from '@angular/core';
import { PrioritySelectionService } from '../priority-selection.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-question2',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './question2.component.html',
  styleUrl: './question2.component.scss'
})
export class Question2Component implements OnInit {
  question2: string = '';

  constructor(private prioritySelectionService: PrioritySelectionService, private router: Router) { }

  ngOnInit(): void {
    this.question2 = this.prioritySelectionService.getQuestion2();
  }

  goToCompletion() {
    this.router.navigate(['/completion']);
  }
}
