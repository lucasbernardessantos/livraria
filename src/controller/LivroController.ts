import { LivroComponent } from "../components/Livro/LivrosComponent";
import { Livro } from "../model/Livro";
import { LivroService } from "../service/LivroService";

export class LivroController {
  private livroComponent: LivroComponent
  private livroService: LivroService
  private livros: Livro[] = []
  private livroEscolhido: Livro | null = null

  constructor() {
    this.livroComponent = new LivroComponent()
    this.livroService = new LivroService()
    this.atualizarLivros()
  }

  async getView(): Promise<string> {
    await this.atualizarLivros()
    return this.livroComponent.template(await this.updateTable(this.livros))
  }

  public adicionarEventos(): void {
    let tr = document.getElementsByTagName('tr') as HTMLCollectionOf<HTMLTableRowElement>
    for (let i = 1; i < tr.length; i++) {
      tr[i].addEventListener('click', () => {
        this.montarFormEditar(this.livros[i - 1])
      })
    }

    this.EventoCadastrarLivro()
    this.EventoDeletarLivro()
    this.EventoAtualizarLivro()
  }

  private async atualizarLivros() {
    this.livros = await this.livroService.pegarTodos()
  }

  private async updateTable(livros: Livro[]): Promise<string> {
    let tabelaLivros = ''

    livros.forEach((livro: Livro) => {
      tabelaLivros = `
        ${tabelaLivros}
        <tr data-bs-toggle="modal" data-bs-target="#form-editar-livro">
          <th scope="row">${livro.titulo}</th>
          <td>${livro.autor}</td>
          <td>${livro.status}</td>
        </tr>
      `
    })
    return tabelaLivros
  }

  private montarFormEditar(livro: Livro) {
    let inputTitulo = document.getElementById('input-editar-titulo') as HTMLInputElement
    let inputAutor = document.getElementById('input-editar-autor') as HTMLInputElement
    let inputStatus = document.getElementById('input-editar-select-status') as HTMLSelectElement

    console.log(livro)
    
    console.log(livro.status === "Disponível" ? 0 : 1)

    inputTitulo.value = livro.titulo
    inputAutor.value = livro.autor
    inputStatus.selectedIndex = livro.status === "Disponível" ? 0 : 1
    
    this.livroEscolhido = livro
  }

  private async cadastrarLivro() {
    let livro = this.pegarDadosDoFormularioCadastro()
    await this.livroService.gravar(livro)
    this.atualizarLista()
  }

  private async deletarLivro() {
    if (this.livroEscolhido && this.livroEscolhido.id) {
      await this.livroService.deletar(this.livroEscolhido.id)
    }

    await this.atualizarLista()
  }

  private editarLivro() {
    if (this.livroEscolhido && this.livroEscolhido.id) {
      let livro = this.pegarDadosDoFormularioEditar()
      this.livroService.atualizar(this.livroEscolhido.id, livro)
    }
  }
  
  private pegarDadosDoFormularioCadastro(): Livro {
    let inputTitulo = document.getElementById('input-titulo') as HTMLInputElement
    let inputAutor = document.getElementById('input-autor') as HTMLInputElement
    let inputStatus = document.getElementById('input-select-status') as HTMLSelectElement

    return new Livro(inputTitulo.value, inputAutor.value, inputStatus.value)
  }

  private pegarDadosDoFormularioEditar(): Livro {
    let inputTitulo = document.getElementById('input-editar-titulo') as HTMLInputElement
    let inputAutor = document.getElementById('input-editar-autor') as HTMLInputElement
    let inputStatus = document.getElementById('input-editar-select-status') as HTMLSelectElement

    return new Livro(inputTitulo.value, inputAutor.value, inputStatus.value)
  }

  private async atualizarLista() {
    let tableLivros = document.getElementById('table-livros') as HTMLTableSectionElement

    tableLivros.innerHTML = await this.updateTable(this.livros)
  }

  private EventoCadastrarLivro() {
    let btnCadastrar = document.getElementById('btn-cadastrar-livro') as HTMLButtonElement

    btnCadastrar.addEventListener('click', async (ev: MouseEvent) => {
      ev.preventDefault()
      await this.cadastrarLivro()
    })
  }

  private EventoDeletarLivro() {
    let btnDeletar = document.getElementById('btn-deletar-livro') as HTMLButtonElement

    btnDeletar.addEventListener('click', (ev: MouseEvent) => {
      ev.preventDefault()
      this.deletarLivro()
    })
  }

  private EventoAtualizarLivro() {
    let btnAtualizar = document.getElementById('btn-atualizar-livro') as HTMLButtonElement

    btnAtualizar.addEventListener('click', (ev: MouseEvent) => {
      ev.preventDefault()
      this.editarLivro()
    })
  }
}