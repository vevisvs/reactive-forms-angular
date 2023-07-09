import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

interface User{
  name: FormControl<string | null>,
  lastname: FormControl<string | null>,
  email: FormControl<string | null>,
  password: FormControl<string | null>
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user: FormGroup<User>;
  constructor(private builder: FormBuilder){
    this.user = this.builder.group({
      name: [''],
      lastname: [''],
      email: [''],
      password: ['']
    })
  }
}
