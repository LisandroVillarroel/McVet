import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { IEspecie } from '@app/modelo/especie-interface';
import { EspecieService } from '@app/servicios/especie.service';


@Component({
  selector: 'app-agrega-especie',
  templateUrl: './agrega-especie.component.html',
  styleUrls: ['./agrega-especie.component.css']
})
export class AgregaEspecieComponent implements OnInit {

  form: FormGroup;
  usuario: string;
  dato: IEspecie;

  constructor(private dialogRef: MatDialogRef<AgregaEspecieComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              public especieService: EspecieService,
              ) {
               this.usuario = data.usuario;
    }

    nombre = new FormControl('', [Validators.required]);


    agregaEspecie: FormGroup = new FormGroup({
      nombre: this.nombre
    });

    getErrorMessage(campo: string) {

      if (campo === 'nombre'){
          return this.nombre.hasError('required') ? 'Debes ingresar Nombre'  : '';
      }

      return '';
    }


  ngOnInit() {
  }

  enviar() {
    this.dato = {
      nombre: this.agregaEspecie.get('nombre').value,
      usuarioCrea_id: this.usuario,
      usuarioModifica_id: this.usuario
    };
    console.log('agrega 1:', this.dato);
    this.especieService.postDataEspecie(this.dato)
    .subscribe(
      dato => {
        console.log('respuesta:', dato);
        console.log('respuesta:', dato.mensaje);
        if (dato.codigo === 200) {
            Swal.fire(
            'Ya se agrego con Éxito',
            'Click en Botón!',
            'success'
          ); // ,
            this.dialogRef.close(1);
        }else{
          Swal.fire(
            dato.mensaje.message,
            'Click en Botón!',
            'error'
          );
          this.dialogRef.close(1);
        }
      }
    );
  }
  // Error handling
  cerrar() {
    this.dialogRef.close();
  }
}

