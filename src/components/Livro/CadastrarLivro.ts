export class CadastrarLivro {
  static template(): string {
    return `
      <div class="modal fade" id="form-cadastrar-livro" 
        tabindex="-1" aria-labelledby="formLivros" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title">Cadastrar Livro</h1>
            </div>

            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="input-titulo" class="form-label">Título</label>
                  <input type="text" class="form-control" id="input-titulo" placeholder="Título">
                </div>

                <div class="mb-3">
                  <label for="input-autor" class="form-label">Autor</label>
                  <input type="text" class="form-control" id="input-autor" placeholder="Autor">
                </div>

                <div class="mb-3>
                  <label for="input-select-status" class="form-label">Status</label>

                  <select id="input-select-status" class="form-select form-select-sm" 
                    aria-label=".form-select-lg example">
                    <option selected value="Disponível">Disponível</option>
                    <option value="Indisponível">Indisponível</option>
                  </select>
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" id="btn-cadastrar-livro" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    `
  }
}