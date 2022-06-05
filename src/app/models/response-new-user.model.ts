import { Usuario } from './usuario.model';
import { Response } from './response.mode';

export interface ResponseNewUser extends Response {
  data: Usuario;
}
