// Libraries
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Services
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'doris-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  frmFormulario: FormGroup;

  constructor(private usuario$: UsuarioService) {
    this.frmFormulario = new FormGroup({
      // id: new FormControl(),
      nombre: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      apellido: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
    });
  }

  ngOnInit(): void {}

  setIsInvalid(item: string): boolean {
    if (
      this.frmFormulario.get(item)?.errors &&
      (!this.frmFormulario.get('nombre')?.pristine ||
        this.frmFormulario.get('nombre')?.touched)
    ) {
      return true;
    }
    return false;
  }

  enviarFormulario(): void {
    // activar ruedita de cargando
    const form = this.frmFormulario.getRawValue();
    this.usuario$.setInfo(form).subscribe({
      next: (data) => {
        console.log(data);
        this.frmFormulario.reset();
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
        // desactivar ruedita de cargando
      },
    });
  }
}
