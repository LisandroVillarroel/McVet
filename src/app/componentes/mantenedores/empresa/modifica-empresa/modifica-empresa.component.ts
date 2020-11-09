import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { EmpresaService } from './../../../../servicios/empresa.service';
import { EmpresaI } from './../../../../modelo/empresa-interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifica-empresa',
  templateUrl: './modifica-empresa.component.html',
  styleUrls: ['./modifica-empresa.component.css']
})
export class ModificaEmpresaComponent implements OnInit {

  form: FormGroup;

  // id: string;
  // rutEmpresa: string;
  // razonSocialPar: string;
  // nombreFantasia: string;
  // direccion: string;
  // usuario: string;
  datoEmpresaPar: EmpresaI;
  datoEmpresa: EmpresaI;

  constructor(private dialogRef: MatDialogRef<ModificaEmpresaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public servEmpresa: EmpresaService
              ) {
                this.datoEmpresaPar = data;
               // this.id = data.id;
               // this.rutEmpresa: data.rutEmpresa;
               // this.razonSocialPar = data.razonSocial;
               // nombreFantasia: string;
               // direccion: string;
               // usuario: string;
  }

    razonSocial = new FormControl(this.data.razonSocial, [Validators.required]);
    nombreFantasia = new FormControl(this.data.nombreFantasia, [Validators.required]);
    direccion = new FormControl(this.data.direccion, [Validators.required]);

    modificaEmpresa: FormGroup = new FormGroup({
      // rutEmpresa: this.datoEmpresaPar.rutEmpresa,
      razonSocial: this.razonSocial,
      nombreFantasia: this.nombreFantasia,
      direccion: this.direccion

      // address: this.addressFormControl
    });

    getErrorMessage() {
      return this.razonSocial.hasError('required') ? 'Debes ingresar Razón Social' :
          this.nombreFantasia.hasError('required') ? 'Debes ingresar Nombre Fantasía' :
          this.direccion.hasError('required') ? 'Debes ingresar Dirección' :
              '';
    }

  ngOnInit() {
  }

  enviar() {
    this.datoEmpresa = {
      _id: this.datoEmpresaPar._id,
      rutEmpresa: this.datoEmpresaPar.rutEmpresa,
      razonSocial: this.modificaEmpresa.get('razonSocial').value.toUpperCase(),
      nombreFantasia: this.modificaEmpresa.get('nombreFantasia').value.toUpperCase(),
      direccion: this.modificaEmpresa.get('direccion').value.toUpperCase(),
    //  usuarioCrea_id: this.datoEmpresaPar.usuarioCrea_id,
      usuarioModifica_id: this.datoEmpresaPar.usuarioModifica_id
    };

    this.servEmpresa.putDataEmpresa(this.datoEmpresa)
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
        }else{
          console.log('dato: ', dato);
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
