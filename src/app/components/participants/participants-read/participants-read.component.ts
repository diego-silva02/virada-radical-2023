import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ParticipantService } from 'src/app/services/participant.service';
import { Participant } from 'src/app/shared/models/participant.model';

@Component({
  selector: 'app-participants-read',
  templateUrl: './participants-read.component.html',
  styleUrls: ['./participants-read.component.scss']
})
export class ParticipantsReadComponent implements OnInit {

  constructor(
    private participantsService: ParticipantService,
    private router: Router
  ) { }
  
  participantsList: Participant[] = [];
  displayedColumns: string[] = ['name', 'age', 'phoneNumber', 'wasPaid', 'actions'];
  dataSource = new MatTableDataSource(this.participantsList);

  ngOnInit(): void {
    this.loadParticipants();
  }

  loadParticipants(): void {
    this.participantsService.read().subscribe(participants => {
      this.participantsList = participants;
      this.dataSource = new MatTableDataSource(this.participantsList);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editParticipant(participant: Participant): void {
    this.router.navigate([`/participantes/editar/${participant.id}`]);
  }

  deleteParticipant(id: number): void {
    this.participantsService.delete(id).subscribe({
      next: () =>{
        console.log('Deletado');
        this.loadParticipants();
       },
       error: (ex) =>{
        console.log(ex);
       }
    })
  }
}
