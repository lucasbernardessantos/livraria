export class FiltrarLeitor {
  static template(): string {
    return `
      <div class="modal fade" id="form-montar-filtro" tabindex="-1" aria-labelledby="formFiltro" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title">Filtros</h1>
            </div>

            <div class="modal-body">    
              <form>
                <div class="mb-3">
                  <label for="input-nome" class="form-label">Nome</label>
                  <input type="text" class="form-control" id="input-nome" placeholder="Nome Completo">
                </div>

                <div class="mb-3">
                  <label for="input-email" class="form-label">Email</label>
                  <input type="text" class="form-control" id="input-email" placeholder="Email">
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