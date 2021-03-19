import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { PessoasComponent } from './pessoas/pages/pessoas.component';

const routes: Routes = [
  { path: '', children: [
    {
      path: '', component: LayoutComponent, children: [
        { path: '', data: { title: 'Lista de registros' }, component: PessoasComponent },
        {
          path: 'pessoas',
          loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule)
        }
      ]
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
