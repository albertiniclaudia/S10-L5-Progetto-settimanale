import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componenti/header/header.component';
import { MainComponent } from './Componenti/main/main.component';
import { InserisciTaskComponent } from './Componenti/main/inserisci-task/inserisci-task.component';
import { TodoComponent } from './Pagine/todo/todo.component';
import { CompletatiComponent } from './Pagine/completati/completati.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    InserisciTaskComponent,
    TodoComponent,
    CompletatiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
