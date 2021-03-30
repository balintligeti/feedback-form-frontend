import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Modal } from './modal/modal.component';
import { Textbox } from './textbox/textbox.component';
import { FormsModule } from '@angular/forms';
import { Emojis } from './emojis/emojis.component';
import {HttpClientModule} from '@angular/common/http'
import { Login } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    Modal,
    Textbox,
    Emojis,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
