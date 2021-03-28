import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalLarge } from './modal/modal.component';
import { Textbox } from './textbox/textbox.component';
import { FormsModule } from '@angular/forms';
import { FirstEmoji } from './emojis/1/first.component';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ModalLarge,
    Textbox,
    FirstEmoji
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
