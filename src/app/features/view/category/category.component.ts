import { AppList } from './../../components/list/list.component';
import { Component } from '@angular/core';
import { AppTags } from '../../components/commom/tags/tags.component';
import { CampComponent } from '../../components/commom/camp/camp.component';
import { AppButton } from '../../components/commom/button/button.component';
import { AppActivities } from '../../components/activities/activities.component';
const COMPONENTS = [AppList, AppTags, CampComponent, AppButton, AppActivities];
@Component({
  selector: 'app-category',
  imports: [...COMPONENTS],
  template: `
    <div class="container-fluid">
      <div class="list">
        <app-list />
        <div class="content_tags">
          <app-tags [cor]="'red'" />
          <app-tags [cor]="'blue'" />
          <app-tags [cor]="'yellow'" />
          <app-tags [cor]="'gray'" />
          <app-tags [cor]="'bronw'" />
          <app-tags [cor]="'pink'" />
          <app-tags [cor]="'green'" />
          <app-tags [cor]="'purple'" />
        </div>
      </div>
      <div class="content-camp">
        <p class="titulo">Meu quadro de tarefas (5)</p>
        <div class="secund-camp">
          <camp-component />
          <app-button />
        </div>
        <div class="box_description">
          <p class="description">Aperte enter para adicionar</p>
        </div>
        <div class="box_activities">
          <app-activities />
        </div>
      </div>
    </div>
  `,
  styleUrl: './category.component.less',
})
export class CategoryCommponent {}
