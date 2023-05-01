import { CadastrarLivro } from "./CadastrarLivro"
import { FiltrarLivro } from "./FiltrarLivro"
import { EditarLivro } from "./EditarLivro"

export class LivroComponent {

  template(livros: string): string {
    return `
      <div class="m-3 d-flex justify-content-between align-items-center">
        <button class="btn btn-primary" type="button" data-bs-toggle="modal"
          data-bs-target="#form-montar-filtro">
          Filtrar
        </button>

        Livros

        <button class="btn btn-primary" type="button" data-bs-toggle="modal"
          data-bs-target="#form-cadastrar-livro">
          <i class="fa-sharp fa-regular fa-plus"></i>
        </button>
      </div>

      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="scope">Título</th>
              <th class="scope">Autor</th>
              <th class="scope">Status</th>
            </tr>
          </thead>

          <tbody id="table-livros">
            ${livros}
          </tbody>
        </table>
      </div>

      ${CadastrarLivro.template()}

      ${FiltrarLivro.template()}

      ${EditarLivro.template()}
    `
  }
}