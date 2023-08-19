import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Participant } from 'src/app/shared/models/participant.model';

@Component({
  selector: 'app-participants-read',
  templateUrl: './participants-read.component.html',
  styleUrls: ['./participants-read.component.scss']
})
export class ParticipantsReadComponent {

  constructor() {}

  participantsList: Participant[] = [
    {
      id: 1,
      name: "Robert Costa",
      phoneNumber: "085940028922",
      instagram: "@johndoe",
      parentsContact: "9876543210",
      age: 20,
      cpf: "123.456.789-01",
      rg: "12345678",
      wasPaid: true,
      valuePaid: 100,
      foodRestriction: "Vegetariano, Alergia a nozes",
      otherThings: ""
    }, {
      id: 2,
      name: "Jane Barros",
      phoneNumber: "085989224002",
      instagram: "@janesmith",
      parentsContact: "5551234567",
      age: 16,
      cpf: "987.654.321-09",
      rg: "87654321",
      wasPaid: false,
      foodRestriction: "Nenhuma",
      otherThings: ""
    },
  ];

  displayedColumns: string[] = ['name','age', 'phoneNumber', 'wasPaid'];
  dataSource = new MatTableDataSource(this.participantsList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
