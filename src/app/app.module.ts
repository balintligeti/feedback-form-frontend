import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalLarge } from './modal/modal.component';
import { buttonOptions } from './Buttons/ButtonOptions/buttonOptions.component';
@NgModule({
  declarations: [
    AppComponent,
    NgbdModalLarge,
    buttonOptions
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
