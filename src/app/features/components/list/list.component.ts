import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  template: `
    <div class="list">
      <ul class="box_list">
        <li class="title_list">Categorias</li>
        <li class="text_list">Casa</li>
        <li class="text_list">Estudo</li>
        <li class="text_list">Trabalho</li>
        <li class="text_list">Pessoal</li>
        <li class="text_list">Saúde</li>
      </ul>
    </div>
  `,
  styleUrl: './list.component.less',
})
export class AppList {}
