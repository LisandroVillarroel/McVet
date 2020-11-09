import { catchError } from 'rxjs/operators';
import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatSnackBar} from '@angular/material//snack-bar';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import {PerfilI } from './../../../modelo/perfil-interface';
import {PerfilService } from './../../../servicios/perfil.service';

import { JwtResponseI } from './../../../autentica/_models';
import { AuthenticationService } from './../../../autentica/_services';

import { AgregaPerfilComponent } from './agrega-perfil/agrega-perfil.component';
import { ModificaPerfilComponent } from './modifica-perfil/modifica-perfil.component';
import { ConsultaPerfilComponent } from './consulta-perfil/consulta-perfil.component';
import { EliminaPerfilComponent } from './elimina-perfil/elimina-perfil.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  datoPerfilPar: PerfilI;
  currentUsuario: JwtResponseI;
  exampleDatabase: PerfilService;
 // id: string;

  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['index', 'sigla', 'descripcion', 'opciones'];
  dataSource: MatTableDataSource<PerfilI>;

  @ViewChild(MatPaginator ) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private perfilService: PerfilService,
              public httpClient: HttpClient,
              public dialog: MatDialog,
              private snackBar: MatSnackBar,
              private authenticationService: AuthenticationService
    ) {
      this.authenticationService.currentUsuario.subscribe(x => this.currentUsuario = x);
      this.dataSource = new MatTableDataSource<PerfilI>();
  }


  ngOnInit() {
    console.log('pasa emp 1');
    if (this.authenticationService.getCurrentUser() != null) {
      this.currentUsuario.usuarioDato = this.authenticationService.getCurrentUser() ;
    }
    this.getListPerfil();
  }

  getListPerfil(): void {
    console.log('pasa emp 2');
    this.perfilService
      .getDataPerfil()
      .subscribe(res => (console.log('pasa emp 3', res['data']), this.dataSource.data = res['data'] as PerfilI[]),
      // console.log('yo:', res as PerfilI[]),
      error => console.log('error carga:', error)
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
    dialogConfig.height = '50%';
    dialogConfig.position = { top : '5%'};
    dialogConfig.data = {usuario: this.currentUsuario.usuarioDato._id};
  //  dialogConfig.data = {
  //    idProducto: idProdP,
  //    titulo: tituloP
  //  };


    this.dialog.open(AgregaPerfilComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Dialog output3333:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );
  }

  actualizaPerfil(id: string, sigla: string, descripcion: string) {
    this.datoPerfilPar = {
      _id: id,
      empresa_id: '',
      sigla,
      descripcion,
      usuarioModifica_id: this.currentUsuario.usuarioDato._id
    };

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '50%';
    dialogConfig.position = { top : '5%'};
    // dialogConfig.data =
    // {id, rutEmpresa, razonSocial, nombreFantasia, direccion, usuarioCrea_id: this.currentUsuario.usuarioDato.usuario};
    dialogConfig.data = this.datoPerfilPar;
    this.dialog.open(ModificaPerfilComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Dialog output3333:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );

  }

  consultaPerfil(id: string, sigla: string, descripcion: string) {
    this.datoPerfilPar = {
      _id: id,
      empresa_id: '',
      sigla,
      descripcion,
      usuarioCrea_id: this.currentUsuario.usuarioDato._id,
      usuarioModifica_id: this.currentUsuario.usuarioDato._id
    };

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '50%';
    dialogConfig.position = { top : '5%'};

    dialogConfig.data = this.datoPerfilPar;
    this.dialog.open(ConsultaPerfilComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Datoas Consulta:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );
 }

  eliminaPerfil(id: string, sigla: string, descripcion: string) {
    this.datoPerfilPar = {
      _id: id,
      empresa_id: '',
      sigla,
      descripcion,
      usuarioModifica_id: this.currentUsuario.usuarioDato._id
    };

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '50%';
    dialogConfig.position = { top : '5%'};

    dialogConfig.data = this.datoPerfilPar;
    this.dialog.open(EliminaPerfilComponent, dialogConfig)
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

   this.getListPerfil();
   this.dataSource.paginator._changePageSize(this.paginator.pageSize);
  }
}
