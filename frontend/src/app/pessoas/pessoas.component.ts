import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {

  dataSource: any;
  title = this.route.snapshot.data.title;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.dataSource = await this.apiService.get('pessoas');
    console.log(this.dataSource);
  }

}
