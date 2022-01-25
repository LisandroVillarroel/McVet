export interface IFicha {
  _id?: string;
  numeroFicha?: number;
  cliente?: IFichaCliente;
  propietario?: IPropietario
  nombrePaciente?: string;
  fechaNacimientoPaciente?: string;
  especie?: string;
  raza?: string;
  sexo?: string;
  dRSolicitante?: IdRSolicitante;
  examen?:IFichaExamen;
  telefono?: string;
  email?: string;
  usuarioCrea_id: string;
  usuarioModifica_id: string;
  estado: string;
}

export interface IFichaCliente {
  idCliente?:string;
  rutCliente?: string;
  razonSocial?: string;
  nombreFantasia?: string;
}

export interface IPropietario {
    rutPropietario?: string;
    nombres?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    region?: string;
    comuna?: string;
    direccion?: string;
    telefono?: string;
    email?: string;
}

export interface IdRSolicitante {
  iDdRSolicitante?: string;
  NombreDrSolicitante?: string;
}


export interface IFichaExamen {
  idExamen:string;
  codigoExamen: string;
  nombre: string;
}
