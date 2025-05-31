import { Component, OnInit } from '@angular/core';
import { MembrosFormComponent } from "../membros-form/membros-form.component";
import { MembrosService } from '../../services/membros.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-membros-create',
  standalone: true,
  imports: [MembrosFormComponent],
  templateUrl: './membros-create.component.html',
  styleUrl: './membros-create.component.scss'
})
export class MembrosCreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private membrosService: MembrosService
  ) { }

  createForm = this.fb.group({
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

  handleFormSubmit() {
    const formData = this.createForm.value;
    this.create(formData) ;
  }

  create(formData: any) {
    this.membrosService.create(formData).subscribe({
      next: () => {
        this.router.navigate(['membros']);
      },
      error: (error) => {
        console.error('Erro ao criar membro:', error);
      }
    });
  }

  ngOnInit(): void {
  }

}
