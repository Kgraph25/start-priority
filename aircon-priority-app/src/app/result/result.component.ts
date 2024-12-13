import { Component, OnInit } from '@angular/core';
import { PrioritySelectionService } from '../priority-selection.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit {
  adviceMessage: string = '';

  constructor(private prioritySelectionService: PrioritySelectionService) { }

  ngOnInit(): void {
    this.adviceMessage = this.prioritySelectionService.getAdviceMessage();
  }
}
