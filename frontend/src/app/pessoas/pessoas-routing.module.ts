import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoasComponent } from './pages/pessoas.component';


const routes: Routes = [
  { path: '', data: { title: 'Lista de registros' }, component: PessoasComponent },
  { path: 'novo', data: { title: 'Criar novo registro' } , component: PessoaFormComponent },
  {
    path: ':id', children: [
      { path: 'alterar', data: { title: 'Alteração de registro' }, component: PessoaFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PessoasRoutingModule { }
