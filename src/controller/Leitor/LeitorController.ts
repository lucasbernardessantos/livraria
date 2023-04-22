import { LeitorComponent } from "../../components/Leitor/LeitorComponent";
import { Leitor } from "../../model/Leitor";

export class LeitorController {

  private leitorComponent: LeitorComponent

  constructor() {
    this.leitorComponent = new LeitorComponent()
  }

  getView(): string {
    let leitores = [
      new Leitor('1', 'Lucas', 'lucas@gmail.com'),
      new Leitor('2', 'Guilherme', 'guilherme@gmail.com')
    ]

    return this.leitorComponent.template(this.updateTable(leitores))
  }

  private updateTable(leitores: Leitor[]): string {
    let tabelaLeitores = ''

    leitores.forEach((leitor: Leitor) => {
      tabelaLeitores = `
        ${tabelaLeitores}
        <tr>
          <th class="scope">${leitor.id}</th>
          <td>${leitor.nome}</td>
          <td>${leitor.email}</td>
        </tr>
      `
    })

    return tabelaLeitores
  }
}