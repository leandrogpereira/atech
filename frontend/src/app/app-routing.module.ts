import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { PessoasComponent } from './pessoas/pessoas.component';

const routes: Routes = [
  { path: '', children: [
    {
      path: '', component: LayoutComponent, children: [
        { path: '', data: { title: 'Listagem de pessoas' } ,component: PessoasComponent }
      ]
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
