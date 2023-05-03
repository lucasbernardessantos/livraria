import { CadastrarEmprestismo } from "./CadastrarEmprestimo"
import { FecharEmprestimo } from "./FecharEmprestimo"
import { FiltrarEmprestimo } from "./FiltrarEmprestimo"

export class EmprestimoComponent {

  template(emprestimos: string): string {
    return `
      <div class="m-3 d-flex justify-content-between align-items-center">
        <button class="btn btn-primary" type="button" data-bs-toggle="modal"
        data-bs-target="#form-montar-filtro">
          Filtrar
        </button>

        Emprestimos

        <button class="btn btn-primary" type="button" data-bs-toggle="modal"
          data-bs-target="#form-cadastrar-emprestimo">
          <i class="fa-sharp fa-regular fa-plus"></i>
        </button>
      </div>
      
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="scope">Id</th>
              <th class="scope">Leitor</th>
              <th class="scope">Título</th>
              <th class="scope">Retirada</th>
              <th class="scope">Devolução</th>
              <th class="scope">Status</th>
            </tr>
          </thead>
          <tbody>
            ${emprestimos}
          </tbody>
        </table>
      </div>

      ${CadastrarEmprestismo.template()}

      ${FiltrarEmprestimo.template()}

      ${FecharEmprestimo.template()}
    `
  }
}