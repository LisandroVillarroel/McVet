import { catchError } from 'rxjs/operators';
import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatSnackBar} from '@angular/material//snack-bar';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import {EmpresaI} from '../../../modelo/empresa-interface';
import {EmpresaService } from '../../../servicios/empresa.service';

import { JwtResponseI } from './../../../autentica/_models';
import { AuthenticationService } from './../../../autentica/_services';

import { AgregaEmpresaComponent } from './agrega-empresa/agrega-empresa.component';
import { ModificaEmpresaComponent } from './modifica-empresa/modifica-empresa.component';
import { ConsultaEmpresaComponent } from './consulta-empresa/consulta-empresa.component';
import { EliminaEmpresaComponent } from './elimina-empresa/elimina-empresa.component';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  datoEmpresaPar: EmpresaI;
  currentUsuario: JwtResponseI;
  exampleDatabase: EmpresaService;
 // id: string;

  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['index', 'rutEmpresa', 'razonSocial', 'nombreFantasia', 'direccion', 'opciones'];
  dataSource: MatTableDataSource<EmpresaI>;

  @ViewChild(MatPaginator ) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private empresaService: EmpresaService,
              public httpClient: HttpClient,
              public dialog: MatDialog,
              private snackBar: MatSnackBar,
              private authenticationService: AuthenticationService
    ) {
      this.authenticationService.currentUsuario.subscribe(x => this.currentUsuario = x);
      this.dataSource = new MatTableDataSource<EmpresaI>();
  }


  ngOnInit() {
    console.log('pasa emp 1');
    if (this.authenticationService.getCurrentUser() != null) {
      this.currentUsuario.usuarioDato = this.authenticationService.getCurrentUser() ;
    }
    this.getListEmpresa();
  }

  getListEmpresa(): void {
    console.log('pasa emp 2');
    this.empresaService
      .getDataEmpresa()
      .subscribe(res => (console.log('pasa emp 3', res['data']), this.dataSource.data = res['data'] as EmpresaI[]),
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


    this.dialog.open(AgregaEmpresaComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Dialog output3333:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );
  }

  actualizaEmpresa(id: string, rutEmpresa: string, razonSocial: string, nombreFantasia: string, direccion: string) {
    this.datoEmpresaPar = {
      _id: id,
      rutEmpresa,
      razonSocial,
      nombreFantasia,
      direccion,
     // usuarioCrea_id: this.currentUsuario.usuarioDato.id,
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
    dialogConfig.data = this.datoEmpresaPar;
    this.dialog.open(ModificaEmpresaComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Dialog output3333:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );

  }

  consultaEmpresa(id: string, rutEmpresa: string, razonSocial: string, nombreFantasia: string, direccion: string) {
    this.datoEmpresaPar = {
      _id: id,
      rutEmpresa,
      razonSocial,
      nombreFantasia,
      direccion,
      usuarioCrea_id: this.currentUsuario.usuarioDato._id,
      usuarioModifica_id: this.currentUsuario.usuarioDato._id
    };

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '50%';
    dialogConfig.position = { top : '5%'};

    dialogConfig.data = this.datoEmpresaPar;
    this.dialog.open(ConsultaEmpresaComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Datoas Consulta:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );
 }

  eliminaEmpresa(id: string, rutEmpresa: string, razonSocial: string, nombreFantasia: string, direccion: string) {
    this.datoEmpresaPar = {
      _id: id,
      rutEmpresa,
      razonSocial,
      nombreFantasia,
      direccion,
     // usuarioCrea_id: this.currentUsuario.usuarioDato.id
      usuarioModifica_id: this.currentUsuario.usuarioDato._id
    };

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '50%';
    dialogConfig.position = { top : '5%'};

    dialogConfig.data = this.datoEmpresaPar;
    this.dialog.open(EliminaEmpresaComponent, dialogConfig)
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

   this.getListEmpresa();
   this.dataSource.paginator._changePageSize(this.paginator.pageSize);
  }
}
