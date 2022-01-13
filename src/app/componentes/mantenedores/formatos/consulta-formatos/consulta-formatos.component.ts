import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFormatos } from '@app/modelo/formatos-interface';
import { FormatosService } from '@app/servicios/formatos.service';

@Component({
  selector: 'app-consulta-formatos',
  templateUrl: './consulta-formatos.component.html',
  styleUrls: ['./consulta-formatos.component.css']
})
export class ConsultaFormatosComponent implements OnInit {

  datoFormatosPar: IFormatos;
  datoFormatos: IFormatos;

  constructor(private dialogRef: MatDialogRef<ConsultaFormatosComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public servFormatos: FormatosService
              ) {
                this.datoFormatosPar = data;
              }

  ngOnInit() {
  }

  cerrar() {
    this.dialogRef.close();
  }

}
