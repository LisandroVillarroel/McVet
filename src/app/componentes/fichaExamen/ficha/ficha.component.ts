import { catchError } from 'rxjs/operators';
import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';

import Swal from 'sweetalert2';

import { AuthenticationService } from '@app/autentica/_services';
import { JwtResponseI } from '@app/autentica/_models';
import { IFicha } from '@app/modelo/ficha-interface';
import { FichaService } from '@app/servicios/ficha.service';
import { AgregaFichaComponent } from './agrega-ficha/agrega-ficha.component';
import { ModificaFichaComponent } from './modifica-ficha/modifica-ficha.component';
import { ConsultaFichaComponent } from './consulta-ficha/consulta-ficha.component';
import { EliminaFichaComponent } from './elimina-ficha/elimina-ficha.component';


@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {



    datoFichaPar: IFicha;
    currentUsuario: JwtResponseI;
   // id: string;

    // tslint:disable-next-line:max-line-length
    displayedColumns: string[] = ['index', 'fichaC.numeroFicha','fichaC.cliente.nombreFantasia', 'fichaC.nombrePaciente', 'fichaC.examen.nombre',  'fechaHora_crea', 'estadoFicha', 'opciones'];
    dataSource: MatTableDataSource<IFicha>;

    @ViewChild(MatPaginator ) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


  constructor(private fichaService: FichaService,
              public httpClient: HttpClient,
              public dialog: MatDialog,
              private authenticationService: AuthenticationService
      ) {
        this.authenticationService.currentUsuario.subscribe(x => this.currentUsuario = x);
        this.dataSource = new MatTableDataSource<IFicha>();

    }


  ngOnInit() {
      console.log('pasa ficha 1');
      if (this.authenticationService.getCurrentUser() != null) {
        this.currentUsuario.usuarioDato = this.authenticationService.getCurrentUser() ;
      }
      this.getListFicha();
    }

  getListFicha(): void {
      console.log('pasa ficha 2');
      this.fichaService
        .getDataFicha(this.currentUsuario.usuarioDato.empresa_Id,'Todo')
        .subscribe(res => {
          console.log('fichaaaaaa: ', res);
          this.dataSource.data = res['data'] as any[];
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
      dialogConfig.width = '80%';
      dialogConfig.height = '85%';
      dialogConfig.position = { top : '2%'};
      dialogConfig.data = {usuario: this.currentUsuario.usuarioDato._id, empresa_Id:this.currentUsuario.usuarioDato.empresa_Id};
    //  dialogConfig.data = {
    //    idProducto: idProdP,
    //    titulo: tituloP
    //  };


      this.dialog.open(AgregaFichaComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Dialog output3333:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
    }

  actualizaFicha(datoFicha) {
      this.datoFichaPar = datoFicha;

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '70%';
      dialogConfig.height = '70%';
      dialogConfig.position = { top : '5%'};

      dialogConfig.data = this.datoFichaPar;
      this.dialog.open(ModificaFichaComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Dialog output3333:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );

    }

  consultaFicha(datoFicha) {
    this.datoFichaPar = datoFicha;

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '50%';
      dialogConfig.height = '70%';
      dialogConfig.position = { top : '5%'};

      dialogConfig.data = this.datoFichaPar;
      this.dialog.open(ConsultaFichaComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datoas Consulta:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
   }

  eliminaCliente(datoFicha) {
    console.log('dato elimina antes de eliminar:',datoFicha)
    this.datoFichaPar = datoFicha;
    console.log('dato elimina antes de eliminar2:',this.datoFichaPar)
  //  this.datoFichaPar.usuarioModifica_id= this.currentUsuario.usuarioDato._id

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '50%';
      dialogConfig.height = '70%';
      dialogConfig.position = { top : '5%'};

      dialogConfig.data = this.datoFichaPar;
      this.dialog.open(EliminaFichaComponent, dialogConfig)
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

     this.getListFicha();
     this.dataSource.paginator._changePageSize(this.paginator.pageSize);
    }
  }
