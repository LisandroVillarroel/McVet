import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ClienteService } from '../../../../servicios/cliente.service';
import {ICliente} from '../../../../modelo/cliente-interface';

import { RutService } from 'rut-chileno';

import {RutValidator} from 'ng2-rut';
import { validateRut, formatRut, RutFormat } from '@fdograph/rut-utilities';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-agrega-cliente',
  templateUrl: './agrega-cliente.component.html',
  styleUrls: ['./agrega-cliente.component.css']
})
export class AgregaClienteComponent implements OnInit {

  form: FormGroup;
  usuario: string;
  datoCliente: ICliente;

  constructor(private dialogRef: MatDialogRef<AgregaClienteComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              public servCliente: ClienteService,
              public rutService: RutService,
              public rutValidator: RutValidator
              ) {
               this.usuario = data.usuario;
    }

    rutCliente = new FormControl('', [Validators.required, this.validaRut]);
    razonSocial = new FormControl('', [Validators.required]);
    nombreFantasia = new FormControl('', [Validators.required]);
    direccion = new FormControl('', [Validators.required]);
    telefono = new FormControl('', [Validators.required]);
    email = new FormControl('', [Validators.required]);
    nombreContacto = new FormControl('', [Validators.required]);

    agregaCliente: FormGroup = new FormGroup({
      rutCliente: this.rutCliente,
      razonSocial: this.razonSocial,
      nombreFantasia: this.nombreFantasia,
      direccion: this.direccion,
      telefono: this.telefono,
      email: this.email,
      nombreContacto: this.nombreContacto

      // address: this.addressFormControl
    });

    getErrorMessage(campo: string) {
      if (campo === 'rutCliente'){
          return this.rutCliente.hasError('required') ? 'Debes ingresar Rut' :
        this.rutCliente.hasError('rutInvalido') ? 'Rut Inválido' : '';
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
      if (campo === 'telefono'){
        return this.telefono.hasError('required') ? 'Debes ingresar Teléfono' : '';
      }
      if (campo === 'email'){
        return this.email.hasError('required') ? 'Debes ingresar Email' : '';
      }
      if (campo === 'nombreContacto'){
        return this.nombreContacto.hasError('required') ? 'Debes ingresar Nombre Contacto' : '';
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
        return {rutInvalido: true};
    }
    return null;
  }

  onBlurRutCliente(event: any){
    const rut = event.target.value;

    if (validateRut(rut) === true){
      this.agregaCliente.get('rutCliente').setValue(formatRut(rut, RutFormat.DOTS_DASH));
    }
  }

  ngOnInit() {
  }

  enviar() {
    this.datoCliente = {
      rutCliente: this.agregaCliente.get('rutCliente').value.toUpperCase(),
      razonSocial: this.agregaCliente.get('razonSocial').value.toUpperCase(),
      nombreFantasia: this.agregaCliente.get('nombreFantasia').value.toUpperCase(),
      direccion: this.agregaCliente.get('direccion').value.toUpperCase(),
      telefono: this.agregaCliente.get('telefono').value,
      email: this.agregaCliente.get('email').value.toUpperCase(),
      nombreContacto: this.agregaCliente.get('nombreContacto').value.toUpperCase(),
      usuarioCrea_id: this.usuario,
      usuarioModifica_id: this.usuario
    };
    console.log('agrega 1:', this.datoCliente);
    this.servCliente.postDataCliente(this.datoCliente)
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
      // console.log('yo:', res as PerfilI[]),
     /// error => {
     ///   console.log('error agregar:', error);
     /// }
      // this.dialogRef.close(this.form.value);
    // console.log(this.datoCotiza);
    );
  }

  // Error handling


  cerrar() {
    this.dialogRef.close();
  }
}

