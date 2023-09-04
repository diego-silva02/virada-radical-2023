import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
    private donationService: DonationService
  ) {
    this.formGroup = this.formBuilder.group({
      description: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  saveDonation(): void {
    this.donationService.create(this.formGroup.value).subscribe({
      next: () => {
        this.dialog.closeAll();
      },
      error: (ex: any) => {
        console.log('Deu erro', ex);
      }
    });
  }

  close(): void {
    this.dialog.closeAll();
  }
}
