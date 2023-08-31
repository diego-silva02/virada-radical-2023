import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participants-create',
  templateUrl: './participants-create.component.html',
  styleUrls: ['./participants-create.component.scss']
})
export class ParticipantsCreateComponent {

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
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
      wasPaid: [false, Validators.required],
      valuePaid: [0],
      foodRestriction: [''],
      otherThings: ['']
    })
  }
  
  createParticipant(): void {
    console.log(this.formGroup.value);
  }

  back(): void {
    this.router.navigate(['/participants/tabela'])
  }
}
