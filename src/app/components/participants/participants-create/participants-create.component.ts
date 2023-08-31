import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParticipantService } from 'src/app/services/participant.service';
import { Router } from '@angular/router';

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
    private router: Router
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
        console.log('Deu certo');
        this.router.navigate(['/participantes/tabela']);
      },
      error: (ex: any) => {
        console.log('Deu errado', ex);
      }
    });
  }

  back(): void {
    this.router.navigate(['/participantes/tabela']);
  }
}
