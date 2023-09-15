import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DonationService } from 'src/app/services/donation.service';
import { Donation } from 'src/app/shared/models/donation.model';
import { DonationsCreateModalComponent } from '../donations-create-modal/donations-create-modal.component';
import { AlertService } from 'src/app/services/alert.service';
import { DonationsEditModalComponent } from '../donations-edit-modal/donations-edit-modal.component';

@Component({
  selector: 'app-donations-read',
  templateUrl: './donations-read.component.html',
  styleUrls: ['./donations-read.component.scss']
})
export class DonationsReadComponent {

  constructor(
    private donationService: DonationService,
    public dialog: MatDialog,
    public alertService: AlertService
  ) { }
  
  donationsList: Donation[] = [];
  displayedColumns: string[] = ['description', 'amount', 'actions'];
  dataSource = new MatTableDataSource(this.donationsList);

  ngOnInit(): void {
    this.loadDonations();
  }

  loadDonations(): void {
    this.donationService.read().subscribe(donations => {
      this.donationsList = donations;
      this.dataSource = new MatTableDataSource(this.donationsList);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createDonation(): void {
    const dialog = this.dialog.open(DonationsCreateModalComponent);

    dialog.afterClosed().subscribe(() => {
      this.loadDonations();
    })
  }

  editDonation(donation: Donation): void {
    const dialog = this.dialog.open(DonationsEditModalComponent, { data: donation });

    dialog.afterClosed().subscribe(() => {
      this.loadDonations();
    })
  }

  deleteDonation(id: number): void {
    this.donationService.delete(id).subscribe({
      next: () => {
        this.alertService.showMessage('Doação removida, Poxa!', 'success');
        this.loadDonations();
       },
       error: (ex) => {
        this.alertService.showMessage('Um erro ocorreu, Vish!', 'error');
        console.log(ex);
       }
    })
  }
}
