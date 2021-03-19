import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  @Input() nomePessoa: string;

  constructor() { }

  ngOnInit(): void {
  }

}
