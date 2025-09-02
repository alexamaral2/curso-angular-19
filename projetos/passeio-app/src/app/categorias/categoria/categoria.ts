import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss'
})
export class Categoria {
  camposForm: FormGroup;

  constructor() {
    this.camposForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      descricao: new FormControl('', [Validators.required]),
    });
  }

  salvar(){
    this.camposForm.markAllAsTouched();
    if(this.camposForm.valid){
      console.log('valores digitados: ', this.camposForm.value);
    }
  }

  isCampoInvalido(nomeCampo : string){
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.hasError('required');
  }
}
