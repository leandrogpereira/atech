import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';


import { DateFormatPipe } from './pipes/date-format.pipe';
import { NullPipe } from './pipes/null.pipe';
import { EstadoCivilPipe } from './pipes/estado-civil.pipe';

@NgModule({
  declarations: [
    ModalConfirmComponent,
    FilterPipe,
    DateFormatPipe,
    NullPipe,
    EstadoCivilPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports: [
    ModalConfirmComponent,
    FilterPipe,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    DateFormatPipe,
    NullPipe,
    EstadoCivilPipe
  ],
  providers: [
    FilterPipe,
    DateFormatPipe,
    NullPipe,
    EstadoCivilPipe
  ]
})
export class SharedModule { }
