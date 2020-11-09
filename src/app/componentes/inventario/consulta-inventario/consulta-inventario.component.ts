import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-consulta-inventario',
  templateUrl: './consulta-inventario.component.html',
  styleUrls: ['./consulta-inventario.component.css']
})
export class ConsultaInventarioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConsultaInventarioComponent>,
    @Inject(MAT_DIALOG_DATA) public dato: any
  //  , public servNoticia: NoticiasAdminService
    ) { }

  ngOnInit() {
  }

  cerrarClick(): void {
    this.dialogRef.close();
  }
}
