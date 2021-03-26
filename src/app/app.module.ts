import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { buttonOptions } from './buttons/ButtonOptions/buttonOptions.component';
import { ModalLarge } from './modal/modal.component';
import { Textbox } from './textbox/textbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalLarge,
    buttonOptions,
    Textbox,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
    
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
