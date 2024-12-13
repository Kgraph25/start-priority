import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Choice } from '../../models/choice.model';
import { PrioritySelectionService } from '../../services/priority-selection.service';

@Component({
  selector: 'app-priority-confirm',
  templateUrl: './priority-confirm.component.html',
  styleUrls: ['./priority-confirm.component.scss']
})
export class PriorityConfirmComponent implements OnInit {
  @Input() step!: number;
  selectedChoices: Choice[] = [];

  constructor(
    private router: Router,
    private priorityService: PrioritySelectionService
  ) { }

  ngOnInit(): void {
    this.priorityService.selectedChoices.subscribe(choices => {
      this.selectedChoices = choices;
    });
  }

  navigateToNext() {
    if (this.step === 1) {
      this.router.navigate(['/priority/2']);
    } else {
      this.router.navigate(['/question']);
    }
  }
}
