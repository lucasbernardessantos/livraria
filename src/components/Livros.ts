export class Livros {

  template(): string {
    return `
      <div class="m-3 d-flex justify-content-between align-items-center">
        <button class="btn btn-primary" type="submit">Filtrar</button>

        Livros

        <button class="btn btn-primary" type="submit">
          <i class="fa-sharp fa-regular fa-plus"></i>
        </button>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th class="scope">Id</th>
            <th class="scope">Título</th>
            <th class="scope">Autor</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th class="scope">1</th>
            <td>O Ladrão de Raios</td>
            <td>Rick Ryordan</td>
          </tr>

          <tr>
            <th class="scope">2</th>
            <td>A Biblioteca da Meia-Noite</td>
            <td>Matt Haig</td>
          </tr>

          <tr>
            <th class="scope">3</th>
            <td>A guerra das duas rainhas</td>
            <td>Jennifer L. Armentrout</td>
          </tr>
        </tbody>
      </table>
    `
  }

}