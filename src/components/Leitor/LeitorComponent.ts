import { CadastrarLeitor } from "./cadastrarLeitor/CadastrarLeitor"
import { FiltrarLeitor } from "./filtrarLeitor/FiltrarLeitor"

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
              <th class="scope">Id</th>
              <th class="scope">Nome</th>
              <th class="scope">Email</th>
            </tr>
          </thead>
          <tbody>
            ${leitores}
          </tbody>
        </table>
      </div>

      ${CadastrarLeitor.template()}

      ${FiltrarLeitor.template()}
    `
  }
}