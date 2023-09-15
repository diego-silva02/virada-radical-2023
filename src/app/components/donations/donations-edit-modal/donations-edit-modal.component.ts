import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert.service';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-donations-edit-modal',
  templateUrl: './donations-edit-modal.component.html',
  styleUrls: ['./donations-edit-modal.component.scss']
})
export class DonationsEditModalComponent {

  formGroup!: FormGroup;

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private donationService: DonationService,
    public alertService: AlertService
  ) {
    this.formGroup = this.formBuilder.group({
      description: [this.data.description, Validators.required],
      amount: [this.data.amount, Validators.required]
    });
  }

  saveDonation(): void {
    this.donationService.update(this.data.id, this.formGroup.value).subscribe({
      next: () => {
        this.alertService.showMessage('Doação editada, Bendito seja Deus!', 'success');
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
