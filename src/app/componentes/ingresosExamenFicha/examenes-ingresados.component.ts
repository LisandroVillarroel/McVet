
import { catchError } from 'rxjs/operators';
import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatSnackBar} from '@angular/material//snack-bar';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';

import Swal from 'sweetalert2';

import { ICliente } from '@app/modelo/cliente-interface';
import { AuthenticationService } from '@app/autentica/_services';
import { JwtResponseI } from '@app/autentica/_models';
import { ClienteService } from '@app/servicios/cliente.service';
import { AgregaClienteComponent } from '../mantenedores/cliente/agrega-cliente/agrega-cliente.component';
import { ModificaClienteComponent } from '../mantenedores/cliente/modifica-cliente/modifica-cliente.component';
import { ConsultaClienteComponent } from '../mantenedores/cliente/consulta-cliente/consulta-cliente.component';
import { EliminaClienteComponent } from '../mantenedores/cliente/elimina-cliente/elimina-cliente.component';

@Component({
  selector: 'app-examenes-ingresados',
  templateUrl: './examenes-ingresados.component.html',
  styleUrls: ['./examenes-ingresados.component.css']
})
export class ExamenesIngresadosComponent implements OnInit {

  datoClientePar: ICliente;
  currentUsuario: JwtResponseI;
  exampleDatabase: ClienteService;
 // id: string;

  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['index', 'rutCliente', 'razonSocial', 'nombreFantasia', 'direccion', 'telefono', 'email', 'nombreContacto', 'opciones'];
  dataSource: MatTableDataSource<ICliente>;

  @ViewChild(MatPaginator ) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


constructor(private clienteService: ClienteService,
            public httpClient: HttpClient,
            public dialog: MatDialog,
            private snackBar: MatSnackBar,
            private authenticationService: AuthenticationService
    ) {
      this.authenticationService.currentUsuario.subscribe(x => this.currentUsuario = x);
      this.dataSource = new MatTableDataSource<ICliente>();

  }


ngOnInit() {
    console.log('pasa emp 1');
    if (this.authenticationService.getCurrentUser() != null) {
      this.currentUsuario.usuarioDato = this.authenticationService.getCurrentUser() ;
    }
    this.getListCliente();
  }

getListCliente(): void {
    console.log('pasa emp 2');
    this.clienteService
      .getDataCliente()
      .subscribe(res => {
        console.log('cliente: ', res['data']);
        this.dataSource.data = res['data'] as ICliente[];
      },
      // console.log('yo:', res as PerfilI[]),
      error => {
        console.log('error carga:', error);
        Swal.fire(
          'ERROR INESPERADO',
          error.error.error,
         'error'
       );
      }
    ); // (this.dataSource.data = res as PerfilI[])
  }

  // tslint:disable-next-line: use-lifecycle-interface
ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

agregaNuevo() {
  //  agregaNuevo(empresaInterface_: EmpresaI) {
    // Nuevo
    console.log('usu:', this.currentUsuario.usuarioDato._id);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '70%';
    dialogConfig.position = { top : '5%'};
    dialogConfig.data = {usuario: this.currentUsuario.usuarioDato._id};
  //  dialogConfig.data = {
  //    idProducto: idProdP,
  //    titulo: tituloP
  //  };


    this.dialog.open(AgregaClienteComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Dialog output3333:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );
  }

actualizaCliente(id: string, rutCliente: string, razonSocial: string, nombreFantasia: string, direccion: string,
                 telefono: string, email: string, nombreContacto: string) {
    this.datoClientePar = {
      _id: id,
      rutCliente,
      razonSocial,
      nombreFantasia,
      direccion,
      telefono,
      email,
      nombreContacto,
     // usuarioCrea_id: this.currentUsuario.usuarioDato.id,
      usuarioModifica_id: this.currentUsuario.usuarioDato._id
    };

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '70%';
    dialogConfig.position = { top : '5%'};
    // dialogConfig.data =
    // {id, rutEmpresa, razonSocial, nombreFantasia, direccion, usuarioCrea_id: this.currentUsuario.usuarioDato.usuario};
    dialogConfig.data = this.datoClientePar;
    this.dialog.open(ModificaClienteComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Dialog output3333:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );

  }

consultaCliente(id: string, rutCliente: string, razonSocial: string, nombreFantasia: string, direccion: string,
                telefono: string, email: string, nombreContacto: string) {
    this.datoClientePar = {
      _id: id,
      rutCliente,
      razonSocial,
      nombreFantasia,
      direccion,
      telefono,
      email,
      nombreContacto,
      usuarioCrea_id: this.currentUsuario.usuarioDato._id,
      usuarioModifica_id: this.currentUsuario.usuarioDato._id
    };

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '70%';
    dialogConfig.position = { top : '5%'};

    dialogConfig.data = this.datoClientePar;
    this.dialog.open(ConsultaClienteComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Datoas Consulta:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );
 }

eliminaCliente(id: string, rutCliente: string, razonSocial: string, nombreFantasia: string, direccion: string,
               telefono: string, email: string, nombreContacto: string) {
    this.datoClientePar = {
      _id: id,
      rutCliente,
      razonSocial,
      nombreFantasia,
      direccion,
      telefono,
      email,
      nombreContacto,
     // usuarioCrea_id: this.currentUsuario.usuarioDato.id
      usuarioModifica_id: this.currentUsuario.usuarioDato._id
    };

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '70%';
    dialogConfig.position = { top : '5%'};

    dialogConfig.data = this.datoClientePar;
    this.dialog.open(EliminaClienteComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Datoas Consulta:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );

  }

    private refreshTable() {
    // Refreshing table using paginator
    // Thanks yeager-j for tips
    // https://github.com/marinantonio/angular-mat-table-crud/issues/12
   // this.dataSource.paginator._changePageSize(this.paginator.pageSize);
   // this.noticia=this.servicio.getNoticias();

   this.getListCliente();
   this.dataSource.paginator._changePageSize(this.paginator.pageSize);
  }
}
