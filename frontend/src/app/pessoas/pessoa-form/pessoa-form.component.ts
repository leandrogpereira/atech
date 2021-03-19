import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import * as moment from 'moment';
import { FormValidations } from 'src/app/shared/form-validation';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss']
})
export class PessoaFormComponent implements OnInit {

  public form: FormGroup;
  public title = this.route.snapshot.data.title;
  private id = this.route.snapshot.params.id;
  public maxDate = moment(new Date()).format('DD/MM/YYYY');
  public habilitaParceiro = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    if (this.id) {
      this.loadData(this.id);
    } else {
      this.form = this.formBuilder.group({
        nome: ['', [Validators.required, Validators.minLength(5), FormValidations.somenteLetras]],
        dataNascimento: ['', [Validators.required, FormValidations.maioridade]],
        estadoCivil: ['', [Validators.required]],
        nomeParceiro: [''],
        dataNascimentoParceiro: ['']
      });
    };
  }

  private loadData(id) {
    this.apiService.get(`pessoas/${id}`).then(data => {
      this.form = this.formBuilder.group({
        id: [data.id],
        nome: [data.nome, [Validators.required, Validators.minLength(5), FormValidations.somenteLetras]],
        dataNascimento: [data.dataNascimento, [Validators.required, FormValidations.maioridade]],
        estadoCivil: [data.estadoCivil, [Validators.required]],
        nomeParceiro: [data.nomeParceiro],
        dataNascimentoParceiro: [data.dataNascimentoParceiro]
      });
      this.verificaEstadoCivil();
    })
    .catch(error => console.log(error.error));
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.id) {
        this.apiService.patch(`pessoas/${this.id}`, this.form.value)
          .then(() => this.router.navigate([`/pessoas`]))
          .catch(data => console.log(data));
      } else {
        this.apiService.post('pessoas', this.form.value)
          .then(() => this.router.navigate([`/pessoas`]))
          .catch(data => console.log(data));
      }
    }
  }

  voltar() {
    this.router.navigate(['/']);
  }

  public verificaEstadoCivil() {
    if (this.form.get('estadoCivil').value === '1') {
      this.habilitaParceiro = true;
      this.form.get('nomeParceiro').setValidators([Validators.required, Validators.minLength(5), FormValidations.somenteLetras]);
      this.form.get('nomeParceiro').updateValueAndValidity();
      this.form.get('dataNascimentoParceiro').setValidators([Validators.required]);
      this.form.get('dataNascimentoParceiro').updateValueAndValidity();
    } else {
      this.habilitaParceiro = false;
      this.form.get('nomeParceiro').clearValidators();
      this.form.get('nomeParceiro').updateValueAndValidity();
      this.form.get('dataNascimentoParceiro').clearValidators();
      this.form.get('dataNascimentoParceiro').updateValueAndValidity();
    }
  }

  public limpaInputParceiro() {
    this.form.patchValue({
      nomeParceiro: '',
      dataNascimentoParceiro: ''
    });
  }
}
