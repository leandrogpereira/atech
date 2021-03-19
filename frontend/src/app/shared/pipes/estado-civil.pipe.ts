import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoCivil'
})
export class EstadoCivilPipe implements PipeTransform {

  transform(value: any): string {
    if (value === null || value === undefined || value === '') {
      return null;
    }

    let status: string;
    switch(value) {
      case "1": {
         status = "Casado(a)";
         break;
      }
      case "2": {
        status = "Solteiro(a)"
        break;
      }
      case "3": {
        status = "Viúvo(a)"
        break;
      }
      case "4": {
        status = "Separado(a) judicialmente"
        break;
      }
      default: {
         status = "Divorciado(a)"
         break;
      }
    }

    return status;
  }

}
