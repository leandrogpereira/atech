import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalConfirmComponent } from 'src/app/shared/components/modal-confirm/modal-confirm.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {

  public dataSource: any;
  public title = this.route.snapshot.data.title;
  public searchText: string;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadData();
  }

  public alterar(item) {
    this.router.navigate([`pessoas/${item.id}/alterar`]);
  }

  public remover(item) {
    const dialogRef = this.dialog.open(ModalConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiService.delete(`pessoas/${item.id}`)
          .then(sucess => {
            this.loadData();
            this.searchText = '';
          })
          .catch(error => console.log(`Erro: ` + error.error));
      };
    });
  }

  private async loadData() {
    this.dataSource = await this.apiService.get('pessoas');
  }

}
