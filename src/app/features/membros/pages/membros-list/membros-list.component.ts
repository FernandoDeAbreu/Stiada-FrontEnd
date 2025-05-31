import { CommonModule } from '@angular/common';
import { Component, DestroyRef , ChangeDetectionStrategy} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MembrosModel } from '../../models/membrosModel';
import { MembrosService } from '../../services/membros.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-membros-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './membros-list.component.html',
  styleUrl: './membros-list.component.scss'
})
export class MembrosListComponent {
loading = true;
membros: MembrosModel[] = [];
erro?: string;

constructor(
  private _membrosService: MembrosService,
  private _destroyRef: DestroyRef,
  private router: Router
){
  this.loadMembros();
}

loadMembros(){
  this._membrosService.getAll().pipe(
    takeUntilDestroyed(this._destroyRef))
    .subscribe({
      next: membros => {
        this.membros = membros;
        this.loading = false;
      },
      error: err => {
        this.erro = err;
        this.loading = false;
      }});
}
editMembro(membro: MembrosModel) : void{
  this.router.navigate(['membros', 'details', membro.id]);
}
}


