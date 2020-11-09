import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Productos {
  codigoBarra: string;
  nombre: string;
  precio: number;
  stock: number;

}

const ELEMENT_DATA: Productos[] = [
  {codigoBarra: 'BKY00001', nombre: 'Producto 1', stock: 0, precio: 1000},
  {codigoBarra: 'BKY00002', nombre: 'Producto 2', stock: 0, precio: 2000},
  {codigoBarra: 'BKY00003', nombre: 'Producto 3', stock: 0, precio: 3000},
  {codigoBarra: 'BKY00004', nombre: 'Producto 4', stock: 0, precio: 4000},
  {codigoBarra: 'BKY00005', nombre: 'Producto 5', stock: 0, precio: 5000},
  {codigoBarra: 'BKY00006', nombre: 'Producto 6', stock: 0, precio: 6000},
  {codigoBarra: 'BKY00007', nombre: 'Producto 7', stock: 0, precio: 7000},
  {codigoBarra: 'BKY00008', nombre: 'Producto 8', stock: 0, precio: 8000},
  {codigoBarra: 'BKY00009', nombre: 'Producto 9', stock: 0, precio: 9000},
  {codigoBarra: 'BKY00010', nombre: 'Producto 10', stock: 0, precio: 10000},
  {codigoBarra: 'BKY00011', nombre: 'Producto 11', stock: 0, precio: 11000},
  {codigoBarra: 'BKY00012', nombre: 'Producto 12', stock: 0, precio: 12000},
  {codigoBarra: 'BKY00013', nombre: 'Producto 13', stock: 0, precio: 13000},
  {codigoBarra: 'BKY00014', nombre: 'Producto 14', stock: 0, precio: 14000},
  {codigoBarra: 'BKY00015', nombre: 'Producto 15', stock: 0, precio: 15000},
  {codigoBarra: 'BKY00016', nombre: 'Producto 16', stock: 0, precio: 16000},
  {codigoBarra: 'BKY00017', nombre: 'Producto 17', stock: 0, precio: 17000},
  {codigoBarra: 'BKY00018', nombre: 'Producto 18', stock: 0, precio: 18000},
  {codigoBarra: 'BKY00019', nombre: 'Producto 19', stock: 0, precio: 19000},
  {codigoBarra: 'BKY00020', nombre: 'Producto 20', stock: 0, precio: 20000},
];

@Component({
  selector: 'app-punto-venta',
  templateUrl: './punto-venta.component.html',
  styleUrls: ['./punto-venta.component.css']
})
export class PuntoVentaComponent implements OnInit {
  public codigoBarra: string;
  public numberDuplicado = 0;

  displayedColumns: string[] = ['nombre'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    if (filterValue.trim().toLowerCase() === '') {
      this.dataSource.filter = 'pasomalo';
    } else {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }


  constructor() { }
  ngOnInit() {

      this.dataSource.filter = 'pasomalo';
  }
  selectRow(row) {
  this.codigoBarra = row.codigoBarra;
 // if (this.producto === row.nombre) {
    this.numberDuplicado = this.numberDuplicado + 1; // Este es solo para que pasen los repetidos
 //   console.log('puntoventa: ', this.numberDuplicado);
//  }
 }

}
