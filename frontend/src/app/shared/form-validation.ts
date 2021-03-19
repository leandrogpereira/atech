import { FormControl } from '@angular/forms';

export class FormValidations {

  static somenteLetras(control: FormControl) {
    const nome = control.value;
    if (nome && nome !== '') {
      const validaNome = /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÒÖÚÇÑ ]+$/;
      return validaNome.test(nome) ? null : { nomeInvalido: true};
    }

    return null;
  }

  static maioridade(controle: FormControl) {
    const nascimento = controle.value;
    const [ano, mes, dia] = nascimento.split('-').map(Number);

    const depois18 = new Date(ano + 18, mes - 1, dia);
    const hoje = new Date();

    if (depois18 <= hoje) {
      return null;
    }

    return { menorDeIdade: true };
  }
}
