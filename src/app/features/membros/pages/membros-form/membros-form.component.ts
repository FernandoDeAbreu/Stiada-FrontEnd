import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-membros-form',
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
  templateUrl: './membros-form.component.html',
  styleUrl: './membros-form.component.scss'
})
export class MembrosFormComponent {
  @Input() form!: FormGroup;
  @Input() submitText = 'Salvar';
  error?: string;

  ngOnInit() {
    if(!this.form){
      throw new Error('O formulário é obrigatório');
    }
  }

  onSubmit() {}
}
