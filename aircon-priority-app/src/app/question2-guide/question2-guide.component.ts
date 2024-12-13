import { Component, OnInit } from '@angular/core';
import { PrioritySelectionService } from '../priority-selection.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question2-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question2-guide.component.html',
  styleUrl: './question2-guide.component.scss'
})
export class Question2GuideComponent implements OnInit {
  question2: string = '';

  constructor(private prioritySelectionService: PrioritySelectionService, private router: Router) { }

  ngOnInit(): void {
    this.question2 = this.prioritySelectionService.getQuestion2();
  }

  goToQuestion2() {
    this.router.navigate(['/question2']);
  }
}
