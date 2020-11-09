import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// import { NoticiasAdminService } from '../../../servicios/noticias-admin.service';
import {FormControl, Validators, FormGroup} from '@angular/forms';
// import { noticiaInterface } from '../../../Modelos/noticia-interface';
// import {LoginService} from '../../../servicios/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifica-inventario',
  templateUrl: './modifica-inventario.component.html',
  styleUrls: ['./modifica-inventario.component.css']
})
export class ModificaInventarioComponent implements OnInit {

  public loading: Boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModificaInventarioComponent>,
    @Inject(MAT_DIALOG_DATA) public dato: any
    // public servNoticia: NoticiasAdminService,
    // public servLogin: LoginService
    ) { }

    public noticiaData;

    _id = new FormControl([Validators.required]);
    codigoInterno = new FormControl('', [Validators.required]);
    codigoExterno = new FormControl('', [Validators.required]);
    nombre = new FormControl('', [Validators.required]);
    descripcion = new FormControl('', [Validators.required]);
//    id_usuario = new FormControl((this.servLogin.getCurrentUsu().id_usuario));

  ngOnInit() {

  }

  submit() {
    // emppty stuff
    }


  cancelarClick(): void {
    this.dialogRef.close();
  }

  public aceptarClick(): void {
    this.loading = true;
   // this.dato.id_usuario = this.id_usuario.value;
    console.log('dato edita:', this.dato);
/*
    this.servNoticia.modifica(this.dato)
    .subscribe(
      data => {data = data, this.loading = false,
      Swal.fire(     // esto lo saque de esta pagina https://github.com/JaredOrtz/SweetAlert2-Angular-6
        'Se actualizaron los datos con Éxito',
        'Click en Boton!',
        'success'
      ),
      this.dialogRef.close(1);
    }
      , (err) => {this.loading = false,
      console.log('error carga:', err);
    }
  );
  */

  }

}
