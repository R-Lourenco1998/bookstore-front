import { Component, OnInit } from "@angular/core";
import { CategoriaService } from "../categoria.service";
import { Categoria } from "../categoria.model";

@Component({
  selector: "app-categoria-read",
  templateUrl: "./categoria-read.component.html",
  styleUrls: ["./categoria-read.component.css"],
})
export class CategoriaReadComponent implements OnInit {
  displayedColumns: string[] = ["id", "nome", "descricao", "livros", "acoes"];

  categorias: Categoria[] = [];
  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.categoriaService.findAll().subscribe((resposta) => {
      this.categorias = resposta;
      console.log(resposta);
    });
  }
}
