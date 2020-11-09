import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import Swal from 'sweetalert2';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { VentaService } from './../../../servicios/venta.service';



export interface Productos {
  codigoBarra: string;
  nombre: string;
  precio: number;
  stock: number;

}

const datoIventario: Productos[] = [
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
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css']
})
export class DetalleVentaComponent implements  OnInit {

  @Input() codigoBarraInput: string;
  @Input() duplicadoInput: number;

  public precioInput;
  public productoInput;
  lectorCodBarra: string;

    displayedColumns =   ['indice',  'cantidad', 'detalleProd', 'descuento', 'precio', 'subTotal', 'eliminar'];
    dataSource = new MatTableDataSource(this.ventaService.detalleVenta);
    controls: FormArray;

    constructor(private ventaService: VentaService) {}

  ngOnInit() {

    const ventaGrupos = this.ventaService.detalleVenta$.value.map(entity => {
      return new FormGroup({
        cantidad:  new FormControl(entity.cantidad, [Validators.min(0), Validators.required]),
        detalleProd: new FormControl(entity.detalleProd, Validators.required),
        descuento: new FormControl(entity.descuento, Validators.required),
      }, {updateOn: 'blur' });
    });

    this.controls = new FormArray(ventaGrupos);
  }

  updateField(index, field) {
    const control = this.getControl(index, field);
    if (control.valid) {
      this.ventaService.update(index, field, control.value);
      this.dataSource = new MatTableDataSource(this.ventaService.detalleVenta);
    }

   }

  getControl(index, fieldName) {
  const a  = this.controls.at(index).get(fieldName) as FormControl;
   // console.log(fieldName, index);
  return this.controls.at(index).get(fieldName) as FormControl;
  }
  eliminar(uno,dos){
    console.log(uno, dos);
  }

  buscaAgregaCodigoBarra(){
    console.log('');
  }

}


/*  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
