import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // Adicione aqui outros componentes, diretivas e pipes
  ],
  imports: [
    BrowserModule,
    // Adicione aqui outros módulos necessários
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
