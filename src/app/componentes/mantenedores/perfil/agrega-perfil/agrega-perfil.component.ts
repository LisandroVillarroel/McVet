import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-agrega-perfil',
  templateUrl: './agrega-perfil.component.html',
  styleUrls: ['./agrega-perfil.component.css']
})
export class AgregaPerfilComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AgregaPerfilComponent>,
    // public servNoticia: NoticiasAdminService
    ) { }

  public datoAgrega: any;

  public loader: boolean = false;
  public loading: boolean=false;

  sigla = new FormControl('', [Validators.required]);
  descripcion = new FormControl('', [Validators.required]);

  agrega: FormGroup = new FormGroup({
    sigla: this.sigla,
    descripcion: this.descripcion
  });

  ngOnInit(): void {
  }

  cancelarClick(): void {
    this.dialogRef.close();
  }

  public aceptarClick(): void {

    this.datoAgrega = {
      sigla: this.agrega.get('sigla').value,
      descripcion: this.agrega.get('descripcion').value
    };

    this.loading = true;
    // this.servNoticia.agrega(this.datoAgrega)
    // .subscribe(
    //  data => {data = data,this.loading=false,
    //    Swal.fire('Se guardaron los datos con Éxito',
    //      'Click en Boton!',
    //      'success'
    //    ),
    //    this.dialogRef.close(1);},
    //  error=>{this.loading=false;console.log('error agrega:',<any>error);this.errorMsg=error.error.error;alert('Error: ' + this.errorMsg)});
    Swal.fire({
      text: 'Hello!',
      icon: 'success'
    });

  }
}
