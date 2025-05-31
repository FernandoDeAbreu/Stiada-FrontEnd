import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MembrosService } from '../../services/membros.service';
import { MembrosModel } from '../../models/membrosModel';
import { MatDialog } from '@angular/material/dialog';
import { LancarReceitaComponent } from '../../../receita/pages/lancar-receita/lancar-receita.component';

@Component({
  selector: 'app-membros-details',
  standalone: true,
  imports: [
     CommonModule,
     ReactiveFormsModule,
     RouterModule,
     MatFormFieldModule,
     MatInputModule,
     FormsModule,
     MatButtonModule,
     MatIconModule],
  templateUrl: './membros-details.component.html',
  styleUrl: './membros-details.component.scss'
})
export class MembrosDetailsComponent implements OnInit {
 @Input() submitText = 'Salvar';
 @Output() formSubmit = new EventEmitter<void>();
 error?: string;
 firstLetter: string = '';
 firstName: string = '';
 membro: MembrosModel = {} as MembrosModel;

  createForm = this.fb.group({
    id:[0],
    nome: [''],
    dataNascimento: [''],
    dataEntrada: [''],
    dataSaida: [''],
    endereco: [''],
    telefone: [''],
    email: [''],
    whatsApp: [''],
    observacao: ['']
  })
    constructor(
      private dialog: MatDialog,
       private fb: FormBuilder,
       private router: Router,
       private route: ActivatedRoute,
       private membrosService: MembrosService
     ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.membrosService.getById(id).subscribe(item => {
      this.createForm.patchValue(item);
      this.membro = item;
      this.firstLetter = this.getFirstLetter(item.nome ?? null);
      this.firstName = this.getFirstName(item.nome);
    });

  }

  getFirstLetter(name: string | null): string {
    return name ? name.charAt(0).toUpperCase() : '';
  }
  getFirstName(fullName: string): string {
    return fullName.split(" ")[0];
  }

  editMembro(membro: MembrosModel) : void{
    this.router.navigate(['membros', 'editar', membro.id]);
  }

  abrirCriacao(membro: MembrosModel, tipoContribuicao: string): void {
    this.dialog.open(LancarReceitaComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: true,
      data: {
        membroId: this.membro.id,
        tipoContribuicao: tipoContribuicao
      }
    });
  }
  lancarDizimo(membro: MembrosModel) : void{
    this.router.navigate(['receita', 'lancar', membro.id]);
  }
}
