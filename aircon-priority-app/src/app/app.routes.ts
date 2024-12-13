import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PriorityComponent } from './components/priority/priority.component';
import { PriorityConfirmComponent } from './components/priority-confirm/priority-confirm.component';
import { QuestionComponent } from './components/question/question.component';
import { CompletionComponent } from './components/completion/completion.component';
import { ResultComponent } from './components/result/result.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'priority/1', component: PriorityComponent },
  { path: 'priority/confirm/1', component: PriorityConfirmComponent },
  { path: 'priority/2', component: PriorityComponent },
  { path: 'priority/confirm/2', component: PriorityConfirmComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'completion', component: CompletionComponent },
  { path: 'result', component: ResultComponent },
];
