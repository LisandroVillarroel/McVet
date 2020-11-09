import { InventarioInterface } from './../modelo/inventario-interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  inventarioServ: InventarioInterface[] = [
    {
      _id: '1',
      _idComercio: '10',
      codigoInterno: 1,
      codigoExterno: '1',
      codigoBarra: 'jhgt543',
      nombre: 'lis1',
      descripcion: 'descripcion1',
      foto: 'foto1',
      _idTipoMarca: 'idtm1',
      _idTipoUnidadMedida: 'idtum1',
      _idTipoFormato: 'idtf1',
      _idProveedor: 'idp1',
      catidadContenido: 1,
      catidad: 10,
      precioCompra: 100,
      precioVentaNeto: 200,
      precioVenta: 219,
      stockMinimo: 5
    }
  ];

  constructor() {
    // tslint:disable-next-line:no-unused-expression
   }

   getDataInventario() {
     return this.inventarioServ;
   }
}
