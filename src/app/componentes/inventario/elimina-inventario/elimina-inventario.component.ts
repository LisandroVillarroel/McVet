import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { NoticiasAdminService } from '../../../servicios/noticias-admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-elimina-inventario',
  templateUrl: './elimina-inventario.component.html',
  styleUrls: ['./elimina-inventario.component.css']
})
export class EliminaInventarioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EliminaInventarioComponent>,
    @Inject(MAT_DIALOG_DATA) public dato: any
    // , public servNoticia: NoticiasAdminService
    ) { }

  public loading: Boolean = false;

  public front_error: string = null;

  ngOnInit() {
  }

  cancelarClick(): void {
    this.dialogRef.close();
  }

  aceptarClick(): void {
/*
      this.loading = true;
      this.servNoticia.elimina(this.dato)
      .subscribe(
        res => {res = res, this.loading = false,
          Swal.fire(     // esto lo saque de esta pagina https://github.com/JaredOrtz/SweetAlert2-Angular-6
            'Se eliminó el registro con Éxito',
            'Click en Boton!',
            'success'
          ),
          this.dialogRef.close(1);
        },
        err => {this.loading = false;
          const resp = JSON.stringify(err._body);
          console.log('elimina3:', resp);
          this.front_error = resp;
        }
      );
*/
  }
}
