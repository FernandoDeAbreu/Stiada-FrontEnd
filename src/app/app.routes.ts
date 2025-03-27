import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/membros'
  },
  {
    path: 'membros',
    loadComponent: () => import('./features/membros/pages/membros-list/membros-list.component').then(m => m.MembrosListComponent)
  },
  {
    path: 'membros/novo',
    loadComponent: () => import('./features/membros/pages/membros-create/membros-create.component').then(m => m.MembrosCreateComponent)
  }

];
