import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  titulo = new FormControl('', [Validators.minLength(3)]);
  nome_autor = new FormControl('', [Validators.minLength(3)]);
  texto = new FormControl('', [Validators.minLength(10)]);

  constructor() { }

  ngOnInit(): void {
  }

  getMessage() {
    if (this.titulo.invalid) {
      return 'O campo Título deve ter entre 3 e 100 caracteres';
    }
    if (this.nome_autor.invalid) {
      return 'O campo NOME DO AUTOR deve ter entre 3 e 100 caracteres';
    }
    if (this.texto.invalid) {
      return 'O campo TEXTO deve ter entre 10 e 2.000.000 caracteres';
    }
    return false;
  }
  

}
