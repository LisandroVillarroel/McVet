export interface EmpresaI {
  _id?: string;
  rutEmpresa: string;
  razonSocial: string;
  nombreFantasia: string;
  direccion: string;
  usuarioCrea_id?: string;
  usuarioModifica_id: string;
  estado?: string;
}
