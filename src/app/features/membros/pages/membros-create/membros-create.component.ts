import { Component } from '@angular/core';
import { MembrosFormComponent } from "../membros-form/membros-form.component";

@Component({
  selector: 'app-membros-create',
  standalone: true,
  imports: [MembrosFormComponent],
  templateUrl: './membros-create.component.html',
  styleUrl: './membros-create.component.scss'
})
export class MembrosCreateComponent {

}
