import { CadastrarLeitor } from "./CadastrarLeitor"
import { EditarLeitor } from "./EditarLeitor"
import { FiltrarLeitor } from "./FiltrarLeitor"

export class LeitorComponent {

  template(leitores: string): string {
    return `
      <div class="m-3 d-flex justify-content-between align-items-center">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#form-montar-filtro">
          Filtrar
        </button>

        Leitores

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" 
          data-bs-target="#form-cadastrar-leitor">
          <i class="fa-sharp fa-regular fa-plus"></i>
        </button>
      </div>

      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="scope">Nome</th>
              <th class="scope">Email</th>
              <th class="scope">Status</th>
              <th class="scope">Multa</th>
            </tr>
          </thead>
          <tbody id="tabela-leitores">
            ${leitores}
          </tbody>
        </table>
      </div>

      ${CadastrarLeitor.template()}

      ${FiltrarLeitor.template()}

      ${EditarLeitor.template()}
    `
  }
}