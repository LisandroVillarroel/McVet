export interface IFicha {
  _id?: string;
  fichaC:{
    numeroFicha?: string;
    cliente?:IFichaCliente;
    nombrePropietario?: string;
    nombrePaciente?: string;
    edadPaciente?: string;
    especie?: IFichaEspecie;
    raza?: IFichaRaza;
    sexo?: string;
    doctorSolicitante?:IFichaDoctorSolicitante;
    examen?:IFichaExamen;
  },
  usuarioAsignado?:IFichaUsuarioAsignado;
  estadoFicha?:string;
  empresa_Id?: string;
  usuarioCrea_id?: string;
  usuarioModifica_id: string;
  fechaHora_crea?:Date;

  estado?: string;
}
export interface IFichaCliente {
  idCliente?:string;
  rutCliente?: string;
  razonSocial?: string;
  nombreFantasia?: string;
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

export interface IFichaDoctorSolicitante {
  idDoctorSolicitante: string;
  nombreDoctorSolicitante: string;
}

export interface IFichaUsuarioAsignado {
    idUsuario: string;
    usuario: string;
    rutUsuario: string;
    nombreCompleto: string;
}
