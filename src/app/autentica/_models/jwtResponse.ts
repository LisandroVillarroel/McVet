export interface JwtResponseI {
  usuarioDato: {
    _id: string,
    usuario: string,
    contrasena: string,
    nombres: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    empresa_Id: string,
    accessToken: string
  };
}
