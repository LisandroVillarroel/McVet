export interface IExamen {
  _id?: string;
  codigoExamen: string;
  nombre: string;
  Sigla: string;
  precio: number;
  formato?:{
        idFormato?: string;
        nombreFormato?: string;
    },
  usuarioCrea_id?: string;
  usuarioModifica_id: string;
  estado?: string;
  }

