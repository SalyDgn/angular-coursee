import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { FooterComponent } from './footer/footer.component';
import { AjoutEleveComponent } from './ajout-eleve/ajout-eleve.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    FooterComponent,
    AjoutEleveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
