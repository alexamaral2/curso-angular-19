import { Injectable } from '@angular/core';
import {Cliente} from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor() {}

  salvar(cliente: Cliente){
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  atualizar(cliente: Cliente) {
    const storage = this.obterStorage();
    storage.forEach(c => {
      if(c.id == cliente.id){
        Object.assign(c, cliente);
      }
    })
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  pesquisarClientes(nomeBusca: string) : Cliente[]{

    const clientes = this.obterStorage();

    if(!nomeBusca) {
      return clientes;
    }

    return clientes.filter(cliente => cliente.nome?.indexOf(nomeBusca) !== -1);
  }

  buscarClientePorId(id: string) : Cliente | undefined {
    const cliente = this.obterStorage();
    return cliente.find(cliente => cliente.id == id);
  }

  obterStorage() : Cliente []{
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if (repositorioClientes){
      const clientes : Cliente[] = JSON.parse(repositorioClientes);
      return clientes;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }

}
