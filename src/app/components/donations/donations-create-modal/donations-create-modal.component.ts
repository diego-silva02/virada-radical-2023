import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert.service';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-donations-create-modal',
  templateUrl: './donations-create-modal.component.html',
  styleUrls: ['./donations-create-modal.component.scss']
})
export class DonationsCreateModalComponent {

  formGroup!: FormGroup;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private donationService: DonationService,
    public alertService: AlertService
  ) {
    this.formGroup = this.formBuilder.group({
      description: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  saveDonation(): void {
    this.donationService.create(this.formGroup.value).subscribe({
      next: () => {
        this.alertService.showMessage('Bendito seja Deus, outra doação!', 'success');
        this.dialog.closeAll();
      },
      error: (ex: any) => {
        this.alertService.showMessage('Um erro ocorreu, Vish!', 'error');
        console.log(ex);
      }
    });
  }

  close(): void {
    this.dialog.closeAll();
  }
}
