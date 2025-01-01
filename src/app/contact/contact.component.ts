import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit, OnDestroy {
  formularioContacto: FormGroup;
  tipoDni: string = 'DNI';
  mostrarDNI: boolean = true;

  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipodni: [''],
      tipoDni: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnDestroy(): void {
    console.log('Componente destruido');
  }
  ngOnInit(): void {
    this.formularioContacto.get('nombre')?.setValue('Juan');
    this.formularioContacto.get('nombre')?.disable();
    this.formularioContacto.get('tipodni')?.valueChanges.subscribe((value) => {
      this.mostrarDNI = value != '';
      this.tipoDni = value;
    });
  }

  hasError(controlName: string, errorType: string) {
    return (
      this.formularioContacto.get(controlName)?.hasError(errorType) &&
      this.formularioContacto.get(controlName)?.touched
    );
  }

  enviar() {
    console.log(this.formularioContacto);
  }
}
