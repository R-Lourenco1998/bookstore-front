import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Categoria } from "../categoria.model";
import { CategoriaService } from "../categoria.service";

@Component({
  selector: "app-categoria-update",
  templateUrl: "./categoria-update.component.html",
  styleUrls: ["./categoria-update.component.css"],
})
export class CategoriaUpdateComponent implements OnInit {
  categoria: Categoria = {
    id: "",
    nome: "",
    descricao: "",
  };

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoria.id = this.activatedRoute.snapshot.paramMap.get("id")!;
    this.findById();
  }

  cancel(): void {
    this.router.navigate(["categorias"]);
  }

  findById(): void {
    this.categoriaService.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.nome = resposta.nome;
      this.categoria.descricao = resposta.descricao;
    });
  }

  update(): void {
    this.categoriaService.update(this.categoria).subscribe((resposta) => {
      this.router.navigate(["categorias"]);
      this.categoriaService.mensagem("Categoria atualizada com sucesso!");
    }, err => {
      this.categoriaService.mensagem('Validar os campos!');
    });
  }
}
