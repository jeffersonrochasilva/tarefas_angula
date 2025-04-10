import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-tags',
  imports: [],
  template: `
    <div class="tags" [style.background]="cor">
      <p class="title">hello Tags</p>
    </div>
  `,
  styleUrl: './tags.component.less',
})
export class AppTags {
  @Input() cor: string = 'white';
}
