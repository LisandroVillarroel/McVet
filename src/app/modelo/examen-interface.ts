export interface IExamen {
  _id?: string;
  codigoExamen: string;
  nombre: string;
  sigla: string;
  precio: number;
  usuarioCrea_id?: string;
  usuarioModifica_id: string;
  estado?: string;
  }

