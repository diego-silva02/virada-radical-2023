import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-participants-edit',
  templateUrl: './participants-edit.component.html',
  styleUrls: ['./participants-edit.component.scss']
})
export class ParticipantsEditComponent implements OnInit {

  formGroup!: FormGroup;
  hasFoodRestriction: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private participantsService: ParticipantService,
    private router: Router,
    private route: ActivatedRoute,
    public alertService: AlertService
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: [''],
      instagram: [''],
      parentsContact: [''],
      age: [null],
      cpf: [''],
      rg: [''],
      wasPaid: [false],
      valuePaid: [null],
      foodRestriction: [''],
      otherThings: ['']
    })
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.participantsService.readById(id).subscribe((participant: any) => {
      participant = participant[0]; // TODO: Remove this and update backend to give one result
      
      this.formGroup = this.formBuilder.group({
        id: [participant.id],
        name: [participant.name, Validators.required],
        phoneNumber: [participant.phoneNumber?.slice(3)],
        instagram: [participant.instagram],
        parentsContact: [participant.parentsContact],
        age: [participant.age],
        cpf: [participant.cpf],
        rg: [participant.rg],
        wasPaid: [participant.wasPaid],
        valuePaid: [participant.valuePaid],
        foodRestriction: [participant.foodRestriction],
        otherThings: [participant.otherThings]
      })
    });
  }

  changeValuePaid(): void {
    this.hasFoodRestriction = !this.hasFoodRestriction;
  }

  editParticipant(): void {
    this.formGroup.value.phoneNumber = '085' + this.formGroup.value.phoneNumber;
    this.participantsService.update(this.formGroup.value.id, this.formGroup.value).subscribe({
      next: () => {
        this.alertService.showMessage('Participante editado, amém <3', 'success');
        this.router.navigate(['/participantes/tabela']);
      },
      error: (ex: any) => {
        this.alertService.showMessage('Um erro ocorreu, Vish!', 'error');
        console.log(ex);
      }
    });
  }

  back(): void {
    this.router.navigate(['/participantes/tabela']);
  }
}
