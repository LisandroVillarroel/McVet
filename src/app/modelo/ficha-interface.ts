export interface IFicha {
  _id?: string;
  numeroFicha?: number;
  cliente?: IFichaCliente;
  nombrePropietario?: string;
  nombrePaciente?: string;
  edadPaciente?: number;
  especie?: IFichaEspecie;
  raza?: IFichaRaza;
  sexo?: string;
  doctorSolicitante?: string;
  examen?:IFichaExamen;
  telefono?: string;
  email?: string;
  usuarioCrea_id: string;
  usuarioModifica_id: string;
  estado?: string;
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



export interface IFichaExamen {
  idExamen:string;
  codigoExamen: string;
  nombre: string;
}

export interface IFichaEspecie {
  idEspecie:string;
  nombre: string;
}

export interface IFichaRaza {
  idRaza:string;
  nombre: string;
}
