import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JwtResponseI } from '@app/autentica/_models';
import { AuthenticationService } from '@app/autentica/_services';
import { FichaService } from '@app/servicios/ficha.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-elimina-ficha',
  templateUrl: './elimina-ficha.component.html',
  styleUrls: ['./elimina-ficha.component.css']
})
export class EliminaFichaComponent implements OnInit {

  currentUsuario: JwtResponseI;
  datoElimina:{
    _id:string,
    usuarioModifica_id:string;
  }
  constructor(private dialogRef: MatDialogRef<EliminaFichaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authenticationService: AuthenticationService,
    public fichaService: FichaService) {
      console.log('dato elimina',data)
      this.authenticationService.currentUsuario.subscribe(x => this.currentUsuario = x);
    }

  ngOnInit(): void {
  }

  enviar() {

    this.data.usuarioModifica_id= this.currentUsuario.usuarioDato._id
    this.datoElimina={
      _id:this.data._id,
      usuarioModifica_id:this.currentUsuario.usuarioDato._id
    }


    console.log('elimina:',this.datoElimina);
    this.fichaService.deleteDataFicha(this.datoElimina)
    .subscribe(
      dato => {
        console.log('respuesta:', dato['codigo']);
        if (dato['codigo'] === 200) {
            Swal.fire(
            'Se ELIMINÓ con Éxito',
            '',
            'success'
          ),
          this.dialogRef.close(1);
        }
        else{
          console.log('error', dato);
        }
      }
       // error =>{console.log('error agrega:',<any>error);this.errorMsg=error.error.error;alert('Error: ' + this.errorMsg)}
      );

  }

  cerrar() {
    this.dialogRef.close();
  }
}
