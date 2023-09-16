import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ServantService } from 'src/app/services/servant.service';

@Component({
  selector: 'app-servants-create',
  templateUrl: './servants-create.component.html',
  styleUrls: ['./servants-create.component.scss']
})
export class ServantsCreateComponent {

  formGroup!: FormGroup;
  servicesList: any[] = [
    { value: "financeiro", viewValue: "Financeiro" },
    { value: "alojamento", viewValue: "Alojamento" },
    { value: "servoSeminario", viewValue: "Servos de Seminário" },
    { value: "musica", viewValue: "Música" },
    { value: "liturgia", viewValue: "Liturgia" },
    { value: "cozinha", viewValue: "Alimentação/Cozinha" },
    { value: "lazer", viewValue: "Lazer" },
    { value: "limpeza", viewValue: "Limpeza" },
    { value: "estrutura", viewValue: "Estrutura" },
    { value: "comunicacao", viewValue: "Comunicação" },
    { value: "intercessao", viewValue: "Intercessão" },
    { value: "oracaoAconselhamento", viewValue: "Oração e aconselhamento" },
    { value: "outro", viewValue: "Outro" },
  ];
  otherService: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private servantService: ServantService,
    private router: Router,
    public alertService: AlertService
    ) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: [''],
      cev: [''],
      prayerGroup: [''],
      service: [''],
      age: [null],
      wasPaid: [false],
      valuePaid: [null],
      otherThings: ['']
    })
  }

  changeOtherService(event: any): void {
    if(this.formGroup.value.service == 'outro')
      this.otherService = event.target.value;
  }

  createServant(): void {
    this.formGroup.value.phoneNumber = '085' + this.formGroup.value.phoneNumber;

    if(this.formGroup.value.service == 'outro')
      this.formGroup.value.service = this.otherService;

    this.servantService.create(this.formGroup.value).subscribe({
      next: () => {
        this.alertService.showMessage('Servo adicionado, amém <3', 'success');
        this.router.navigate(['/servos/tabela']);
      },
      error: (ex: any) => {
        this.alertService.showMessage('Um erro ocorreu, Vish!', 'error');
        console.log(ex);
      }
    });
  }

  back(): void {
    this.router.navigate(['/servos/tabela']);
  }
}
