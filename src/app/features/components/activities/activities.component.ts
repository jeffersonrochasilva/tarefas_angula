import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  imports: [],
  template: `
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        style="width: 40px; height: 40px; margin-right: 10px"
        id="checkDefault"
      />
      <label
        class="form-check-label"
        style="font-size: 30px; font-weght: 400"
        for="checkDefault"
      >
        Lavar o carro de manhã
      </label>
      <style>
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      </style>
    </div>
  `,
  styleUrl: './activities.component.less',
})
export class AppActivities {}
