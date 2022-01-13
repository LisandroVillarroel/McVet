import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { RutService } from 'rut-chileno';

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

  cuadroPrincipal = true;
  cuadro1Linea1 = true;
  cuadro1Linea2 = true;
  cuadro1Linea3 = true;
  cuadro1Linea4 = true;
  cuadro1Linea5 = true;
  cuadro1Linea6 = true;
  cuadro1Linea7 = true;
  cuadro1Linea8 = true;
  cuadro1Linea9 = true;
  cuadro1Linea10 = true;
  cuadro1Linea11 = true;
  cuadro1Linea12 = true;
  cuadro1Linea13 = true;
  cuadro1Linea14 = true;
  cuadro1Linea15 = true;


  constructor(private dialogRef: MatDialogRef<AgregaFormato1Component>,
              @Inject(MAT_DIALOG_DATA) data,
              public servicioService: ExamenService,
              public formato1Service: Formato1Service,
              public rutService: RutService,
              public rutValidator: RutValidator
              ) {
               this.usuario = data.usuario;
    }
  //  examen = new FormControl('', [Validators.required] );
    c1Titulo = new FormControl('',  [Validators.required] );
    c1SubTitulo = new FormControl('',  [Validators.required] );
    c1L1Campo1 = new FormControl('');
    c1L1Campo2 = new FormControl('');
    c1L1Campo3 = new FormControl('');
    c1L1Campo4 = new FormControl('');

    c1L2Campo1 = new FormControl('');
    c1L2Campo2 = new FormControl('');
    c1L2Campo3 = new FormControl('');
    c1L2Campo4 = new FormControl('');
    c1L2Campo5 = new FormControl('');
    //--Cuadro 1 Linea1--
    c1L1Ingreso1 = new FormControl('');
    c1L1Ingreso2 = new FormControl('');
    c1L1Ingreso3 = new FormControl('');
    c1L1Ingreso4 = new FormControl('');
    c1L1Ingreso5 = new FormControl('');

    c1L1IngresoSn1 = new FormControl('No');
    c1L1IngresoSn2 = new FormControl('No');
    c1L1IngresoSn3 = new FormControl('No');
    c1L1IngresoSn4 = new FormControl('No');
    c1L1IngresoSn5 = new FormControl('No');

    //--Cuadro 1 Linea2--
    c1L2Ingreso1 = new FormControl('');
    c1L2Ingreso2 = new FormControl('');
    c1L2Ingreso3 = new FormControl('');
    c1L2Ingreso4 = new FormControl('');
    c1L2Ingreso5 = new FormControl('');

    c1L2IngresoSn1 = new FormControl('No');
    c1L2IngresoSn2 = new FormControl('No');
    c1L2IngresoSn3 = new FormControl('No');
    c1L2IngresoSn4 = new FormControl('No');
    c1L2IngresoSn5 = new FormControl('No');

    //--Cuadro 1 Linea3--
    c1L3Ingreso1 = new FormControl('');
    c1L3Ingreso2 = new FormControl('');
    c1L3Ingreso3 = new FormControl('');
    c1L3Ingreso4 = new FormControl('');
    c1L3Ingreso5 = new FormControl('');

    c1L3IngresoSn1 = new FormControl('No');
    c1L3IngresoSn2 = new FormControl('No');
    c1L3IngresoSn3 = new FormControl('No');
    c1L3IngresoSn4 = new FormControl('No');
    c1L3IngresoSn5 = new FormControl('No');

    //--Cuadro 1 Linea4--
    c1L4Ingreso1 = new FormControl('');
    c1L4Ingreso2 = new FormControl('');
    c1L4Ingreso3 = new FormControl('');
    c1L4Ingreso4 = new FormControl('');
    c1L4Ingreso5 = new FormControl('');

    c1L4IngresoSn1 = new FormControl('No');
    c1L4IngresoSn2 = new FormControl('No');
    c1L4IngresoSn3 = new FormControl('No');
    c1L4IngresoSn4 = new FormControl('No');
    c1L4IngresoSn5 = new FormControl('No');

    //--Cuadro 1 Linea5--
    c1L5Ingreso1 = new FormControl('');
    c1L5Ingreso2 = new FormControl('');
    c1L5Ingreso3 = new FormControl('');
    c1L5Ingreso4 = new FormControl('');
    c1L5Ingreso5 = new FormControl('');

    c1L5IngresoSn1 = new FormControl('No');
    c1L5IngresoSn2 = new FormControl('No');
    c1L5IngresoSn3 = new FormControl('No');
    c1L5IngresoSn4 = new FormControl('No');
    c1L5IngresoSn5 = new FormControl('No');

    //--Cuadro 1 Linea6--
    c1L6Ingreso1 = new FormControl('');
    c1L6Ingreso2 = new FormControl('');
    c1L6Ingreso3 = new FormControl('');
    c1L6Ingreso4 = new FormControl('');
    c1L6Ingreso5 = new FormControl('');

    c1L6IngresoSn1 = new FormControl('No');
    c1L6IngresoSn2 = new FormControl('No');
    c1L6IngresoSn3 = new FormControl('No');
    c1L6IngresoSn4 = new FormControl('No');
    c1L6IngresoSn5 = new FormControl('No');

    //--Cuadro 1 Linea7--
    c1L7Ingreso1 = new FormControl('');
    c1L7Ingreso2 = new FormControl('');
    c1L7Ingreso3 = new FormControl('');
    c1L7Ingreso4 = new FormControl('');
    c1L7Ingreso5 = new FormControl('');

    c1L7IngresoSn1 = new FormControl('No');
    c1L7IngresoSn2 = new FormControl('No');
    c1L7IngresoSn3 = new FormControl('No');
    c1L7IngresoSn4 = new FormControl('No');
    c1L7IngresoSn5 = new FormControl('No');

    //--Cuadro 1 Linea8--
    c1L8Ingreso1 = new FormControl('');
    c1L8Ingreso2 = new FormControl('');
    c1L8Ingreso3 = new FormControl('');
    c1L8Ingreso4 = new FormControl('');
    c1L8Ingreso5 = new FormControl('');

    c1L8IngresoSn1 = new FormControl('No');
    c1L8IngresoSn2 = new FormControl('No');
    c1L8IngresoSn3 = new FormControl('No');
    c1L8IngresoSn4 = new FormControl('No');
    c1L8IngresoSn5 = new FormControl('No');

    //--Cuadro 1 Linea9--
    c1L9Ingreso1 = new FormControl('');
    c1L9Ingreso2 = new FormControl('');
    c1L9Ingreso3 = new FormControl('');
    c1L9Ingreso4 = new FormControl('');
    c1L9Ingreso5 = new FormControl('');

    c1L9IngresoSn1 = new FormControl('No');
    c1L9IngresoSn2 = new FormControl('No');
    c1L9IngresoSn3 = new FormControl('No');
    c1L9IngresoSn4 = new FormControl('No');
    c1L9IngresoSn5 = new FormControl('No');

    //--Cuadro 1 Linea10--
    c1L10Ingreso1 = new FormControl('');
    c1L10Ingreso2 = new FormControl('');
    c1L10Ingreso3 = new FormControl('');
    c1L10Ingreso4 = new FormControl('');
    c1L10Ingreso5 = new FormControl('');

    c1L10IngresoSn1 = new FormControl('No');
    c1L10IngresoSn2 = new FormControl('No');
    c1L10IngresoSn3 = new FormControl('No');
    c1L10IngresoSn4 = new FormControl('No');
    c1L10IngresoSn5 = new FormControl('No');

    //--Cuadro 1 Linea11--
    c1L11Ingreso1 = new FormControl('');
    c1L11Ingreso2 = new FormControl('');
    c1L11Ingreso3 = new FormControl('');
    c1L11Ingreso4 = new FormControl('');
    c1L11Ingreso5 = new FormControl('');

    c1L11IngresoSn1 = new FormControl('No');
    c1L11IngresoSn2 = new FormControl('No');
    c1L11IngresoSn3 = new FormControl('No');
    c1L11IngresoSn4 = new FormControl('No');
    c1L11IngresoSn5 = new FormControl('No');

    //--Cuadro 1 Linea12--
    c1L12Ingreso1 = new FormControl('');
    c1L12Ingreso2 = new FormControl('');
    c1L12Ingreso3 = new FormControl('');
    c1L12Ingreso4 = new FormControl('');
    c1L12Ingreso5 = new FormControl('');

    c1L12IngresoSn1 = new FormControl('No');
    c1L12IngresoSn2 = new FormControl('No');
    c1L12IngresoSn3 = new FormControl('No');
    c1L12IngresoSn4 = new FormControl('No');
    c1L12IngresoSn5 = new FormControl('No');

    //--Cuadro 1 Linea13--
    c1L13Ingreso1 = new FormControl('');
    c1L13Ingreso2 = new FormControl('');
    c1L13Ingreso3 = new FormControl('');
    c1L13Ingreso4 = new FormControl('');
    c1L13Ingreso5 = new FormControl('');

    c1L13IngresoSn1 = new FormControl('No');
    c1L13IngresoSn2 = new FormControl('No');
    c1L13IngresoSn3 = new FormControl('No');
    c1L13IngresoSn4 = new FormControl('No');
    c1L13IngresoSn5 = new FormControl('No');

    //--Cuadro 1 Linea14--
    c1L14Ingreso1 = new FormControl('');
    c1L14Ingreso2 = new FormControl('');
    c1L14Ingreso3 = new FormControl('');
    c1L14Ingreso4 = new FormControl('');
    c1L14Ingreso5 = new FormControl('');

    c1L14IngresoSn1 = new FormControl('No');
    c1L14IngresoSn2 = new FormControl('No');
    c1L14IngresoSn3 = new FormControl('No');
    c1L14IngresoSn4 = new FormControl('No');
    c1L14IngresoSn5 = new FormControl('No');

    //--Cuadro 1 Linea15--
    c1L15Ingreso1 = new FormControl('');
    c1L15Ingreso2 = new FormControl('');
    c1L15Ingreso3 = new FormControl('');
    c1L15Ingreso4 = new FormControl('');
    c1L15Ingreso5 = new FormControl('');

    c1L15IngresoSn1 = new FormControl('No');
    c1L15IngresoSn2 = new FormControl('No');
    c1L15IngresoSn3 = new FormControl('No');
    c1L15IngresoSn4 = new FormControl('No');
    c1L15IngresoSn5 = new FormControl('No');

    agregaFormato1: FormGroup = new FormGroup({
     // examen: this.examen,
      c1Titulo: this.c1Titulo,
      c1SubTitulo: this.c1SubTitulo,
      c1L1Campo1: this.c1L1Campo1,
      c1L1Campo2: this.c1L1Campo2,
      c1L1Campo3: this.c1L1Campo3,
      c1L1Campo4: this.c1L1Campo4,

      c1L2Campo1: this.c1L2Campo1,
      c1L2Campo2: this.c1L2Campo2,
      c1L2Campo3: this.c1L2Campo3,
      c1L2Campo4: this.c1L2Campo4,
      c1L2Campo5: this.c1L2Campo5,

      //--Cuadro 1 Linea1--
      c1L1Ingreso1: this.c1L1Ingreso1,
      c1L1Ingreso2: this.c1L1Ingreso2,
      c1L1Ingreso3: this.c1L1Ingreso3,
      c1L1Ingreso4: this.c1L1Ingreso4,
      c1L1Ingreso5: this.c1L1Ingreso5,

      c1L1IngresoSn1: this.c1L1IngresoSn1,
      c1L1IngresoSn2: this.c1L1IngresoSn2,
      c1L1IngresoSn3: this.c1L1IngresoSn3,
      c1L1IngresoSn4: this.c1L1IngresoSn4,
      c1L1IngresoSn5: this.c1L1IngresoSn5,

       //--Cuadro 1 Linea2--
       c1L2Ingreso1: this.c1L2Ingreso1,
       c1L2Ingreso2: this.c1L2Ingreso2,
       c1L2Ingreso3: this.c1L2Ingreso3,
       c1L2Ingreso4: this.c1L2Ingreso4,
       c1L2Ingreso5: this.c1L2Ingreso5,

       c1L2IngresoSn1: this.c1L2IngresoSn1,
       c1L2IngresoSn2: this.c1L2IngresoSn2,
       c1L2IngresoSn3: this.c1L2IngresoSn3,
       c1L2IngresoSn4: this.c1L2IngresoSn4,
       c1L2IngresoSn5: this.c1L2IngresoSn5,

      //--Cuadro 1 Linea3--
      c1L3Ingreso1: this.c1L3Ingreso1,
      c1L3Ingreso2: this.c1L3Ingreso2,
      c1L3Ingreso3: this.c1L3Ingreso3,
      c1L3Ingreso4: this.c1L3Ingreso4,
      c1L3Ingreso5: this.c1L3Ingreso5,

      c1L3IngresoSn1: this.c1L3IngresoSn1,
      c1L3IngresoSn2: this.c1L3IngresoSn2,
      c1L3IngresoSn3: this.c1L3IngresoSn3,
      c1L3IngresoSn4: this.c1L3IngresoSn4,
      c1L3IngresoSn5: this.c1L3IngresoSn5,

       //--Cuadro 1 Linea4--
      c1L4Ingreso1: this.c1L4Ingreso1,
      c1L4Ingreso2: this.c1L4Ingreso2,
      c1L4Ingreso3: this.c1L4Ingreso3,
      c1L4Ingreso4: this.c1L4Ingreso4,
      c1L4Ingreso5: this.c1L4Ingreso5,

      c1L4IngresoSn1: this.c1L4IngresoSn1,
      c1L4IngresoSn2: this.c1L4IngresoSn2,
      c1L4IngresoSn3: this.c1L4IngresoSn3,
      c1L4IngresoSn4: this.c1L4IngresoSn4,
      c1L4IngresoSn5: this.c1L4IngresoSn5,

      //--Cuadro 1 Linea5--
      c1L5Ingreso1: this.c1L5Ingreso1,
      c1L5Ingreso2: this.c1L5Ingreso2,
      c1L5Ingreso3: this.c1L5Ingreso3,
      c1L5Ingreso4: this.c1L5Ingreso4,
      c1L5Ingreso5: this.c1L5Ingreso5,

      c1L5IngresoSn1: this.c1L5IngresoSn1,
      c1L5IngresoSn2: this.c1L5IngresoSn2,
      c1L5IngresoSn3: this.c1L5IngresoSn3,
      c1L5IngresoSn4: this.c1L5IngresoSn4,
      c1L5IngresoSn5: this.c1L5IngresoSn5,

      //--Cuadro 1 Linea6--
      c1L6Ingreso1: this.c1L6Ingreso1,
      c1L6Ingreso2: this.c1L6Ingreso2,
      c1L6Ingreso3: this.c1L6Ingreso3,
      c1L6Ingreso4: this.c1L6Ingreso4,
      c1L6Ingreso5: this.c1L6Ingreso5,

      c1L6IngresoSn1: this.c1L6IngresoSn1,
      c1L6IngresoSn2: this.c1L6IngresoSn2,
      c1L6IngresoSn3: this.c1L6IngresoSn3,
      c1L6IngresoSn4: this.c1L6IngresoSn4,
      c1L6IngresoSn5: this.c1L6IngresoSn5,

      //--Cuadro 1 Linea7--
      c1L7Ingreso1: this.c1L7Ingreso1,
      c1L7Ingreso2: this.c1L7Ingreso2,
      c1L7Ingreso3: this.c1L7Ingreso3,
      c1L7Ingreso4: this.c1L7Ingreso4,
      c1L7Ingreso5: this.c1L7Ingreso5,

      c1L7IngresoSn1: this.c1L7IngresoSn1,
      c1L7IngresoSn2: this.c1L7IngresoSn2,
      c1L7IngresoSn3: this.c1L7IngresoSn3,
      c1L7IngresoSn4: this.c1L7IngresoSn4,
      c1L7IngresoSn5: this.c1L7IngresoSn5,

      //--Cuadro 1 Linea8--
      c1L8Ingreso1: this.c1L8Ingreso1,
      c1L8Ingreso2: this.c1L8Ingreso2,
      c1L8Ingreso3: this.c1L8Ingreso3,
      c1L8Ingreso4: this.c1L8Ingreso4,
      c1L8Ingreso5: this.c1L8Ingreso5,

      c1L8IngresoSn1: this.c1L8IngresoSn1,
      c1L8IngresoSn2: this.c1L8IngresoSn2,
      c1L8IngresoSn3: this.c1L8IngresoSn3,
      c1L8IngresoSn4: this.c1L8IngresoSn4,
      c1L8IngresoSn5: this.c1L8IngresoSn5,

      //--Cuadro 1 Linea9--
      c1L9Ingreso1: this.c1L9Ingreso1,
      c1L9Ingreso2: this.c1L9Ingreso2,
      c1L9Ingreso3: this.c1L9Ingreso3,
      c1L9Ingreso4: this.c1L9Ingreso4,
      c1L9Ingreso5: this.c1L9Ingreso5,

      c1L9IngresoSn1: this.c1L9IngresoSn1,
      c1L9IngresoSn2: this.c1L9IngresoSn2,
      c1L9IngresoSn3: this.c1L9IngresoSn3,
      c1L9IngresoSn4: this.c1L9IngresoSn4,
      c1L9IngresoSn5: this.c1L9IngresoSn5,

      //--Cuadro 1 Linea10--
      c1L10Ingreso1: this.c1L10Ingreso1,
      c1L10Ingreso2: this.c1L10Ingreso2,
      c1L10Ingreso3: this.c1L10Ingreso3,
      c1L10Ingreso4: this.c1L10Ingreso4,
      c1L10Ingreso5: this.c1L10Ingreso5,

      c1L10IngresoSn1: this.c1L10IngresoSn1,
      c1L10IngresoSn2: this.c1L10IngresoSn2,
      c1L10IngresoSn3: this.c1L10IngresoSn3,
      c1L10IngresoSn4: this.c1L10IngresoSn4,
      c1L10IngresoSn5: this.c1L10IngresoSn5,

      //--Cuadro 1 Linea11--
      c1L11Ingreso1: this.c1L11Ingreso1,
      c1L11Ingreso2: this.c1L11Ingreso2,
      c1L11Ingreso3: this.c1L11Ingreso3,
      c1L11Ingreso4: this.c1L11Ingreso4,
      c1L11Ingreso5: this.c1L11Ingreso5,

      c1L11IngresoSn1: this.c1L11IngresoSn1,
      c1L11IngresoSn2: this.c1L11IngresoSn2,
      c1L11IngresoSn3: this.c1L11IngresoSn3,
      c1L11IngresoSn4: this.c1L11IngresoSn4,
      c1L11IngresoSn5: this.c1L11IngresoSn5,

      //--Cuadro 1 Linea12--
      c1L12Ingreso1: this.c1L12Ingreso1,
      c1L12Ingreso2: this.c1L12Ingreso2,
      c1L12Ingreso3: this.c1L12Ingreso3,
      c1L12Ingreso4: this.c1L12Ingreso4,
      c1L12Ingreso5: this.c1L12Ingreso5,

      c1L12IngresoSn1: this.c1L12IngresoSn1,
      c1L12IngresoSn2: this.c1L12IngresoSn2,
      c1L12IngresoSn3: this.c1L12IngresoSn3,
      c1L12IngresoSn4: this.c1L12IngresoSn4,
      c1L12IngresoSn5: this.c1L12IngresoSn5,

      //--Cuadro 1 Linea13--
      c1L13Ingreso1: this.c1L13Ingreso1,
      c1L13Ingreso2: this.c1L13Ingreso2,
      c1L13Ingreso3: this.c1L13Ingreso3,
      c1L13Ingreso4: this.c1L13Ingreso4,
      c1L13Ingreso5: this.c1L13Ingreso5,

      c1L13IngresoSn1: this.c1L13IngresoSn1,
      c1L13IngresoSn2: this.c1L13IngresoSn2,
      c1L13IngresoSn3: this.c1L13IngresoSn3,
      c1L13IngresoSn4: this.c1L13IngresoSn4,
      c1L13IngresoSn5: this.c1L13IngresoSn5,

      //--Cuadro 1 Linea14--
      c1L14Ingreso1: this.c1L14Ingreso1,
      c1L14Ingreso2: this.c1L14Ingreso2,
      c1L14Ingreso3: this.c1L14Ingreso3,
      c1L14Ingreso4: this.c1L14Ingreso4,
      c1L14Ingreso5: this.c1L14Ingreso5,

      c1L14IngresoSn1: this.c1L14IngresoSn1,
      c1L14IngresoSn2: this.c1L14IngresoSn2,
      c1L14IngresoSn3: this.c1L14IngresoSn3,
      c1L14IngresoSn4: this.c1L14IngresoSn4,
      c1L14IngresoSn5: this.c1L14IngresoSn5,

      //--Cuadro 1 Linea15--
      c1L15Ingreso1: this.c1L15Ingreso1,
      c1L15Ingreso2: this.c1L15Ingreso2,
      c1L15Ingreso3: this.c1L15Ingreso3,
      c1L15Ingreso4: this.c1L15Ingreso4,
      c1L15Ingreso5: this.c1L15Ingreso5,

      c1L15IngresoSn1: this.c1L15IngresoSn1,
      c1L15IngresoSn2: this.c1L15IngresoSn2,
      c1L15IngresoSn3: this.c1L15IngresoSn3,
      c1L15IngresoSn4: this.c1L15IngresoSn4,
      c1L15IngresoSn5: this.c1L15IngresoSn5,


      // address: this.addressFormControl
    });

    getErrorMessage(campo: string) {

    //  if (campo === 'examen'){
    //      return this.examen.hasError('required') ? 'Debes Seleccionar Exámen' : '';
    //  }

      if (campo === 'c1Titulo'){
        return this.c1Titulo.hasError('required') ? 'Debes Ingresar Título' : '';
      }

      if (campo === 'c1SubTitulo'){
        return this.c1SubTitulo.hasError('required') ? 'Debes Ingresar Sub-Título' : '';
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


agregaMatrizIngreso(){


if (this.cuadro1Linea1 == false){
  console.log('paso 1 antes:',this.datoIngreso);
  this.datoIngreso.push({campo1: this.agregaFormato1.get('c1L1Ingreso1').value, ingresoSN1: this.agregaFormato1.get('c1L1IngresoSn1').value,
  campo2: this.agregaFormato1.get('c1L1Ingreso2').value, ingresoSN2: this.agregaFormato1.get('c1L1IngresoSn2').value,
  campo3: this.agregaFormato1.get('c1L1Ingreso3').value, ingresoSN3: this.agregaFormato1.get('c1L1IngresoSn3').value,
  campo4: this.agregaFormato1.get('c1L1Ingreso4').value, ingresoSN4: this.agregaFormato1.get('c1L1IngresoSn4').value,
  campo5: this.agregaFormato1.get('c1L1Ingreso5').value, ingresoSN5: this.agregaFormato1.get('c1L1IngresoSn5').value
  });

}
//--Cuadro 1 Linea2--
if (this.cuadro1Linea2 == false){
  console.log('paso2')
  this.datoIngreso.push({campo1: this.agregaFormato1.get('c1L2Ingreso1').value, ingresoSN1: this.agregaFormato1.get('c1L2IngresoSn1').value,
  campo2: this.agregaFormato1.get('c1L2Ingreso2').value, ingresoSN2: this.agregaFormato1.get('c1L2IngresoSn2').value,
  campo3: this.agregaFormato1.get('c1L2Ingreso3').value, ingresoSN3: this.agregaFormato1.get('c1L2IngresoSn3').value,
  campo4: this.agregaFormato1.get('c1L2Ingreso4').value, ingresoSN4: this.agregaFormato1.get('c1L2IngresoSn4').value,
  campo5: this.agregaFormato1.get('c1L2Ingreso5').value, ingresoSN5: this.agregaFormato1.get('c1L2IngresoSn5').value
  })
}


//--Cuadro 1 Linea3--
if (this.cuadro1Linea3 == false){
  this.datoIngreso.push({campo1: this.agregaFormato1.get('c1L3Ingreso1').value, ingresoSN1: this.agregaFormato1.get('c1L3IngresoSn1').value,
  campo2: this.agregaFormato1.get('c1L3Ingreso2').value, ingresoSN2: this.agregaFormato1.get('c1L3IngresoSn2').value,
  campo3: this.agregaFormato1.get('c1L3Ingreso3').value, ingresoSN3: this.agregaFormato1.get('c1L3IngresoSn3').value,
  campo4: this.agregaFormato1.get('c1L3Ingreso4').value, ingresoSN4: this.agregaFormato1.get('c1L3IngresoSn4').value,
  campo5: this.agregaFormato1.get('c1L3Ingreso5').value, ingresoSN5: this.agregaFormato1.get('c1L3IngresoSn5').value
  })
}

//--Cuadro 1 Linea4--
if (this.cuadro1Linea4 == false){
  this.datoIngreso.push({campo1: this.agregaFormato1.get('c1L4Ingreso1').value, ingresoSN1: this.agregaFormato1.get('c1L4IngresoSn1').value,
  campo2: this.agregaFormato1.get('c1L4Ingreso2').value, ingresoSN2: this.agregaFormato1.get('c1L4IngresoSn2').value,
  campo3: this.agregaFormato1.get('c1L4Ingreso3').value, ingresoSN3: this.agregaFormato1.get('c1L4IngresoSn3').value,
  campo4: this.agregaFormato1.get('c1L4Ingreso4').value, ingresoSN4: this.agregaFormato1.get('c1L4IngresoSn4').value,
  campo5: this.agregaFormato1.get('c1L4Ingreso5').value,  ingresoSN5: this.agregaFormato1.get('c1L4IngresoSn5').value
})
}

//--Cuadro 1 Linea5--
if (this.cuadro1Linea5 == false){
  this.datoIngreso.push({campo1: this.agregaFormato1.get('c1L5Ingreso1').value, ingresoSN1: this.agregaFormato1.get('c1L5IngresoSn1').value,
  campo2: this.agregaFormato1.get('c1L5Ingreso2').value, ingresoSN2: this.agregaFormato1.get('c1L5IngresoSn2').value,
  campo3: this.agregaFormato1.get('c1L5Ingreso3').value, ingresoSN3: this.agregaFormato1.get('c1L5IngresoSn3').value,
  campo4: this.agregaFormato1.get('c1L5Ingreso4').value, ingresoSN4: this.agregaFormato1.get('c1L5IngresoSn4').value,
  campo5: this.agregaFormato1.get('c1L5Ingreso5').value, ingresoSN5: this.agregaFormato1.get('c1L5IngresoSn5').value
  })
}

//--Cuadro 1 Linea6--
if (this.cuadro1Linea6 == false){
  this.datoIngreso.push({campo1: this.agregaFormato1.get('c1L6Ingreso1').value, ingresoSN1: this.agregaFormato1.get('c1L6IngresoSn1').value,
  campo2: this.agregaFormato1.get('c1L6Ingreso2').value, ingresoSN2: this.agregaFormato1.get('c1L6IngresoSn2').value,
  campo3: this.agregaFormato1.get('c1L6Ingreso3').value, ingresoSN3: this.agregaFormato1.get('c1L6IngresoSn3').value,
  campo4: this.agregaFormato1.get('c1L6Ingreso4').value, ingresoSN4: this.agregaFormato1.get('c1L6IngresoSn4').value,
  campo5: this.agregaFormato1.get('c1L6Ingreso5').value, ingresoSN5: this.agregaFormato1.get('c1L6IngresoSn5').value
  })
}

//--Cuadro 1 Linea7--
if (this.cuadro1Linea7 == false){
  this.datoIngreso.push({campo1: this.agregaFormato1.get('c1L7Ingreso1').value, ingresoSN1: this.agregaFormato1.get('c1L7IngresoSn1').value,
  campo2: this.agregaFormato1.get('c1L7Ingreso2').value, ingresoSN2: this.agregaFormato1.get('c1L7IngresoSn2').value,
  campo3: this.agregaFormato1.get('c1L7Ingreso3').value, ingresoSN3: this.agregaFormato1.get('c1L7IngresoSn3').value,
  campo4: this.agregaFormato1.get('c1L7Ingreso4').value, ingresoSN4: this.agregaFormato1.get('c1L7IngresoSn4').value,
  campo5: this.agregaFormato1.get('c1L7Ingreso5').value, ingresoSN5: this.agregaFormato1.get('c1L7IngresoSn5').value
  })
}

//--Cuadro 1 Linea8--
if (this.cuadro1Linea8 == false){
  this.datoIngreso.push({campo1: this.agregaFormato1.get('c1L8Ingreso1').value, ingresoSN1: this.agregaFormato1.get('c1L8IngresoSn1').value,
  campo2: this.agregaFormato1.get('c1L8Ingreso2').value, ingresoSN2: this.agregaFormato1.get('c1L8IngresoSn2').value,
  campo3: this.agregaFormato1.get('c1L8Ingreso3').value, ingresoSN3: this.agregaFormato1.get('c1L8IngresoSn3').value,
  campo4: this.agregaFormato1.get('c1L8Ingreso4').value, ingresoSN4: this.agregaFormato1.get('c1L8IngresoSn4').value,
  campo5: this.agregaFormato1.get('c1L8Ingreso5').value, ingresoSN5: this.agregaFormato1.get('c1L8IngresoSn5').value
  })
}

//--Cuadro 1 Linea9--
if (this.cuadro1Linea9 == false){
  this.datoIngreso.push({campo1: this.agregaFormato1.get('c1L9Ingreso1').value, ingresoSN1: this.agregaFormato1.get('c1L9IngresoSn1').value,
  campo2: this.agregaFormato1.get('c1L9Ingreso2').value, ingresoSN2: this.agregaFormato1.get('c1L9IngresoSn2').value,
  campo3: this.agregaFormato1.get('c1L9Ingreso3').value, ingresoSN3: this.agregaFormato1.get('c1L9IngresoSn3').value,
  campo4: this.agregaFormato1.get('c1L9Ingreso4').value, ingresoSN4: this.agregaFormato1.get('c1L9IngresoSn4').value,
  campo5: this.agregaFormato1.get('c1L9Ingreso5').value, ingresoSN5: this.agregaFormato1.get('c1L9IngresoSn5').value
  })
}

//--Cuadro 1 Linea10--
if (this.cuadro1Linea10 == false){
  this.datoIngreso.push({campo1: this.agregaFormato1.get('c1L10Ingreso1').value, ingresoSN1: this.agregaFormato1.get('c1L10IngresoSn1').value,
  campo2: this.agregaFormato1.get('c1L10Ingreso2').value, ingresoSN2: this.agregaFormato1.get('c1L10IngresoSn2').value,
  campo3: this.agregaFormato1.get('c1L10Ingreso3').value, ingresoSN3: this.agregaFormato1.get('c1L10IngresoSn3').value,
  campo4: this.agregaFormato1.get('c1L10Ingreso4').value, ingresoSN4: this.agregaFormato1.get('c1L10IngresoSn4').value,
  campo5: this.agregaFormato1.get('c1L10Ingreso5').value, ingresoSN5: this.agregaFormato1.get('c1L10IngresoSn5').value
  })
}

//--Cuadro 1 Linea11--
if (this.cuadro1Linea11 == false){
  this.datoIngreso.push({campo1: this.agregaFormato1.get('c1L11Ingreso1').value, ingresoSN1: this.agregaFormato1.get('c1L11IngresoSn1').value,
    campo2: this.agregaFormato1.get('c1L11Ingreso2').value, ingresoSN2: this.agregaFormato1.get('c1L11IngresoSn2').value,
    campo3: this.agregaFormato1.get('c1L11Ingreso3').value, ingresoSN3: this.agregaFormato1.get('c1L11IngresoSn3').value,
    campo4: this.agregaFormato1.get('c1L11Ingreso4').value, ingresoSN4: this.agregaFormato1.get('c1L11IngresoSn4').value,
    campo5: this.agregaFormato1.get('c1L11Ingreso5').value, ingresoSN5: this.agregaFormato1.get('c1L11IngresoSn5').value
  })
}

//--Cuadro 1 Linea12--
if (this.cuadro1Linea12 == false){
  this.datoIngreso.push({campo1: this.agregaFormato1.get('c1L12Ingreso1').value, ingresoSN1: this.agregaFormato1.get('c1L12IngresoSn1').value,
    campo2: this.agregaFormato1.get('c1L12Ingreso2').value, ingresoSN2: this.agregaFormato1.get('c1L12IngresoSn2').value,
    campo3: this.agregaFormato1.get('c1L12Ingreso3').value, ingresoSN3: this.agregaFormato1.get('c1L12IngresoSn3').value,
    campo4: this.agregaFormato1.get('c1L12Ingreso4').value, ingresoSN4: this.agregaFormato1.get('c1L12IngresoSn4').value,
    campo5: this.agregaFormato1.get('c1L12Ingreso5').value, ingresoSN5: this.agregaFormato1.get('c1L12IngresoSn5').value
  })
}

//--Cuadro 1 Linea13--
if (this.cuadro1Linea13 == false){
  this.datoIngreso.push({campo1: this.agregaFormato1.get('c1L13Ingreso1').value, ingresoSN1: this.agregaFormato1.get('c1L13IngresoSn1').value,
    campo2: this.agregaFormato1.get('c1L13Ingreso2').value, ingresoSN2: this.agregaFormato1.get('c1L13IngresoSn2').value,
    campo3: this.agregaFormato1.get('c1L13Ingreso3').value, ingresoSN3: this.agregaFormato1.get('c1L13IngresoSn3').value,
    campo4: this.agregaFormato1.get('c1L13Ingreso4').value, ingresoSN4: this.agregaFormato1.get('c1L13IngresoSn4').value,
    campo5: this.agregaFormato1.get('c1L13Ingreso5').value, ingresoSN5: this.agregaFormato1.get('c1L13IngresoSn5').value
  })
}

//--Cuadro 1 Linea14--

if (this.cuadro1Linea14 == false){
  this.datoIngreso.push({campo1: this.agregaFormato1.get('c1L14Ingreso1').value, ingresoSN1: this.agregaFormato1.get('c1L14IngresoSn1').value,
    campo2: this.agregaFormato1.get('c1L14Ingreso2').value, ingresoSN2: this.agregaFormato1.get('c1L14IngresoSn2').value,
    campo3: this.agregaFormato1.get('c1L14Ingreso3').value, ingresoSN3: this.agregaFormato1.get('c1L14IngresoSn3').value,
    campo4: this.agregaFormato1.get('c1L14Ingreso4').value, ingresoSN4: this.agregaFormato1.get('c1L14IngresoSn4').value,
    campo5: this.agregaFormato1.get('c1L14Ingreso5').value, ingresoSN5: this.agregaFormato1.get('c1L14IngresoSn5').value
  })
}
//--Cuadro 1 Linea15--
if (this.cuadro1Linea15 == false){
  this.datoIngreso.push({campo1: this.agregaFormato1.get('c1L15Ingreso1').value, ingresoSN1: this.agregaFormato1.get('c1L15IngresoSn1').value,
    campo2: this.agregaFormato1.get('c1L15Ingreso2').value, ingresoSN2: this.agregaFormato1.get('c1L15IngresoSn2').value,
    campo3: this.agregaFormato1.get('c1L15Ingreso3').value, ingresoSN3: this.agregaFormato1.get('c1L15IngresoSn3').value,
    campo4: this.agregaFormato1.get('c1L15Ingreso4').value, ingresoSN4: this.agregaFormato1.get('c1L15IngresoSn4').value,
    campo5: this.agregaFormato1.get('c1L15Ingreso5').value, ingresoSN5: this.agregaFormato1.get('c1L15IngresoSn5').value
  })
}
console.log('paso 1 despues:',this.datoIngreso);
return true;
  }

  seleccionaExamen(examen){
    console.log('tipo carga: ', examen);
    this.cuadroPrincipal = false;
 //   this.cargaBono(tipoCarga);

  }

  agregaNuevoCuadro1(){

      if (this.cuadro1Linea1 == true){
        this.cuadro1Linea1 = false;
      }else if (this.cuadro1Linea2 == true){
        this.cuadro1Linea2 = false;
      }else if (this.cuadro1Linea3 == true){
        this.cuadro1Linea3 = false;
      }else if (this.cuadro1Linea4 == true){
        this.cuadro1Linea4 = false;
      }else if (this.cuadro1Linea5 == true){
        this.cuadro1Linea5 = false;
      }else if (this.cuadro1Linea6 == true){
        this.cuadro1Linea6 = false;
      }else if (this.cuadro1Linea7 == true){
        this.cuadro1Linea7 = false;
      }else if (this.cuadro1Linea8 == true){
        this.cuadro1Linea8 = false;
      }else if (this.cuadro1Linea9 == true){
        this.cuadro1Linea9 = false;
      }else if (this.cuadro1Linea10 == true){
        this.cuadro1Linea10 = false;
      }else if (this.cuadro1Linea11 == true){
        this.cuadro1Linea11 = false;
      }else if (this.cuadro1Linea12 == true){
        this.cuadro1Linea12 = false;
      }else if (this.cuadro1Linea13 == true){
        this.cuadro1Linea13 = false;
      }else if (this.cuadro1Linea14 == true){
        this.cuadro1Linea14 = false;
      }else if (this.cuadro1Linea15 == true){
        this.cuadro1Linea15 = false;
      }

  }


  eliminaCuadro1(cuadro1Linea1_P){


      if (cuadro1Linea1_P=="cuadro1Linea1"){
        this.cuadro1Linea1 = true;
      }

      if (cuadro1Linea1_P=='cuadro1Linea1'){
        this.cuadro1Linea1 = true;
      }else if (cuadro1Linea1_P=='cuadro1Linea2'){
        this.cuadro1Linea2 = true;
      }else if (cuadro1Linea1_P=='cuadro1Linea3'){
        this.cuadro1Linea3 = true;
      }else if (cuadro1Linea1_P=='cuadro1Linea4'){
        this.cuadro1Linea4 = true;
      }else if (cuadro1Linea1_P=='cuadro1Linea5'){
        this.cuadro1Linea5 = true;
      }else if (cuadro1Linea1_P=='cuadro1Linea6'){
        this.cuadro1Linea6 = true;
      }else if (cuadro1Linea1_P=='cuadro1Linea7'){
        this.cuadro1Linea7 = true;
      }else if (cuadro1Linea1_P=='cuadro1Linea8'){
        this.cuadro1Linea8 = true;
      }else if (cuadro1Linea1_P=='cuadro1Linea9'){
        this.cuadro1Linea9 = true;
      }else if (cuadro1Linea1_P=='cuadro1Linea10'){
        this.cuadro1Linea10 = true;
      }else if (cuadro1Linea1_P=='cuadro1Linea11'){
        this.cuadro1Linea11 = true;
      }else if (cuadro1Linea1_P=='cuadro1Linea12'){
        this.cuadro1Linea12 = true;
      }else if (cuadro1Linea1_P=='cuadro1Linea13'){
        this.cuadro1Linea13 = true;
      }else if (cuadro1Linea1_P=='cuadro1Linea14'){
        this.cuadro1Linea14 = true;
      }else if (cuadro1Linea1_P=='cuadro1Linea15'){
        this.cuadro1Linea15 = true;
      }
  }
}

