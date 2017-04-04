import { Component } from '@angular/core';
import { InputComponent } from './input/input.component';
import { TicketService } from './services/ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name = 'Carlos';
  eventoClick():void{
  	console.log('Click me');
  	this.name = this.name.toUpperCase();
  }

 votos=[
 {voto:'XE'},
 {voto:' SS AS DASD'},
 {voto:'DAS DASD ASFASF'},
 {voto:'XE asd asd asd'}
 ]
 votacion:string;

 addVoto(response:string){
 	this.votacion='se voto por ' + response;
 }

 tickets:any;
 constructor(private ticketService : TicketService){
 	this.tickets = ticketService.getTicket();
 }
}
