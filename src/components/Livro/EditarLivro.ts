export class EditarLivro {
  static template(): string {
    return `
      <div class="modal fade" id="form-editar-livro">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title">Editar Livro</h1>
            </div>

            <div class="modal-body">
              <form id="editar-livro">
                <div class="mb-3">
                  <label for="input-titulo" class="form-label">Título</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="input-editar-titulo" 
                    placeholder="Título">
                </div>

                <div class="mb-3">
                  <label for="input-autor" class="form-label">Autor</label>
                  <input type="text" class="form-control" id="input-editar-autor" placeholder="Autor">
                </div>

                <div class="mb-3>
                  <label for="input-select-status" class="form-label">Status</label>

                  <select id="input-editar-select-status" class="form-select form-select-sm" 
                    aria-label=".form-select-lg example">
                    <option selected value="Disponível">Disponível</option>
                    <option value="Indisponível">Indisponível</option>
                  </select>
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" id="btn-deletar-livro" class="btn btn-primary">Deletar</button>
              <button type="button" id="btn-atualizar-livro" class="btn btn-primary">Atualizar</button>
            </div>
          </div>
        </div>
      </div>
    `
  }
}