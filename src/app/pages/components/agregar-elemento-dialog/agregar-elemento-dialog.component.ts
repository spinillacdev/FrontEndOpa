import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-elemento-dialog',
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-elemento-dialog.component.html',
  styleUrl: './agregar-elemento-dialog.component.css'
})
export class AgregarElementoDialogComponent {
  formulario: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AgregarElementoDialogComponent>,
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      peso: [0, [Validators.required, Validators.min(0)]],
      calorias: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onCancelar(): void {
    this.dialogRef.close();
  }

  onAgregar(): void {
    if (this.formulario.valid) {
      this.dialogRef.close(this.formulario.value);
    } else {
      alert('Formulario inválido');
    }
  }
}
