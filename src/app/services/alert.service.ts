import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from '../components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private snackBar: MatSnackBar) { }
  
  showMessage(msg: string, type: string = 'success'): void {
    this.snackBar.openFromComponent(AlertComponent, {
      data: {
        'msg': msg, 'type': type, 'close': () => {
          this.snackBar.dismiss()
        }
      },
      duration: 3600,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: type == 'success' ? ['msg-success'] : ['msg-error']
    }
    )
  }
}
