import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ParticipantsCrudComponent } from './views/participants-crud/participants-crud.component';

const routes: Routes = [{
    path: "",
    component: HomeComponent
  },
  {
    path: "participantes",
    component: ParticipantsCrudComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
