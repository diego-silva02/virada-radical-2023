import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParticipantService } from 'src/app/services/participant.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-participants-create',
  templateUrl: './participants-create.component.html',
  styleUrls: ['./participants-create.component.scss']
})
export class ParticipantsCreateComponent {

  formGroup!: FormGroup;
  hasFoodRestriction: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private participantsService: ParticipantService,
    private router: Router,
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

  changeValuePaid(): void {
    this.hasFoodRestriction = !this.hasFoodRestriction;
  }
  
  createParticipant(): void {
    this.formGroup.value.phoneNumber = '085' + this.formGroup.value.phoneNumber;
    this.participantsService.create(this.formGroup.value).subscribe({
      next: () => {
        this.alertService.showMessage('Participante adicionado, amém <3', 'success');
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
