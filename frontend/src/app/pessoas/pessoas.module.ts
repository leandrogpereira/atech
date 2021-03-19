import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PessoasComponent } from './pages/pessoas.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoasRoutingModule } from './pessoas-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    PessoasComponent,
    PessoaFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PessoasRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class PessoasModule { }
