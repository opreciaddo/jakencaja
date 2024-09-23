import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.scss']
})
export class ContactoFormComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    empresa: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.minLength(6)]],
    mensaje: ['']
  });

  constructor( private fb: FormBuilder ){}

  validacion(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched; 
  }

  enviar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    
    fetch("https://formsubmit.co/ajax/bea82677a6944f0f09767bccb6206065", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(this.miFormulario.value)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

    /* console.log(this.miFormulario.value) */

    this.miFormulario.reset();
  }
}
