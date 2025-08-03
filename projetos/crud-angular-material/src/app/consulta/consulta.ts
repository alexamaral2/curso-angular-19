import {Component, inject, OnInit} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cadastro/cliente';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    FlexLayoutModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss'
})
export class Consulta implements OnInit {
  nomeBusca: string = '';
  listaClientes: Cliente[] = [];
  colunasTable: string[] = ["id", "nome", "cpf", "dataNascimento", "email", "acoes"];
  snack: MatSnackBar = inject(MatSnackBar);
  constructor(
    private service: ClienteService,
    private router: Router,
    ) {
  }

  ngOnInit(){
    this.listaClientes = this.service.pesquisarClientes('');
  }

  pesquisar(){
    this.listaClientes = this.service.pesquisarClientes(this.nomeBusca);
  }

  preparaEditar(id: string){
    this.router.navigate(['/cadastro'], { queryParams: { 'id' : id } });
  }

  preparaDeletar(cliente : Cliente){
    cliente.deletando = true;
  }

  deletar(cliente : Cliente){
    this.service.deletar(cliente);
    this.listaClientes = this.service.pesquisarClientes('');
    cliente.deletando = false;
    this.snack.open("Item deletado com sucesso!",'Ok');
  }
}
