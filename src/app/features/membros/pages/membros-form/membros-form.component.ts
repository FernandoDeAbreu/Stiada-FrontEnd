import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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
  @Input() formGroup!: FormGroup;
  @Input() submitText = 'Salvar';
  @Output() formSubmit = new EventEmitter<void>();
  error?: string;

  constructor(private router: Router) {}
  ngOnInit() {
    if(!this.formGroup){
      throw new Error('O formulário é obrigatório');
    }
  }

  onSubmit() {
    this.save();
  }

  save(): void {
    if (this.formGroup.valid) {
      this.formSubmit.emit();
    }
  }

  cancel(): void{
    this.router.navigate(['membros']);
  }
}
