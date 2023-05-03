import { EmprestimoComponent } from "../components/Emprestimo/EmprestimoComponent"
import { EmprestimoStatus } from "../enum/emprestimoStatus"
import { LeitorStatus } from "../enum/leitorStatus"
import { LivroStatus } from "../enum/livroStatus"
import { Emprestimo } from "../model/Emprestimo"
import { Leitor } from "../model/Leitor"
import { Livro } from "../model/Livro"
import { EmprestimosService } from "../service/EmprestimoService"
import { LeitorService } from "../service/LeitorService"
import { LivroService } from './../service/LivroService'

export class EmprestimoController {
  private emprestimoComponent: EmprestimoComponent
  private emprestimoService: EmprestimosService
  private leitorService: LeitorService
  private livroService: LivroService

  private listaLeitores: Leitor[] = []
  private listaLivros: Livro[] = []
  private emprestimoEscolhido: Emprestimo | null = null
  private emprestimos: Emprestimo[] = []

  constructor() {
    this.emprestimoComponent = new EmprestimoComponent()
    this.emprestimoService = new EmprestimosService()
    this.leitorService = new LeitorService()
    this.livroService = new LivroService()
  }

  async getView(): Promise<string> {
    return this.emprestimoComponent.template(await this.updateTable())
  }

  async adicionarLeitorAoComponente() {
    this.listaLeitores = await this.leitorService.pegarTodos()
    let select = this.getElementById('input-select-leitor') as HTMLSelectElement
    let options = ''

    this.listaLeitores.forEach((leitor: Leitor, index: number) => {
      if (leitor.status === LeitorStatus.ok) {
        if (index === 0) {
          options = `
            ${options}
            <option selected value="${leitor.id}">${leitor.id} - ${leitor.nome}</option>
          `
        } else {
          options = `
            ${options}
            <option value="${leitor.id}">${leitor.id} - ${leitor.nome}</option>
          `
        }
      }
    })

    select.innerHTML = options
  }

  async adicionarLivroAoComponente() {
    this.listaLivros = await this.livroService.pegarTodos()
    let select = this.getElementById('input-select-livro') as HTMLSelectElement
    let options = ''

    this.listaLivros.forEach((livro: Livro, index: number) => {
      if (livro.status === LivroStatus.disponivel) {
        if (index === 0) {
          options = `
            ${options}
            <option selected value="${livro.id}">${livro.id} - ${livro.titulo}</option>
          `
        } else {
          options = `
            ${options}
            <option value="${livro.id}">${livro.id} - ${livro.titulo}</option>
          `
        }
      }
    })

    select.innerHTML = options
  }

  adicionarEventos() {
    let linhas = this.getElementByClass('linha-emprestimo') as HTMLCollectionOf<HTMLTableRowElement>

    for (let i = 0; i < linhas.length; i++) {
      linhas[i].addEventListener('click', () => {
        this.selectionarEmprestimo(this.emprestimos[i])
      })
    }

    this.eventoCadastrarEmprestimo()
    this.eventoFecharEmprestimo()
  }

  //#region Eventos
  eventoCadastrarEmprestimo() {
    let btnCadastrar = this.getElementById('btn-cadastrar-emprestimo') as HTMLButtonElement

    btnCadastrar.addEventListener('click', async () => {
      await this.cadastrar()
    })
  }

  eventoFecharEmprestimo() {
    let btnFechar = this.getElementById('btn-fechar-emprestimo') as HTMLButtonElement

    btnFechar.addEventListener('click', async () => {
      await this.emprestimoService.fechar(this.emprestimoEscolhido!)
    })
  }
  //#endregion 

  selectionarEmprestimo(emprestimo: Emprestimo) {
    this.emprestimoEscolhido = emprestimo
  }

  async cadastrar() {
    let selectedLeitor = this.getElementById('input-select-leitor') as HTMLSelectElement
    let selectedLivro = this.getElementById('input-select-livro') as HTMLSelectElement

    let leitor = this.listaLeitores.find((leitor: Leitor) => leitor.id === selectedLeitor.value)
    let livro = this.listaLivros.find((livro: Livro) => livro.id === selectedLivro.value)

    let dataEmprestimo = new Date()
    let dataEntrega =  new Date()
    dataEntrega.setDate(dataEntrega.getDate() + 7)

    let emprestimo = new Emprestimo(leitor!, livro!, dataEmprestimo, dataEntrega, EmprestimoStatus.aberto)

    let result = await this.emprestimoService.cadastrar(emprestimo)

    console.log(result)
  }

  private async updateTable(/*emprestimos: Emprestimo[]*/): Promise<string> {
    this.emprestimos = await this.emprestimoService.obterTodos()
    let tabelaEmprestimos = ''

    console.log(this.emprestimos)

    this.emprestimos.forEach((emprestimo: Emprestimo) => {
      tabelaEmprestimos = `
        ${tabelaEmprestimos}
        <tr class='linha-emprestimo' data-bs-toggle="modal" data-bs-target="#form-fechar-emprestimo">
          <th class="scope">${emprestimo.id}</th>
          <td>${emprestimo.leitor.nome}</td>
          <td>${emprestimo.livro.titulo}</td>
          <td>
            ${emprestimo.retirada.getDate()}/${emprestimo.retirada.getMonth() + 1}/${emprestimo.retirada.getFullYear()}
          </td>
          <td>
            ${emprestimo.devolucao.getDate()}/${emprestimo.devolucao.getMonth() + 1}/${emprestimo.devolucao.getFullYear()}
          </td>
          <td>${emprestimo.status}</td>
        </tr>
      `
    })
    return tabelaEmprestimos
  }

  private getElementById(id: string): HTMLElement | null {
    return document.getElementById(id)
  }

  private getElementByClass(classe: string): HTMLCollectionOf<Element> {
    return document.getElementsByClassName(classe)
  }
}