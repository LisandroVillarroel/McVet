import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatSnackBar} from '@angular/material//snack-bar';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { InventarioInterface } from '../../modelo/inventario-interface';
import { InventarioService } from './../../servicios/inventario.service';

import { AgregaInventarioComponent } from './agrega-inventario/agrega-inventario.component';
import { ModificaInventarioComponent } from './modifica-inventario/modifica-inventario.component';
import { ConsultaInventarioComponent } from './consulta-inventario/consulta-inventario.component';
import { EliminaInventarioComponent } from './elimina-inventario/elimina-inventario.component';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  exampleDatabase: InventarioService;
  // dataSource: ExampleDataSource | null;
  // index: number;
  _id: string;

  inventario: InventarioInterface; // []= [];
  // noticias:noticiaInterface[]= [];

  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['index', '_id', 'codigoInterno', 'codigoExterno', 'nombre', 'descripcion', 'precioCompra', 'precioVentaNeto', 'precioVenta', 'stockMinimo', 'opciones'];
  dataSource: MatTableDataSource<InventarioInterface>;

  @ViewChild(MatPaginator ) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private inventarioService: InventarioService,
    public httpClient: HttpClient, public dialog: MatDialog, private snackBar: MatSnackBar) {
    // Create 100 users


    // this.noticia=this.servicio.getNoticias();//.filter(x =>x.numBoton==data.boton)
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
   // this.noticias=this.noticia;
    this.dataSource = new MatTableDataSource<InventarioInterface>();
  }

  // this.servicio
  //    .getNoticias()
  //    .subscribe((noticia: noticiaInterface) => (this.noticia = noticia));
  // }

  public getListInventario()  {
    this.dataSource.data = this.inventarioService.getDataInventario();
    // this.inventarioService.getDataInventario()
    // .subscribe(res => {
   //   this.dataSource.data = res as InventarioInterface[],
      // tslint:disable-next-line:no-unused-expression
  //    (error => console.log('error carga:', <any>error));
  //  });
  }

  ngOnInit() {
    this.getListInventario();
  }

  // tslint:disable-next-line:use-life-cycle-interface
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
  //  agregaNuevo(noticiaInterface_: InventarioInterface) {
    const dialogRef = this.dialog.open(AgregaInventarioComponent, {
      width: '70%',
      height: '85%',
      position: { top: '5%'},
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
         this.refreshTable();
      }
    });
  }

  startEdit(i: number, id: string, codigoInterno: string, codigoExterno: string, nombre: string, descripcion: string,
    precioCompra: number, precioVentaNeto: number, precioVenta: number, stockMinimo: number) {
    // this._id = _id;
    const dialogRef = this.dialog.open(ModificaInventarioComponent, {
      width: '70%',
      height: '85%',
      position: { top: '5%'},
      data: {id, codigoInterno, codigoExterno, nombre, descripcion, precioCompra, precioVentaNeto, precioVenta, stockMinimo}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
          this.refreshTable();
      }
    });
  }

  consultaInventario(i: number, id: string, codigoInterno: string, codigoExterno: string, nombre: string, descripcion: string,
     precioCompra: number, precioVentaNeto: number, precioVenta: number, stockMinimo: number) {
    // this._id = _id;
   const dialogRef = this.dialog.open(ConsultaInventarioComponent, {
     width: '70%',
     height: '85%',
     position: { top: '5%'},
     data: {id, codigoInterno, codigoExterno, nombre, descripcion, precioCompra, precioVentaNeto, precioVenta, stockMinimo}
   });
 }

  eliminaInventario(i: number, id: string, codigoInterno: string, codigoExterno: string, nombre: string, descripcion: string,
    precioCompra: number, precioVentaNeto: number, precioVenta: number, stockMinimo: number) {
    // this._id = _id;
    const dialogRef = this.dialog.open(EliminaInventarioComponent, {
      width: '70%',
      height: '85%',
      position: { top: '5%'},
      data: {id, codigoInterno, codigoExterno, nombre, descripcion, precioCompra, precioVentaNeto, precioVenta, stockMinimo}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

    private refreshTable() {
    // Refreshing table using paginator
    // Thanks yeager-j for tips
    // https://github.com/marinantonio/angular-mat-table-crud/issues/12
   // this.dataSource.paginator._changePageSize(this.paginator.pageSize);
   // this.noticia=this.servicio.getNoticias();

   this.getListInventario();
 ////   this.dataSource = new MatTableDataSource(this.noticia);
 // this.dataSource = new MatTableDataSource<noticiaInterface>();
    this.dataSource.paginator._changePageSize(this.paginator.pageSize);
   // window.location.reload();
  }
}


/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//  const name =
//      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//  return {
//    id: id.toString(),
//    name: name,
//    progress: Math.round(Math.random() * 100).toString(),
//    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//  };
// }
