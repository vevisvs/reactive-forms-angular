import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  incompleteForm = false;
  user: FormGroup;

  constructor(private builder: FormBuilder){
    this.user = this.builder.group({
      name: ['',  [Validators.required, Validators.minLength(3)]],
      lastname: ['',  Validators.required],
      email: ['',  [Validators.required, Validators.email]],
      password: ['',  [Validators.required, Validators.minLength(6)]]
    })
  }

  submitForm(): void{
    if(this.user.valid){
      this.incompleteForm = false;
      console.log("user creado correctamente", this.user.value)
      this.user.reset();
      alert("Usuario creado correctamente");
    }else{
      console.log("Hubo un error, hay campos incompletos en el formulario")
      this.incompleteForm = true;
    }
  }
}
