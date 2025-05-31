import { Component, DestroyRef } from '@angular/core';
import { campoModel } from '../../models/campoModels';
import { CampoService } from '../../services/campo.service';
import { Router, RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-campo-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './campo-list.component.html',
  styleUrl: './campo-list.component.scss'
})
export class CampoListComponent{
loading = true;
campos: campoModel[] = [];
erro?: string;

constructor(
  private _camposService: CampoService,
  private _destroyRef: DestroyRef,
  private router: Router
){
  this.loadCampos();
}

loadCampos(){
  this._camposService.getAll().pipe(
    takeUntilDestroyed(this._destroyRef))
    .subscribe({
      next: campos => {
        this.campos = campos;
        this.loading = false;
      },
      error: err => {
        this.erro = err;
        this.loading = false;
      }});
}
editCampo(campo: campoModel) : void{
  this.router.navigate(['campos', 'editar', campo.id]);
}
}

