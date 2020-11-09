import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { EmpresaService } from './../../../../servicios/empresa.service';
import { EmpresaI } from './../../../../modelo/empresa-interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-elimina-empresa',
  templateUrl: './elimina-empresa.component.html',
  styleUrls: ['./elimina-empresa.component.css']
})
export class EliminaEmpresaComponent implements OnInit {

  datoEmpresaPar: EmpresaI;
  datoEmpresa: EmpresaI;

  constructor(private dialogRef: MatDialogRef<EliminaEmpresaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public servEmpresa: EmpresaService
    ) {this.datoEmpresaPar = data; }

  ngOnInit(): void {
  }

  enviar() {
    this.datoEmpresa = {
      _id: this.datoEmpresaPar._id,
      rutEmpresa: this.datoEmpresaPar.rutEmpresa,
      razonSocial: '',
      nombreFantasia: '',
      direccion: '',
      usuarioModifica_id: this.datoEmpresaPar.usuarioModifica_id
    };

    this.servEmpresa.deleteDataEmpresa(this.datoEmpresa)
    .subscribe(
      dato => {
        console.log('respuesta:', dato['codigo']);
        if (dato['codigo'] === 200) {
            Swal.fire(
            'Se ELIMINÓ con Exito',
            'Click en Boton!',
            'success'
          ),
          this.dialogRef.close(1);
        }
        else{
          console.log('error', dato);
        }
      }
       // error =>{console.log('error agrega:',<any>error);this.errorMsg=error.error.error;alert('Error: ' + this.errorMsg)}
      );

  }

  cerrar() {
    this.dialogRef.close();
  }
}
