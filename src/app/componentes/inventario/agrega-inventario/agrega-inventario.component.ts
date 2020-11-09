import {Component, OnInit, Inject} from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agrega-inventario',
  templateUrl: './agrega-inventario.component.html',
  styleUrls: ['./agrega-inventario.component.css']
})
export class AgregaInventarioComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<AgregaInventarioComponent>,
    @Inject(MAT_DIALOG_DATA) public dato: any
    // public servNoticia: NoticiasAdminService,
    // public servLogin: LoginService
    ) {}

  public datoAgrega: any;
  public loading: Boolean = false;

  public errorMsg = '';

  cod_tiponoticia = new FormControl([Validators.required]);
  titulo = new FormControl('', [Validators.required]);
  descripcion_noticia = new FormControl('', [Validators.required]);
  orden = new FormControl('', [Validators.required]);


  agrega: FormGroup = new FormGroup({
    cod_tiponoticia: this.cod_tiponoticia,
    titulo: this.titulo,
    descripcion_noticia: this.descripcion_noticia,
    orden: this.orden

  });

  ngOnInit() {

  }

cancelarClick(): void {
  this.dialogRef.close();
}

public aceptarClick(): void {

  this.datoAgrega = {
    cod_tiponoticia: this.agrega.get('cod_tiponoticia').value,
    titulo: this.agrega.get('titulo').value,
    descripcion_noticia: this.agrega.get('descripcion_noticia').value,
    orden: this.agrega.get('orden').value
   // id_usuario: (this.servLogin.getCurrentUsu().id_usuario),
};


//  console.log('dato:',this.datoAgrega);
/*
  this.loading = true;
  this.servNoticia.agrega(this.datoAgrega)
  .subscribe(
    data => {data = data, this.loading = false,
      Swal.fire(     // esto lo saque de esta pagina https://github.com/JaredOrtz/SweetAlert2-Angular-6
        'Se guardaron los datos con Éxito',
        'Click en Boton!',
        'success'
      ),
      this.dialogRef.close(1);
    },

    error => {
      this.loading = false;
      console.log('error agrega:', <any>error);
      this.errorMsg = error.error.error;
      alert('Error: ' + this.errorMsg);
  });
*/
}

}
