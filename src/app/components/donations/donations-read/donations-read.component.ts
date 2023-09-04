import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DonationService } from 'src/app/services/donation.service';
import { Donation } from 'src/app/shared/models/donation.model';

@Component({
  selector: 'app-donations-read',
  templateUrl: './donations-read.component.html',
  styleUrls: ['./donations-read.component.scss']
})
export class DonationsReadComponent {

  constructor(
    private donationService: DonationService,
    private router: Router
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

  editDonation(donation: Donation): void {
    // this.router.navigate([`/Donationes/editar/${donation.id}`]);
  }

  deleteDonation(id: number): void {
    this.donationService.delete(id).subscribe({
      next: () =>{
        console.log('Deletado');
        this.loadDonations();
       },
       error: (ex) =>{
        console.log(ex);
       }
    })
  }
}
