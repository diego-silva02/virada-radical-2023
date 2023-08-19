import { Component } from '@angular/core';

@Component({
  selector: 'app-participants-crud',
  templateUrl: './participants-crud.component.html',
  styleUrls: ['./participants-crud.component.scss']
})
export class ParticipantsCrudComponent {

  constructor() {}

  navigateToParticipantCreate(): void {
    console.log('Navegar para tela de criação de participantes');
  }

}
