import { Component } from '@angular/core';

@Component({
  selector: 'camp-component',
  imports: [],
  template: `
    <input class="camp" placeholder="digite sua atividade" />
    <!-- <div class="container">
      <div class="row">
        <div class="col-12">
          <input
            type="text"
            class="form-control bg-light text-white"
            aria-label="Text input with segmented dropdown button"
          />
        </div>
      </div>
    </div> -->
  `,
  styleUrl: './camp.component.less',
})
export class CampComponent {}
