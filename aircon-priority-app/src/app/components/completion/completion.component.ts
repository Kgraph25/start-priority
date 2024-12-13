import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.scss']
})
export class CompletionComponent {
  constructor(private router: Router) { }

  navigateToResult() {
    this.router.navigate(['/result']);
  }
}
