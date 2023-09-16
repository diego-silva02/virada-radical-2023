import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ServantService } from 'src/app/services/servant.service';
import { Servant } from 'src/app/shared/models/servant.model';

@Component({
  selector: 'app-servants-read',
  templateUrl: './servants-read.component.html',
  styleUrls: ['./servants-read.component.scss']
})
export class ServantsReadComponent {

  constructor(
    private servantsService: ServantService,
    private router: Router,
    public alertService: AlertService
  ) { }

  servantsList: Servant[] = [];
  displayedColumns: string[] = ['name', 'age', 'phoneNumber', 'wasPaid', 'actions'];
  dataSource = new MatTableDataSource(this.servantsList);

  ngOnInit(): void {
    this.loadServants();
  }

  loadServants(): void {
    this.servantsService.read().subscribe(servants => {
      this.servantsList = servants;
      this.dataSource = new MatTableDataSource(this.servantsList);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editServant(servant: Servant): void {
    // this.router.navigate([`/servos/editar/${servant.id}`]);
  }

  deleteServant(id: number): void {
    this.servantsService.delete(id).subscribe({
      next: () => {
        this.alertService.showMessage('Servo removido, rezemos mais!', 'success');
        this.loadServants();
       },
       error: (ex) => {
        this.alertService.showMessage('Um erro ocorreu, Vish!', 'error');
        console.log(ex);
       }
    })
  }

}
