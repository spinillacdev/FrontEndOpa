import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AgregarElementoDialogComponent } from '../components/agregar-elemento-dialog/agregar-elemento-dialog.component';
import { DatosExcursionistas, ElementosExcursionistas } from '../../models/datos-excursionistas';
import { ExcursionistaService } from '../../services/excursionista.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-excursionistas',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './excursionistas.component.html',
  styleUrl: './excursionistas.component.css'
})
export class ExcursionistasComponent {

  form: FormGroup;

  datosExcursionista: DatosExcursionistas = {
    pesoMaximo: 0,
    caloriasMinimas: 0,
    elementos: []
  }

  elementosOptimos: ElementosExcursionistas[] = []

  excursionistaService = inject(ExcursionistaService)
  dialog = inject(MatDialog)
  fb = inject(FormBuilder)
  
  constructor() {
    this.form = this.fb.group({
      pesoMaximo: ['', [Validators.required, Validators.min(1)]],
      caloriasMinimas: ['', [Validators.required, Validators.min(1)]]
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgregarElementoDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.datosExcursionista.elementos.push(result)
      }
    });
  }

  elimiarElemento(index: number){
    this.datosExcursionista.elementos.splice(index,1);
  }

  calcularElementos(){
    if (this.form.valid && this.datosExcursionista.elementos.length > 0) {
      this.datosExcursionista.pesoMaximo = this.form.value.pesoMaximo;
      this.datosExcursionista.caloriasMinimas = this.form.value.caloriasMinimas;

      this.excursionistaService.agregarExcursionista(this.datosExcursionista).subscribe({
        next: (result) => {
          this.elementosOptimos = result
        },
        error: (error) => {
          console.log(error)
        }
      })
    } else {
      alert('Formulario inválido');
    }
  }

  limpiarFormulario(){
    this.elementosOptimos = []
    this.datosExcursionista = {
      pesoMaximo: 0,
      caloriasMinimas: 0,
      elementos: []
    }
    this.form.reset;
  }
}
