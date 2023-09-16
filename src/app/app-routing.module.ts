import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ParticipantsCrudComponent } from './views/participants-crud/participants-crud.component';
import { ParticipantsReadComponent } from './components/participants/participants-read/participants-read.component';
import { ParticipantsCreateComponent } from './components/participants/participants-create/participants-create.component';
import { ParticipantsEditComponent } from './components/participants/participants-edit/participants-edit.component';
import { DonationsCrudComponent } from './views/donations-crud/donations-crud.component';
import { DonationsReadComponent } from './components/donations/donations-read/donations-read.component';
import { ServantsCrudComponent } from './views/servants-crud/servants-crud.component';
import { ServantsReadComponent } from './components/servants/servants-read/servants-read.component';
import { ServantsCreateComponent } from './components/servants/servants-create/servants-create.component';

const routes: Routes = [{
    path: "",
    component: HomeComponent
  },
  { path: "participantes", component: ParticipantsCrudComponent, children: [
    { path: "tabela", component: ParticipantsReadComponent },
    { path: "novo", component: ParticipantsCreateComponent },
    { path: "editar/:id", component: ParticipantsEditComponent }
  ]},
  { path: "doacoes", component: DonationsCrudComponent, children: [
    { path: "tabela", component: DonationsReadComponent }
  ]},
  { path: "servos", component: ServantsCrudComponent, children: [
    { path: "tabela", component: ServantsReadComponent },
    { path: "novo", component: ServantsCreateComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
