import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() currentStep: number = 0;
  @Input() totalSteps: number = 0;

  get progressPercentage(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }
}
