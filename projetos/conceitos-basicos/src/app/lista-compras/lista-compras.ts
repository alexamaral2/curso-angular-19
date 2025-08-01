import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ItemLista } from './itemlista';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss'
})
export class ListaCompras {

  item: string = '';
  lista: ItemLista[] = [];

  editando: boolean = false;
  itemEditando: ItemLista | null = null;

  atualizarItemNaLista(){
    let itemOriginal = this.lista.find(item => item.id === this.itemEditando?.id);
    if (itemOriginal) {
      itemOriginal.nome = this.item;
    }
  }

  adicionarItem() {
    if (this.editando && this.itemEditando) {
      this.atualizarItemNaLista();
      this.cancelarEdicao();
    } else {
      let itemLista = new ItemLista();
      itemLista.nome = this.item;
      itemLista.id = this.lista.length + 1;
      this.lista.push(itemLista);
    }

    this.item = '';
  }

  editarItem(itemLista: ItemLista) {
    this.item = itemLista.nome ?? '';
    this.editando = true;
    this.itemEditando = itemLista;
  }

  cancelarEdicao() {
    this.editando = false;
    this.itemEditando = null;
    this.item = '';
  }

  riscarItem(itemLista: ItemLista) {
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista() {
    this.lista = [];
    this.cancelarEdicao();
  }
}
