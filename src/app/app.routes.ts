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
  },
  {
    path: 'membros/editar/:id',
    loadComponent: () => import('./features/membros/pages/membros-edit/membros-edit.component').then(m => m.MembrosEditComponent)
  },
  {
    path: 'campo',
    loadComponent: () => import('./features/membros/pages/membros-list/membros-list.component').then(m => m.MembrosListComponent)
  },
  {
    path: 'membros/novo',
    loadComponent: () => import('./features/membros/pages/membros-create/membros-create.component').then(m => m.MembrosCreateComponent)
  },
  {
    path: 'membros/editar/:id',
    loadComponent: () => import('./features/membros/pages/membros-edit/membros-edit.component').then(m => m.MembrosEditComponent)
  },
  {
    path: 'membros/details/:id',
    loadComponent: () => import('./features/membros/pages/membros-details/membros-details.component').then(m => m.MembrosDetailsComponent)
  },
  {
    path: 'receita/lancar/:membro-id',
    loadComponent: () => import('./features/receita/pages/lancar-receita/lancar-receita.component').then(m => m.LancarReceitaComponent)
  }

];
