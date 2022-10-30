import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../livro.model";
import { LivroService } from "../livro.service";

@Component({
  selector: "app-livro-delete",
  templateUrl: "./livro-delete.component.html",
  styleUrls: ["./livro-delete.component.css"],
})
export class LivroDeleteComponent implements OnInit {
  id_cat: String = "";
  livro: Livro = {
    id: "",
    titulo: "",
    nome_autor: "",
    texto: "",
  };

  constructor(
    private livroService: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.livro.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  create(): void {
    this.livroService.create(this.livro, this.id_cat).subscribe(
      (resposta) => {
        this.router.navigate([`categorias/${this.id_cat}/livros`]);
        this.livroService.mensagem("Livro criado com sucesso!");
      },
      (err) => {
        this.router.navigate([`categorias/${this.id_cat}/livros`]);
        this.livroService.mensagem("Erro ao criar novo Livro!");
      }
    );
  }

  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
  }

  findById(): void {
    this.livroService.findById(this.livro.id!).subscribe((resposta) => {
      this.livro = resposta;
    });
  }

  delete(): void {
    this.livroService.delete(this.livro.id!).subscribe(
      () => {
        this.router.navigate([`categorias/${this.id_cat}/livros`]);
        this.livroService.mensagem("Livro excluído com sucesso!");
      },
      (err) => {
        this.router.navigate([`categorias/${this.id_cat}/livros`]);
        this.livroService.mensagem("Erro ao excluir livro!");
      }
    );
  }
}
