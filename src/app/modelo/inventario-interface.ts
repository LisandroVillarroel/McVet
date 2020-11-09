export interface InventarioInterface {
_id: string;
_idComercio: string;
codigoInterno: number;
codigoExterno: string;
codigoBarra: string;
nombre: string;
descripcion: string;
foto: string;
_idTipoMarca: string;
_idTipoUnidadMedida: string;
_idTipoFormato: string;
_idProveedor: string;
catidadContenido: number;
catidad: number;
precioCompra: number;
precioVentaNeto: number;
precioVenta: number;
stockMinimo: number;
}
