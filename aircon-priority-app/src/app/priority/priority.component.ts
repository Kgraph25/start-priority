import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PrioritySelectionService } from '../priority-selection.service';

@Component({
  selector: 'app-priority',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './priority.component.html',
  styleUrl: './priority.component.scss'
})
export class PriorityComponent {

  constructor(private router: Router, private prioritySelectionService: PrioritySelectionService) { }

  ngOnInit(): void {
    this.prioritySelectionService.setChoicePriority('businessType', 1);
  }

  goToQuestion1() {
    this.router.navigate(['/question1']);
  }
}
