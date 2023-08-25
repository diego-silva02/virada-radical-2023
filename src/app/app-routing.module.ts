import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ParticipantsCrudComponent } from './views/participants-crud/participants-crud.component';
import { ParticipantsReadComponent } from './components/participants/participants-read/participants-read.component';

const routes: Routes = [{
    path: "",
    component: HomeComponent
  },
  { path: "participantes", component: ParticipantsCrudComponent, children: [
    { path: "tabela", component: ParticipantsReadComponent }
  ]}
  // { path: "gerenciar-pessoa", component: GerenciarPessoasComponent, canActivate: [AuthGuard], children: [
  //   { path: "criar", component: CriarPessoaComponent }
  // ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
