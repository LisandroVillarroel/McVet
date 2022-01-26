
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IRaza } from '@app/modelo/raza-interface';
import { RazaService } from '@app/servicios/raza.service';


@Component({
  selector: 'app-consulta-raza',
  templateUrl: './consulta-raza.component.html',
  styleUrls: ['./consulta-raza.component.css']
})
export class ConsultaRazaComponent implements OnInit {


  datoPar: IRaza;

  constructor(private dialogRef: MatDialogRef<ConsultaRazaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              ) {
                this.datoPar = data;
              }

  ngOnInit() {
  }

  cerrar() {
    this.dialogRef.close();
  }

}
