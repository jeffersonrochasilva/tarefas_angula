import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CategoryCommponent } from './features/view/category/category.component';

const COMPONENT = [CategoryCommponent];

@Component({
  selector: 'app-root',
  imports: [...COMPONENT],
  template: `
    <div class="app-component">
      <app-category />
    </div>
  `,
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'projeto-angular-less-bootstrap';
}
