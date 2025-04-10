import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <!-- <button
      class="btn btn-outline-secondary"
      style="background: #E1DEDE; color: white; width: 135px"
      type="button"
      id="inputGroupFileAddon04"
    >
      Button
    </button> -->
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categorias
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Trabalho</a></li>
        <li><a class="dropdown-item" href="#">Casa</a></li>
        <li><a class="dropdown-item" href="#">Pessoal</a></li>
        <li><a class="dropdown-item" href="#">Escola</a></li>
        <li><a class="dropdown-item" href="#">Saúde</a></li>
      </ul>
    </div>
  `,
  styles: '',
})
export class AppButton {}
