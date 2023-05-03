export class FecharEmprestimo {
  static template(): string {
    return `
      <div class="modal fade" id="form-fechar-emprestimo">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title">Fechar Empréstimo</h1>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button 
                type="button" 
                id="btn-fechar-emprestimo" 
                class="btn btn-primary"
              >
                Devolução
              </button>
            </div>
          </div>
        </div>
      </div>
    `
  }
}