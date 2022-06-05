// Libraries
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

//Services
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'doris-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  nombre: string;
  usuarios: Array<Usuario>;

  constructor(private usuario$: UsuarioService) {
    this.nombre = 'Doris';
    this.usuarios = new Array<Usuario>();
  }

  ngOnInit(): void {
    // this.usuario$.getAll().subscribe({
    //   next: (response) => {
    //     this.usuarios = response.data;
    //   },
    //   error: (error: HttpErrorResponse) => {
    //     console.error(error);
    //   },
    //   complete: () => {
    //     console.log('complete');
    //   },
    // });
    //
    // this.usuario$.getFetch().then((response) => {
    //   this.usuarios = response.data;
    // });
    //
    this.getData();
  }

  async getData(): Promise<void> {
    this.usuarios = await this.usuario$.getFetchSincrono();
  }
}
