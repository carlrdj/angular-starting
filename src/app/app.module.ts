import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { StylusDirective } from './directives/style.directive';
import { TicketService } from './services/ticket.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    StylusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
