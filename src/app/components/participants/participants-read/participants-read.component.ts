import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
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
    private router: Router,
    public alertService: AlertService
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
      next: () => {
        this.alertService.showMessage('Participante removido, rezemos mais!', 'success');
        this.loadParticipants();
       },
       error: (ex) => {
        this.alertService.showMessage('Um erro ocorreu, Vish!', 'error');
        console.log(ex);
       }
    })
  }
}
