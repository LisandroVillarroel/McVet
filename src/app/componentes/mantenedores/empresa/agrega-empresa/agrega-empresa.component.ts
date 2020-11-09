import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { EmpresaService } from './../../../../servicios/empresa.service';
import {EmpresaI} from './../../../../modelo/empresa-interface';

import { RutService } from 'rut-chileno';

import {RutValidator} from 'ng2-rut';
import { validateRut, formatRut, RutFormat } from '@fdograph/rut-utilities';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-agrega-empresa',
  templateUrl: './agrega-empresa.component.html',
  styleUrls: ['./agrega-empresa.component.css']
})
export class AgregaEmpresaComponent implements OnInit {

  form: FormGroup;
  usuario: string;
  datoEmpresa: EmpresaI;

  constructor(private dialogRef: MatDialogRef<AgregaEmpresaComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              public servEmpresa: EmpresaService,
              public rutService: RutService,
              public rutValidator: RutValidator
              ) {
               this.usuario = data.usuario;
    }

    rutEmpresa = new FormControl('', [Validators.required, this.validaRut]);
    razonSocial = new FormControl('', [Validators.required]);
    nombreFantasia = new FormControl('', [Validators.required]);
    direccion = new FormControl('', [Validators.required]);

    agregaEmpresa: FormGroup = new FormGroup({
      rutEmpresa: this.rutEmpresa,
      razonSocial: this.razonSocial,
      nombreFantasia: this.nombreFantasia,
      direccion: this.direccion

      // address: this.addressFormControl
    });

    getErrorMessage(campo: string) {
      if (campo === 'rutEmpresa'){
          return this.rutEmpresa.hasError('required') ? 'Debes ingresar Rut' :
        this.rutEmpresa.hasError('rutInvalido') ? 'Rut Inválido' : '';
      }
      if (campo === 'razonSocial'){
          return this.razonSocial.hasError('required') ? 'Debes ingresar Razón Social'  : '';
      }
      if (campo === 'nombreFantasia'){
          return this.nombreFantasia.hasError('required') ? 'Debes ingresar Nombre Fantasía' : '';
      }
      if (campo === 'direccion'){
          return this.direccion.hasError('required') ? 'Debes ingresar Dirección' : '';
      }
      /* return this.rutEmpresa.hasError('required') ? 'Debes ingresar Rut' :
             this.rutEmpresa.hasError('rutInvalido') ? 'Rut Inválido' :
          this.razonSocial.hasError('required') ? 'Debes ingresar Razón Social' :
          this.nombreFantasia.hasError('required') ? 'Debes ingresar Nombre Fantasía' :
          this.direccion.hasError('required') ? 'Debes ingresar Dirección' :
              '';
            */
      return '';
    }


  validaRut(control: FormControl): {[s: string]: boolean} {
    console.log('uno', control.value);
    // let out1_rut = this.rutService.getRutChile(0, '12514508-6');
    if (validateRut(control.value) === false){
        return {'rutInvalido': true};
    }
    return null;
  }

  onBlurRutEmpresa(event: any){
    const rut = event.target.value;

    if (validateRut(rut) === true){
      this.agregaEmpresa.get('rutEmpresa').setValue(formatRut(rut, RutFormat.DOTS_DASH));
    }
  }

  ngOnInit() {
  }

  enviar() {
    this.datoEmpresa = {
      rutEmpresa: this.agregaEmpresa.get('rutEmpresa').value.toUpperCase(),
      razonSocial: this.agregaEmpresa.get('razonSocial').value.toUpperCase(),
      nombreFantasia: this.agregaEmpresa.get('nombreFantasia').value.toUpperCase(),
      direccion: this.agregaEmpresa.get('direccion').value.toUpperCase(),
      usuarioCrea_id: this.usuario,
      usuarioModifica_id: this.usuario,
    };
    console.log('agrega 1:', this.datoEmpresa);
    this.servEmpresa.postDataEmpresa(this.datoEmpresa)
    .subscribe(
      dato => {
        console.log('respuesta:', dato['codigo']);
        if (dato['codigo'] === 200) {
            Swal.fire(
            'Ya se agrego con Exito',
            'Click en Boton!',
            'success'
          ),
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

