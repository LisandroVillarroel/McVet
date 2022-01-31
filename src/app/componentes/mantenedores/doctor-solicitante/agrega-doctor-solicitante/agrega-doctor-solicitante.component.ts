  import { Component, OnInit, Inject } from '@angular/core';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICliente } from '@app/modelo/cliente-interface';
  import { ICliente_, IDoctorSolicitante } from '@app/modelo/doctorSolicitante-interface';
import { ClienteService } from '@app/servicios/cliente.service';
  import { DoctorSolicitanteService } from '@app/servicios/doctor-solicitante.service';

  import Swal from 'sweetalert2';


@Component({
  selector: 'app-agrega-doctor-solicitante',
  templateUrl: './agrega-doctor-solicitante.component.html',
  styleUrls: ['./agrega-doctor-solicitante.component.css']
})
export class AgregaDoctorSolicitanteComponent implements OnInit {

    form: FormGroup;
    usuario: string;
    dato: IDoctorSolicitante;
    cliente:ICliente_
    datoCliente:ICliente;

    constructor(private dialogRef: MatDialogRef<AgregaDoctorSolicitanteComponent>,
                @Inject(MAT_DIALOG_DATA) data,
                private doctorSolicitanteService: DoctorSolicitanteService,
                private clienteService: ClienteService,
                ) {
                 this.usuario = data.usuario;
                 this.cargaCliente();
      }

      nombre = new FormControl('', [Validators.required]);
      idCliente = new FormControl('', [Validators.required]);

      agregaDoctorSolicitante: FormGroup = new FormGroup({
        nombre: this.nombre,
        idCliente: this.idCliente
      });

      getErrorMessage(campo: string) {

        if (campo === 'nombre'){
            return this.nombre.hasError('required') ? 'Debes ingresar Nombre'  : '';
        }

        if (campo === 'idCliente'){
          return this.idCliente.hasError('required') ? 'Debes Seleccionar Cliente' : '';
        }

        return '';
      }


    ngOnInit() {
    }

    cargaCliente(){
      this.clienteService
      .getDataCliente()
      .subscribe(res => {
        console.log('cliente:', res['data'])
        this.datoCliente = res['data'] ;
      },
      // console.log('yo:', res as PerfilI[]),
      error => {
        console.log('error carga:', error);
       Swal.fire(
        'ERROR INESPERADO',
        error,
       'error'
      );
      }
    ); // (this.dataSource.data = res as PerfilI[])
    }

    enviar() {

      this.cliente= {
        IdCliente:this.agregaDoctorSolicitante.get('idCliente').value._id,
        nombreFantasia: this.agregaDoctorSolicitante.get('idCliente').value.nombreFantasia
      }

      this.dato = {
        nombre: this.agregaDoctorSolicitante.get('nombre').value,
        cliente:{
          IdCliente: this.agregaDoctorSolicitante.get('nombre').value,
        nombreFantasia: this.agregaDoctorSolicitante.get('nombre').value,
        },
        usuarioCrea_id: this.usuario,
        usuarioModifica_id: this.usuario
      };
      console.log('agrega 1:', this.dato);
      this.doctorSolicitanteService.postDataDoctorSolicitante(this.dato)
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
