import { LeitorStatus } from './../enum/leitorStatus';
import { LeitorComponent } from "../components/Leitor/LeitorComponent"
import { Leitor } from "../model/Leitor"
import { LeitorService } from "../service/LeitorService"

export class LeitorController {
  private leitorComponent: LeitorComponent
  private leitorService: LeitorService
  private leitores: Leitor[] = []
  private leitorEscolhido: Leitor | null = null

  constructor() {
    this.leitorComponent = new LeitorComponent()
    this.leitorService = new LeitorService()
  }

  async getView(): Promise<string> {
    this.leitores = await this.leitorService.pegarTodos()

    return this.leitorComponent.template(this.updateTable(this.leitores))
  }

  public adicionarEventos() {
    let linhas = this.getElementByClass('linhaLeitor') as HTMLCollectionOf<HTMLTableRowElement>

    for (let i = 0; i < linhas.length; i++) {
      linhas[i].addEventListener('click', () => {
        this.montarFormEditar(this.leitores[i])
      })
    }
    
    this.eventoCadastrarLeitor()
    this.eventoAtualizarLeitor()
    this.eventoDeletarLeitor()
  }

  //#region Eventos 
  private eventoCadastrarLeitor() {
    let btnCadastrar = this.getElementById('btn-cadastrar-leitor') as HTMLButtonElement

    btnCadastrar.addEventListener('click', () => {
      this.cadastrarLeitor()
    })
  }

  private eventoAtualizarLeitor() {
    let btnAtualizar = this.getElementById('btn-editar-leitor') as HTMLButtonElement

    btnAtualizar.addEventListener('click', (ev: MouseEvent) => {
      ev.preventDefault()
      this.editarLeitor()
    })
  }

  private eventoDeletarLeitor() {
    let btnDeletar = this.getElementById('btn-deletar-leitor') as HTMLButtonElement

    btnDeletar.addEventListener('click', (ev: MouseEvent) => {
      ev.preventDefault()
      this.deletarLeitor()
    })
  }
  //#endregion
  
  //#region Cadastrar novo leitor
  async cadastrarLeitor() {
    let leitor = this.pegarDadosFormularioCadastro()

    if (await this.verificarEmailRepetido(leitor.email)) {
      let spanEmail = this.getElementById('span-email') as HTMLSpanElement
      spanEmail.classList.toggle('invisible')
      return 
    }

    await this.leitorService.cadastrar(leitor)
  }

  async verificarEmailRepetido(email: string) {
    if ((await this.leitorService.buscarPorEmail(email)).length > 0) return true
    return false
  }

  private pegarDadosFormularioCadastro(): Leitor {
    let inputNome = this.getElementById('input-cadastrar-nome') as HTMLInputElement
    let inputEmail = this.getElementById('input-cadastrar-email') as HTMLInputElement

    return new Leitor(inputNome.value, inputEmail.value, LeitorStatus.ok)
  }
  //#endregion
  
  //#region Editar leitor
  private montarFormEditar(leitor: Leitor) {
    let inputNome = this.getElementById('input-editar-nome') as HTMLInputElement
    let inputEmail = this.getElementById('input-editar-email') as HTMLInputElement
    let selectStatus = this.getElementById('input-editar-select-status') as HTMLSelectElement
    let inputMulta = this.getElementById('input-editar-multa') as HTMLInputElement

    if (leitor.multa) {
      inputMulta.classList.toggle('invisible')
      inputMulta.value = leitor.multa.toDateString()
    }

    inputNome.value = leitor.nome
    inputEmail.value = leitor.email
    selectStatus.value = leitor.status

    this.leitorEscolhido = leitor
  }

  private editarLeitor() {
    if (this.leitorEscolhido && this.leitorEscolhido.id) {
      let leitor = this.pegarDadosFormularioEditar()
      this.leitorService.atualizar(this.leitorEscolhido.id, leitor!)
    }
  }

  pegarDadosFormularioEditar(): Leitor | void {
    let inputNome = this.getElementById('input-editar-nome') as HTMLInputElement
    let inputEmail = this.getElementById('input-editar-email') as HTMLInputElement
    let selectStatus = this.getElementById('input-editar-select-status') as HTMLSelectElement

    if (
      selectStatus.value == LeitorStatus.inadimplente || 
      selectStatus.value == LeitorStatus.ok
    )
      return new Leitor(inputNome.value, inputEmail.value, selectStatus.value)
  }
  //#endregion

  //#region Atualizar tabela
  private updateTable(leitores: Leitor[]): string {
    let tabelaLeitores = ''
    
    leitores.forEach((leitor: Leitor) => {
      tabelaLeitores = `
      ${tabelaLeitores}
        <tr 
          class="${this.verificarStatus(leitor.status)} linhaLeitor"
          data-bs-toggle="modal" 
          data-bs-target="#form-editar-leitor"
        >
          <th class="scope">${leitor.nome}</th>
          <td>${leitor.email}</td>
          <td>${leitor.status}</td>
          <td>${this.verificarMulta(leitor.multa)}</td>
        </tr>
      `
    })
    
    return tabelaLeitores
  }

  private verificarStatus(status: LeitorStatus): string {
    if (status === "Inadimplente") return "table-danger"
    return "table-info"
  }

  private verificarMulta(multa: Date | undefined): string | Date {
    if (multa) return multa
    return ""
  }
  //#endregion

  //#region Deletar leitor
  private async deletarLeitor() {
    if (this.leitorEscolhido && this.leitorEscolhido.id){
      await this.leitorService.deletar(this.leitorEscolhido.id)
    }

    await this.atualizarListaLeitores()
  }
  //#endregion

  private async atualizarListaLeitores() {
    this.leitores = await this.leitorService.pegarTodos()
    let tabelaLeitores = this.getElementById('tabela-leitores') as HTMLTableSectionElement

    tabelaLeitores.innerHTML = await this.updateTable(this.leitores)
  }

  private getElementById(id: string): HTMLElement | null {
    return document.getElementById(id)
  }

  private getElementByClass(classe: string): HTMLCollectionOf<Element> {
    return document.getElementsByClassName(classe)
  }
}