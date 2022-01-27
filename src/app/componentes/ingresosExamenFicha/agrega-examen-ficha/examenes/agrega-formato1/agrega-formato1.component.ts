import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

//import { RutService } from 'rut-chileno';

import {RutValidator} from 'ng2-rut';
import { validateRut, formatRut, RutFormat } from '@fdograph/rut-utilities';

import Swal from 'sweetalert2';
import { ExamenService } from '@app/servicios/examen.service';
import { IExamen } from '@app/modelo/examen-interface';
import { IDatos, IFormato1 } from '@app/modelo/formato1-interface';
import { Formato1Service } from '@app/servicios/formato1.service';

@Component({
  selector: 'app-agrega-formato1',
  templateUrl: './agrega-formato1.component.html',
  styleUrls: ['./agrega-formato1.component.css']
})
export class AgregaFormato1Component implements OnInit {


  form: FormGroup;
  usuario: string;
  dato: IFormato1;
  datoExamen: IExamen[];
  datoIngreso: IDatos[]=[];

  srTotal=0;
  sbTotal=0;

  sbNeutrofilosFormula=0;
  sbLinfocitosFormula=0;
  sbMonocitosFormula=0;
  sbEosinofilosFormula=0;
  sbBasofilosFormula=0;
  sbBaciliformesFormula=0;

  constructor(private dialogRef: MatDialogRef<AgregaFormato1Component>,
              @Inject(MAT_DIALOG_DATA) data,
              public servicioService: ExamenService,
              public formato1Service: Formato1Service,
           //   public rutService: RutService,
              public rutValidator: RutValidator
              ) {
               this.usuario = data.usuario;
    }
  //  examen = new FormControl('', [Validators.required] );
    srHematocrito = new FormControl('',  [Validators.required] );
    srEritrocitos = new FormControl('',  [Validators.required] );
    srHemoglobina = new FormControl('');
    srVcm = new FormControl('');
    srChcm = new FormControl('');
    srHcm = new FormControl('');
    srReticulocitos = new FormControl('');
    srPlaquetas = new FormControl('');


    sbLeucocitos = new FormControl('');
    sbLeucocitos2 = new FormControl('');
    sbNeutrofilos = new FormControl('');
    sbLinfocitos = new FormControl('');
    sbMonocitos = new FormControl('');
    sbEosinofilos = new FormControl('');
    sbBasofilos = new FormControl('');
    sbBaciliformes = new FormControl('');


    agregaFormato1: FormGroup = new FormGroup({
     // examen: this.examen,
     srHematocrito: this.srHematocrito,
     srEritrocitos: this.srEritrocitos,
     srHemoglobina: this.srHemoglobina,
     srVcm: this.srVcm,
     srChcm: this.srChcm,
     srHcm: this.srHcm,
     srReticulocitos: this.srReticulocitos,
     srPlaquetas: this.srPlaquetas,

     sbLeucocitos: this.sbLeucocitos,
     sbLeucocitos2: this.sbLeucocitos2,
     sbNeutrofilos: this.sbNeutrofilos,
     sbLinfocitos: this.sbLinfocitos,
     sbMonocitos: this.sbMonocitos,
     sbEosinofilos: this.sbEosinofilos,
     sbBasofilos: this.sbBasofilos,
     sbBaciliformes: this.sbBaciliformes
      // address: this.addressFormControl
    });

    getErrorMessage(campo: string) {

    //  if (campo === 'examen'){
    //      return this.examen.hasError('required') ? 'Debes Seleccionar Exámen' : '';
    //  }

      if (campo === 'srHematocrito'){
        return this.srHematocrito.hasError('required') ? 'Debes Ingresar Hematocrito' : '';
      }

      if (campo === 'srEritrocitos'){
        return this.srEritrocitos.hasError('required') ? 'Debes Ingresar Eritrocitos' : '';
      }






      return '';
    }


  ngOnInit() {
    this.cargaExamen();
  }

  cargaExamen(){
    this.servicioService
      .getDataExamen()
      .subscribe(res => {
        console.log('rescata examen todo: ', res['data']);
        this.datoExamen = res['data'];
      },
      // console.log('yo:', res as PerfilI[]),
      error => {
        console.log('error carga:', error);
        Swal.fire(
          'ERROR INESPERADO',
          error,
         'info'
       );
      }
    );
  }

  async enviar() {}

  /*
  async enviar() {
     await this.agregaMatrizIngreso();

    this.dato = {

      nombreFormato: 'Formato 1',
      formato: [{
        nombreTitulo: this.agregaFormato1.get('c1Titulo').value,
        cuadros: [{
          titulo: this.agregaFormato1.get('c1SubTitulo').value,
          titulos1: {
            campo1: this.agregaFormato1.get('c1L1Campo1').value,
            campo2: this.agregaFormato1.get('c1L1Campo2').value,
            campo3: this.agregaFormato1.get('c1L1Campo3').value,
            campo4: this.agregaFormato1.get('c1L1Campo4').value,
          },
          titulos2: {
            campo1: this.agregaFormato1.get('c1L2Campo1').value,
            campo2: this.agregaFormato1.get('c1L2Campo2').value,
            campo3: this.agregaFormato1.get('c1L2Campo3').value,
            campo4: this.agregaFormato1.get('c1L2Campo4').value,
            campo5: this.agregaFormato1.get('c1L2Campo5').value,
          },
          datos: this.datoIngreso,
        }],
      }],
      usuarioCrea_id: this.usuario,
      usuarioModifica_id: this.usuario
    };
    console.log('agrega 1:', this.dato);

    this.formato1Service.postDataFormato1(this.dato)
    .subscribe(
      dato => {
        console.log('respuesta:', dato);
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
*/

  sbCambioFormula(){

    this.sbNeutrofilosFormula = (this.agregaFormato1.get('sbLeucocitos2').value*this.agregaFormato1.get('Neutrófilos').value)/100;
    this.sbLinfocitosFormula = (this.agregaFormato1.get('sbLeucocitos2').value*this.agregaFormato1.get('Linfocitos').value)/100;
    this.sbMonocitosFormula = (this.agregaFormato1.get('sbLeucocitos2').value*this.agregaFormato1.get('Monocitos').value)/100;
    this.sbEosinofilosFormula = (this.agregaFormato1.get('sbLeucocitos2').value*this.agregaFormato1.get('Eosinofilos').value)/100;
    this.sbBasofilosFormula = (this.agregaFormato1.get('sbLeucocitos2').value*this.agregaFormato1.get('Basofilos').value)/100;
    this.sbBaciliformesFormula = (this.agregaFormato1.get('sbLeucocitos2').value*this.agregaFormato1.get('Baciliformes').value)/100;
  }





}

