import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsuarioService } from '@app/servicios/usuario.service';
import { ICliente } from '@app/modelo/cliente-interface';
import { IExamen } from '@app/modelo/examen-interface';
import { IUsuario } from '@app/modelo/usuario-interface';
import { ClienteService } from '@app/servicios/cliente.service';
import { ExamenService } from '@app/servicios/examen.service';


import Swal from 'sweetalert2';
import { RazaService } from '@app/servicios/raza.service';
import { EspecieService } from '@app/servicios/especie.service';
import { IEspecie } from '@app/modelo/especie-interface';
import { IRaza } from '@app/modelo/raza-interface';

@Component({
  selector: 'app-agrega-examenes-fichas',
  templateUrl: './agrega-examenes-fichas.component.html',
  styleUrls: ['./agrega-examenes-fichas.component.css']
})
export class AgregaExamenesFichasComponent implements OnInit {

  form: FormGroup;
  datoExamen: IExamen[];
  datoUsuario: IUsuario[];
  datoCliente: ICliente[];

  datoEspecie: IEspecie[];
  datoRaza: IRaza[];

  fechaActual: Date = new Date();

  datoSexo = [{ nombre: 'Hembra', id: 'Hembra'}, { nombre: 'Macho', id: 'Macho'}];

  constructor(//private dialogRef: MatDialogRef<SeleccionExamenComponent>,
          //    @Inject(MAT_DIALOG_DATA) data,
              private examenService: ExamenService,
              private usuarioService: UsuarioService,
              private clienteService: ClienteService,
              private especieService: EspecieService,
              private razaService: RazaService
              ) {
                this.cargaCliente();
                this.cargaExamen();
                this.cargaUsuario();
                this.cargaEspecie();
                this.cargaRaza();
    }

    idUsuario = new FormControl('', [Validators.required]);
    idCliente= new FormControl('', [Validators.required]);
    idExamen= new FormControl('', [Validators.required]);
    nombrePropietario= new FormControl('', [Validators.required]);
    nombrePaciente= new FormControl('', [Validators.required]);
    idEspecie= new FormControl('', [Validators.required]);
    idRaza= new FormControl('', [Validators.required]);
    edad= new FormControl('', [Validators.required]);
    sexo= new FormControl('', [Validators.required]);
    docSolicitante= new FormControl('', [Validators.required]);

    agregaCabeceraExamen: FormGroup = new FormGroup({
                  idUsuario: this.idUsuario,
                  idCliente: this.idCliente,
                  idExamen: this.idExamen,
                  nombrePropietario: this.nombrePropietario,
                  nombrePaciente: this.nombrePaciente,
                  idEspecie: this.idEspecie,
                  idRaza: this.idRaza,
                  edad: this.edad,
                  sexo: this.sexo,
                  docSolicitante: this.docSolicitante
    });

    getErrorMessage(campo: string) {
                  if (campo === 'idUsuario'){
                      return this.idUsuario.hasError('required') ? 'Debes Seleccionar Usuario' : '';
                  }
                  if (campo === 'idCliente'){
                    return this.idCliente.hasError('required') ? 'Debes Seleccionar Cliente' : '';
                  }
                  if (campo === 'idExamen'){
                    return this.idExamen.hasError('required') ? 'Debes Seleccionar Exámen' : '';
                  }
                  if (campo === 'nombrePropietario'){
                    return this.nombrePropietario.hasError('required') ? 'Debes ingresar Nombre Propietario' : '';
                  }
                  if (campo === 'nombrePaciente'){
                    return this.nombrePaciente.hasError('required') ? 'Debes ingresar Nombre Paciente' : '';
                  }
                  if (campo === 'idEspecie'){
                    return this.idEspecie.hasError('required') ? 'Debes Seleccionar Especie' : '';
                  }
                  if (campo === 'idRaza'){
                    return this.idRaza.hasError('required') ? 'Debes Seleccionar Raza' : '';
                  }
                  if (campo === 'edad'){
                    return this.edad.hasError('required') ? 'Debes Ingresar Edad' : '';
                  }
                  if (campo === 'sexo'){
                    return this.sexo.hasError('required') ? 'Debes Seleccionar Sexo' : '';
                  }
                  if (campo === 'docSolicitante'){
                    return this.docSolicitante.hasError('required') ? 'Debes Ingresar Dr. Solicitante' : '';
                  }

                  return '';
                }

  ngOnInit() {

  }

  cargaExamen(){
    this.examenService
    .getDataExamen()
    .subscribe(res => {
      console.log('examen:', res['data'])
      this.datoExamen = res['data'] ;
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

  cargaUsuario(){
    this.usuarioService
    .getDataUsuario()
    .subscribe(res => {
      console.log('examen:', res['data'])
      this.datoUsuario = res['data'] ;
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

  cargaCliente(){
    this.clienteService
    .getDataCliente()
    .subscribe(res => {
      console.log('examen:', res['data'])
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

  cargaEspecie(){
    this.especieService
    .getDataEspecie()
    .subscribe(res => {
      console.log('examen:', res['data'])
      this.datoEspecie = res['data'] ;
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

  cargaRaza(){
    this.razaService
    .getDataRaza()
    .subscribe(res => {
      console.log('examen:', res['data'])
      this.datoRaza = res['data'] ;
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
  seleccionaUsuario(p){
    return;
  }

  seleccionaExamen(p){
    return;
  }

  seleccionaCliente(p){
    return;
  }


  enviar() {


  }

  // Error handling


  cerrar() {
   // this.dialogRef.close();
  }
}

