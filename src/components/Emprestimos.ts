export class Emprestimos {

  template(): string {
    return `
      <div class="m-3 d-flex justify-content-between align-items-center">
        <button class="btn btn-primary" type="submit">Filtrar</button>

        Emprestimos

        <button class="btn btn-primary" type="submit">
          <i class="fa-sharp fa-regular fa-plus"></i>
        </button>
      </div>
      
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="scope">Id</th>
            <th class="scope">Leitor</th>
            <th class="scope">Título</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th class="scope">1</th>
            <td>Lucas</td>
            <td>O Ladrão de Raios</td>
          </tr>

          <tr>
            <th class="scope">2</th>
            <td>Guilherme</td>
            <td>A Biblioteca da Meia-Noite</td>
          </tr>

          <tr>
            <th class="scope">3</th>
            <td>Lucas</td>
            <td>A guerra das duas rainhas</td>
          </tr>
        </tbody>
      </table>
    `
  }

}