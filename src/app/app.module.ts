import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { buttonOptions } from './Buttons/ButtonOptions/buttonOptions.component';
import { ModalLarge } from './modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    ModalLarge,
    buttonOptions,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
    
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
