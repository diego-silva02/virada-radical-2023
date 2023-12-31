import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ParticipantsCrudComponent } from './views/participants-crud/participants-crud.component';
import { ParticipantsReadComponent } from './components/participants/participants-read/participants-read.component';
import { ParticipantsCreateComponent } from './components/participants/participants-create/participants-create.component';
import { ParticipantsEditComponent } from './components/participants/participants-edit/participants-edit.component';
import { DonationsCrudComponent } from './views/donations-crud/donations-crud.component';
import { DonationsReadComponent } from './components/donations/donations-read/donations-read.component';
import { DonationsCreateModalComponent } from './components/donations/donations-create-modal/donations-create-modal.component';
import { DonationsEditModalComponent } from './components/donations/donations-edit-modal/donations-edit-modal.component';
import { ServantsCrudComponent } from './views/servants-crud/servants-crud.component';
import { ServantsReadComponent } from './components/servants/servants-read/servants-read.component';
import { ServantsCreateComponent } from './components/servants/servants-create/servants-create.component';
import { AlertComponent } from './components/alert/alert.component';

import { PhoneNumberPipe } from './shared/pipes/phone-number.pipe';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ParticipantsCrudComponent,
    ParticipantsReadComponent,
    ParticipantsCreateComponent,
    ParticipantsEditComponent,
    DonationsCrudComponent,
    DonationsReadComponent,
    DonationsCreateModalComponent,
    DonationsEditModalComponent,
    ServantsCrudComponent,
    ServantsReadComponent,
    ServantsCreateComponent,
    AlertComponent,
    PhoneNumberPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ConfirmationPopoverModule.forRoot({
      focusButton: 'confirm',
    }),
  ],
  providers: [
    provideEnvironmentNgxMask(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
