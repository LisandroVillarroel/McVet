import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ExamenService } from './../../../../servicios/examen.service';
import { IExamen } from '../../../../modelo/examen-interface';

import Swal from 'sweetalert2';
import { formatRut, RutFormat, validateRut } from '@fdograph/rut-utilities';

@Component({
  selector: 'app-modifica-examen',
  templateUrl: './modifica-examen.component.html',
  styleUrls: ['./modifica-examen.component.css']
})
export class ModificaExamenComponent implements OnInit {

  form: FormGroup;

  // id: string;
  // rutEmpresa: string;
  // razonSocialPar: string;
  // nombreFantasia: string;
  // direccion: string;
  // usuario: string;
  datoPar: IExamen;
  _dato: IExamen;

  constructor(private dialogRef: MatDialogRef<ModificaExamenComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public servicioService: ExamenService
              ) {
                this.datoPar = data;
                console.log('dato update: ', data);
               // this.id = data.id;
               // this.rutEmpresa: data.rutEmpresa;
               // this.razonSocialPar = data.razonSocial;
               // nombreFantasia: string;
               // direccion: string;
               // usuario: string;
  }
  codigoExamen = new FormControl(this.data.codigoExamen);
  nombre = new FormControl(this.data.nombre, [Validators.required]);
  sigla = new FormControl(this.data.sigla, [Validators.required]);
  precio = new FormControl(this.data.precio, [Validators.required]);

  modifica: FormGroup = new FormGroup({
    codigoExamen: this.codigoExamen,
    nombre: this.nombre,
    sigla: this.sigla,
    precio: this.precio,
      // address: this.addressFormControl
    });

    getErrorMessage(campo) {
/*      if (campo === 'codigoExamen'){
        return this.codigoExamen.hasError('required') ? 'Debes ingresar Código Exámen' : '';
    }*/
    if (campo === 'nombre'){
        return this.nombre.hasError('required') ? 'Debes ingresar Nombre'  : '';
    }
    if (campo === 'sigla'){
        return this.sigla.hasError('required') ? 'Debes ingresar Sigla' : '';
    }
    if (campo === 'precio'){
      return this.precio.hasError('required') ? 'Debes ingresar Precio' : '';
    }

    return '';
    }

  ngOnInit() {
  }

  enviar() {
    this._dato = {
      _id: this.datoPar._id,
      codigoExamen: this.modifica.get('codigoExamen').value,
      nombre: this.modifica.get('nombre').value,
      sigla: this.modifica.get('sigla').value,
      precio: this.modifica.get('precio').value,
      usuarioModifica_id: this.datoPar.usuarioModifica_id
    };
    console.log('modifica:', this._dato);
    this.servicioService.putDataExamen(this._dato)
    .subscribe(
      dato => {
        console.log('respuesta:', dato['codigo']);
        if (dato['codigo'] === 200) {
            Swal.fire(
            'Ya se grabó con Exito',
            'Click en Boton!',
            'success'
          ),
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
       // error =>{console.log('error agrega:',<any>error);this.errorMsg=error.error.error;alert('Error: ' + this.errorMsg)}
      );
      // this.dialogRef.close(this.form.value);
    // console.log(this.datoCotiza);
  }

  // Error handling


  cerrar() {
    this.dialogRef.close();
  }

}
