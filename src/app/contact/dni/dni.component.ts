import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  standalone: false,

  templateUrl: './dni.component.html',
  styleUrl: './dni.component.css',
})
export class DniComponent implements OnChanges {
  formularioDocumento: FormGroup;
  @Input() tipoDni: string = 'DNI';
  variableNueva: string = '';

  constructor(private form: FormBuilder) {
    this.formularioDocumento = this.form.group({
      dni: [''],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.variableNueva = !changes?.['tipoDni'].firstChange
      ? changes?.['tipoDni']?.currentValue
      : 'Sergio';
    console.log(this.variableNueva);
  }

  hasError(controlName: string, errorType: string) {
    return (
      this.formularioDocumento.get(controlName)?.hasError(errorType) &&
      this.formularioDocumento.get(controlName)?.touched
    );
  }
}
