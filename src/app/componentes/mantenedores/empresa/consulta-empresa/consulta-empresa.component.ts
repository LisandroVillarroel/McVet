import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { EmpresaService } from './../../../../servicios/empresa.service';
import { EmpresaI } from './../../../../modelo/empresa-interface';

@Component({
  selector: 'app-consulta-empresa',
  templateUrl: './consulta-empresa.component.html',
  styleUrls: ['./consulta-empresa.component.css']
})
export class ConsultaEmpresaComponent implements OnInit {

  datoEmpresaPar: EmpresaI;
  datoEmpresa: EmpresaI;

  constructor(private dialogRef: MatDialogRef<ConsultaEmpresaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public servEmpresa: EmpresaService
              ) {
                this.datoEmpresaPar = data;
              }

  ngOnInit() {
  }

  cerrar() {
    this.dialogRef.close();
  }

}
