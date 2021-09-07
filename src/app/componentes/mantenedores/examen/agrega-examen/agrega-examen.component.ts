import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { RutService } from 'rut-chileno';

import {RutValidator} from 'ng2-rut';
import { validateRut, formatRut, RutFormat } from '@fdograph/rut-utilities';

import Swal from 'sweetalert2';
import { ExamenService } from '@app/servicios/examen.service';
import { IExamen } from '@app/modelo/examen-interface';

@Component({
  selector: 'app-agrega-examen',
  templateUrl: './agrega-examen.component.html',
  styleUrls: ['./agrega-examen.component.css']
})
export class AgregaExamenComponent implements OnInit {

  form: FormGroup;
  usuario: string;
  dato: IExamen;

  constructor(private dialogRef: MatDialogRef<AgregaExamenComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              public servicioService: ExamenService,
              public rutService: RutService,
              public rutValidator: RutValidator
              ) {
               this.usuario = data.usuario;
    }

    codigoExamen = new FormControl('', );
    nombre = new FormControl('', [Validators.required]);
    Sigla = new FormControl('', [Validators.required]);
    precio = new FormControl('', [Validators.required]);
    nombreFormato= new FormControl('', [Validators.required]);

    agregaExamen: FormGroup = new FormGroup({
      codigoExamen: this.codigoExamen,
      nombre: this.nombre,
      Sigla: this.Sigla,
      precio: this.precio,
      nombreFormato: this.nombreFormato,

      // address: this.addressFormControl
    });

    getErrorMessage(campo: string) {
      /*
      if (campo === 'codigoExamen'){
          return this.codigoExamen.hasError('required') ? 'Debes ingresar Exámen' : '';
      }
      */
      if (campo === 'nombre'){
          return this.nombre.hasError('required') ? 'Debes ingresar Nombre'  : '';
      }
      if (campo === 'Sigla'){
          return this.Sigla.hasError('required') ? 'Debes ingresar Sigla' : '';
      }
      if (campo === 'precio'){
        return this.precio.hasError('required') ? 'Debes ingresar Precio' : '';
      }

      if (campo === 'nombreFormato'){
        return this.nombreFormato.hasError('required') ? 'Debes Seleccionar Formato' : '';
      }

      return '';
    }


  ngOnInit() {
  }

  enviar() {
    this.dato = {
      codigoExamen: this.agregaExamen.get('codigoExamen').value,
      nombre: this.agregaExamen.get('nombre').value,
      Sigla: this.agregaExamen.get('Sigla').value,
      precio: this.agregaExamen.get('precio').value,
      usuarioCrea_id: this.usuario,
      usuarioModifica_id: this.usuario
    };
    console.log('agrega 1:', this.dato);
    this.servicioService.postDataExamen(this.dato)
    .subscribe(
      dato => {
        console.log('respuesta:', dato.codigo);
        if (dato.codigo === 200) {
            Swal.fire(
            'Ya se agrego con Exito',
            'Click en Boton!',
            'success'
          ); // ,
            this.dialogRef.close(1);
        }else{
          Swal.fire(
            dato.mensaje,
            'Click en Boton!',
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

