import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Choice } from '../../models/choice.model';
import { PrioritySelectionService } from '../../services/priority-selection.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-priority',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss']
})
export class PriorityComponent implements OnInit {
  @Input() step!: number;
  choices: Choice[] = [];
  selectedChoices: Choice[] = [];

  constructor(
    private router: Router,
    private priorityService: PrioritySelectionService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.choices = this.priorityService.choices;
    this.priorityService.selectedChoices.subscribe(choices => {
      this.selectedChoices = choices;
    });
  }

  selectChoice(choice: Choice) {
    choice.isSelected = !choice.isSelected;
  }

  navigateToNext() {
    if (this.selectedChoices.length === 0) {
      this.snackBar.open('選択肢を一つ以上選択してください', '閉じる', { duration: 3000 });
      return;
    }
    this.priorityService.selectedChoices.next(this.choices.filter(choice => choice.isSelected));
    this.router.navigate([`/priority/confirm/${this.step}`]);
  }
}
