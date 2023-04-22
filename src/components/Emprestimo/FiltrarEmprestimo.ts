export class FiltrarEmprestimo {
  static template(): string {
    return `
      <div class="modal fade" id="form-montar-filtro" tabindex="-1" aria-labelledby="formFiltro" 
      aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title">Filtros</h1>
            </div>

            <div class="modal-body">    
              <form>
                <div class="mb-3>
                  <label for="input-select-leitor" class="form-label">Leitor</label>

                  <select id="input-select-status" class="form-select form-select-sm" 
                    aria-label=".form-select-lg example">
                    <option selected>Selecionar leitor</option>
                  </select>
                </div>

                <div class="mb-3>
                  <label for="input-select-leitor" class="form-label">Livro</label>

                  <select id="input-select-livro" class="form-select form-select-sm" 
                    aria-label=".form-select-lg example">
                    <option selected>Selecionar livro</option>
                  </select>
                </div>

                <div class="mb-3>
                  <label for="input-select-status" class="form-label">Status</label>

                  <select id="input-select-status" class="form-select form-select-sm" 
                    aria-label=".form-select-lg example">
                    <option selected value="disponivel">Aberto</option>
                    <option value="indisponivel">Fechado</option>
                    <option value="indisponivel">Pendente</option>
                  </select>
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Filtrar</button>
            </div>
          </div>
        </div>
      </div>
    `
  }
}