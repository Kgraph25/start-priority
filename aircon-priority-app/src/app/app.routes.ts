import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '/landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: '/priority', loadChildren: () => import('./priority/priority.module').then(m => m.PriorityModule) },
  { path: '/question1', loadChildren: () => import('./question1/question1.module').then(m => m.Question1Module) },
  { path: '/question2-guide', loadChildren: () => import('./question2-guide/question2-guide.module').then(m => m.Question2GuideModule) },
  { path: '/question2', loadChildren: () => import('./question2/question2.module').then(m => m.Question2Module) },
  { path: '/completion', loadChildren: () => import('./completion/completion.module').then(m => m.CompletionModule) },
  { path: '/result', loadChildren: () => import('./result/result.module').then(m => m.ResultModule) },
];
