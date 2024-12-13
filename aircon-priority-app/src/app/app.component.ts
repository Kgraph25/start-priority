import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { ProgressBarComponent } from './components/shared/progress-bar/progress-bar.component';
import { filter } from 'rxjs/operators';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressBarComponent, MatSnackBarModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currentStep: number = 0;
  totalSteps: number = 5;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateCurrentStep();
    });
  }

  updateCurrentStep() {
    const url = this.router.url;
    if (url === '/') {
      this.currentStep = 0;
    } else if (url === '/priority/1') {
      this.currentStep = 1;
    } else if (url === '/priority/confirm/1') {
      this.currentStep = 2;
    } else if (url === '/priority/2') {
      this.currentStep = 3;
    } else if (url === '/priority/confirm/2') {
      this.currentStep = 4;
    } else if (url === '/question') {
      this.currentStep = 5;
    } else if (url === '/completion') {
      this.currentStep = 6;
    } else if (url === '/result') {
      this.currentStep = 7;
    }
  }
}
