export class CadastrarEmprestismo {
  static template(): string {
    return `
      <div class="modal fade" id="form-cadastrar-emprestimo"
      tabindex="-1" aria-labelledby="formEmprestimo" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title">Cadastrar Empréstimo</h1>
            </div>

            <div class="modal-body">
              <form>
                <div class="mb-3>
                  <label for="input-select-leitor" class="form-label">Leitor</label>

                  <select id="input-select-leitor" class="form-select form-select-sm" 
                    aria-label=".form-select-lg example">
                  </select>
                </div>

                <div class="mb-3>
                  <label for="input-select-leitor" class="form-label">Livro</label>

                  <select id="input-select-livro" class="form-select form-select-sm" 
                    aria-label=".form-select-lg example">
                  </select>
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button 
                type="button" 
                id="btn-cadastrar-emprestimo" 
                class="btn btn-primary"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
    `
  }
}