import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { projetoModel } from '../../app/models/projetoModel';
import { ProjetosProvider } from '../../providers/projetos/projetos';
import { configHelper } from '../../app/helpers/configHelper';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { clienteModel } from '../../app/models/clienteModel';

/**
 * Generated class for the ProjetosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})
export class ProjetosPage implements OnInit{
listaProjetos: Array<projetoModel> = new Array<projetoModel>();
cliente: Array<clienteModel> = new Array<clienteModel>();
clienteId = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public projetoSrvc: ProjetosProvider,
    private clienteSrvc: ClientesProvider
  
    ) {
      this._loadProjetos();
     console.log('Lista de projetos', this.listaProjetos)
  }

  ngOnInit(): void {
    this._loadProjetos();
    console.log('Lista de projetos', this.listaProjetos)

  }

/*
  async loadCliente(): Promise<void> {
    try {
      let result = await this.clienteSrvc.getByIdClient(this.clienteId.toString());
      if (result.success) {
        this.cliente = <Array<clienteModel>>result.data;
        console.log("CLiente responsável", this.cliente);
      }
    } catch (error) {}
  }*/

  async _loadProjetos(): Promise<void> {
    let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
      console.log('Usuário logado',user)
    try {
      let result = await this.projetoSrvc.projetobyIdUser(user._id);
      if (result.success) {
        this.listaProjetos = <Array<projetoModel>>result.data;
        console.log('projetos: ', this.listaProjetos)
      }
    } catch (error) {}
  }
  

  async deletar(): Promise<void> {
      let result = await this.projetoSrvc.get()
      this.listaProjetos = <Array<projetoModel>>result.data
      console.log('IDs',this.listaProjetos)
      //await this.projetoSrvc.delete(this.listaProjetos);
  }

  abrirCadastro(model?: projetoModel){
    this.navCtrl.push('CadastroProjetoPage', {_projeto: model})
  
  }
  abrirDetalheProjeto(model: projetoModel, item: projetoModel): void {
      this.navCtrl.push('DetalheProjetoPage', {_projeto: model})
  }

}
