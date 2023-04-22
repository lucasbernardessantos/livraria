import { LivroComponent } from "../components/Livro/LivrosComponent"
import { LivroStatus } from "../enum/livroStatus"
import { Livro } from "../model/Livro"

export class LivroController {

  private livroComponent: LivroComponent

  constructor() {
    this.livroComponent = new LivroComponent()
  }

  getView(): string {
    let livros = [
      new Livro('1', 'O Ladrão de Raios', 'Rick Ryordan', LivroStatus.indisponivel),
      new Livro('2', 'A Biblioteca da Mei', 'Matt Haig', LivroStatus.indisponivel),
      new Livro('3', 'A guerra das duas rainhas', 'Jennifer L. Armentrout', LivroStatus.indisponivel),
      new Livro('4', 'O Jogo do Assassino', 'Ngaio Marsh', LivroStatus.disponivel)
    ]
    return this.livroComponent.template(this.updateTable(livros))
  }

  private updateTable(livros: Livro[]): string {
    let tabelaLivros = ''

    livros.forEach((livro: Livro) => {
      tabelaLivros = `
        ${tabelaLivros}
        <tr>
          <th class="scope">${livro.id}</th>
          <td>${livro.titulo}</td>
          <td>${livro.autor}</td>
          <td>${livro.status}</td>
        </tr>
      `
    })
    return tabelaLivros
  }
}