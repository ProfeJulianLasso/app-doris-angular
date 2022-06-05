import { Response } from './response.mode';
import { Usuario } from './usuario.model';

export interface ResponseAllUsers extends Response {
  data: Array<Usuario>;
}
