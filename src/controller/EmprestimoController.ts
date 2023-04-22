import { EmprestimoComponent } from "../components/Emprestimo/EmprestimoComponent";
import { EmprestimoStatus } from "../enum/emprestimoStatus";
import { LivroStatus } from "../enum/livroStatus";
import { Emprestimo } from "../model/Emprestimo";
import { Leitor } from "../model/Leitor";
import { Livro } from "../model/Livro";

export class EmprestimoController {
  private emprestimoComponent: EmprestimoComponent

  constructor() {
    this.emprestimoComponent = new EmprestimoComponent()
  }

  getView(): string {
    let emprestismos = [
      new Emprestimo(
          '1',
          new Leitor('1', 'Lucas', 'lucas@gmail.com'),
          new Livro('1', 'O Ladrão de Raios', 'Rick Ryordan', LivroStatus.indisponivel),
          new Date("2023-03-22"),
          new Date("2023-03-29"),
          EmprestimoStatus.aberto
      ),
      new Emprestimo(
        '2',
        new Leitor('2', 'Guilherme', 'guilherme@gmail.com'),
        new Livro('2', 'A Biblioteca da Meia Noite', 'Matt Haig', LivroStatus.indisponivel),
        new Date("2023-03-19"),
        new Date("2023-03-26"),
        EmprestimoStatus.fechado
      ),
      new Emprestimo(
        '3',
        new Leitor('1', 'Lucas', 'lucas@gmail.com'),
        new Livro('3', 'A guerra das duas rainhas', 'Jennifer L. Armentrout', LivroStatus.indisponivel),
        new Date("2023-01-13"),
        new Date("2023-01-20"),
        EmprestimoStatus.pendente
      )
    ]
    return this.emprestimoComponent.template(this.updateTable(emprestismos))
  }

  private updateTable(emprestimos: Emprestimo[]): string {
    let tabelaEmprestimos = ''

    emprestimos.forEach((emprestimo: Emprestimo) => {
      tabelaEmprestimos = `
        ${tabelaEmprestimos}
        <tr>
          <th class="scope">${emprestimo.id}</th>
          <td>${emprestimo.leitor.nome}</td>
          <td>${emprestimo.livro.titulo}</td>
          <td>${emprestimo.retirada.getDate()}/${emprestimo.retirada.getMonth() + 1}/${emprestimo.retirada.getFullYear()}</td>
          <td>${emprestimo.devolucao.getDate()}/${emprestimo.devolucao.getMonth() + 1}/${emprestimo.devolucao.getFullYear()}</td>
          <td>${emprestimo.status}</td>
        </tr>
      `
    })

    return tabelaEmprestimos
  }
}