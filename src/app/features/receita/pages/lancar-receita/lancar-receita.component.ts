import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ReceitaService } from '../services/receita.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-lancar-receita',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './lancar-receita.component.html',
  styleUrl: './lancar-receita.component.scss'
})
export class LancarReceitaComponent {

  tipoContribuicao!: string;
  membroId!: number;

  createForm = this.fb.group({
    data: ['', Validators.required],
    valor: ['', Validators.required],
    tipoContribuicao: [this.tipoContribuicao],
    membroId: [this.membroId],
    observacao: [''],
    dtLanc: ['']
  });

  constructor(
    public dialogRef: MatDialogRef<LancarReceitaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private router: Router,
    private _service: ReceitaService
  ) {
    this.tipoContribuicao = data.tipoContribuicao || '';
    this.membroId = data.membroId;
  }


  closeDialog(): void {
    this.dialogRef.close();
  }

 salvar(): void {

  if (this.createForm.invalid) {
    console.error('Formulário inválido');
    return;
  }

  const formData = this.createForm.value;
  formData.membroId = this.membroId;
  formData.tipoContribuicao = this.tipoContribuicao;
  formData.dtLanc = new Date().toISOString();

  this._service.create(formData).subscribe({
    next: () => {
      this.dialogRef.close(true);
    },
    error: (error) => {
      console.error('Erro ao criar receita:', error);
    }
  });
}
}
