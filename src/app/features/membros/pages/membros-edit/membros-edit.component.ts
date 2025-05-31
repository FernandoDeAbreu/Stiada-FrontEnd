import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MembrosFormComponent } from '../membros-form/membros-form.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MembrosService } from '../../services/membros.service';

@Component({
  selector: 'app-membros-edit',
  standalone: true,
  imports: [CommonModule, MembrosFormComponent],
  templateUrl: './membros-edit.component.html',
  styleUrl: './membros-edit.component.scss'
})
export class MembrosEditComponent implements OnInit {

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
     private fb: FormBuilder,
     private router: Router,
     private route: ActivatedRoute,
     private membrosService: MembrosService
   ) { }

   handleFormSubmit() {
    const formData = this.createForm.value;
    this.update(formData) ;
  }

  update(formData: any) {
    this.membrosService.update(formData).subscribe({
      next: () => {
        this.router.navigate(['membros']);
      },
      error: (error) => {
        console.error('Erro ao atualizar membro:', error);
      }
    });
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.membrosService.getById(id).subscribe(item => {
      this.createForm.patchValue(item);
    });
  }

}
