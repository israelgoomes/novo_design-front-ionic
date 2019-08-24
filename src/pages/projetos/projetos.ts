import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { projetoModel } from '../../app/models/projetoModel';
import { ProjetosProvider } from '../../providers/projetos/projetos';
import { configHelper } from '../../app/helpers/configHelper';
//import { ClientesProvider } from '../../providers/clientes/clientes';
//import { clienteModel } from '../../app/models/clienteModel';

@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})
export class ProjetosPage implements OnInit{
listaProjetos: Array<projetoModel> = new Array<projetoModel>();
//cliente: Array<clienteModel> = new Array<clienteModel>();
//clienteId = [];
theme: string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public projetoSrvc: ProjetosProvider,
    private events: Events
    ) {
      this._loadProjetos();
     console.log('Lista de projetos', this.listaProjetos)
  }

  ngOnInit(): void {
    this._loadProjetos();
    this.eventChangeColor();
    console.log('Lista de projetos', this.listaProjetos)
    this.theme = localStorage.getItem(configHelper.storageKeys.color);
    if(this.theme == "#527F76"){
      this.theme = 'primary'
    }else if(!this.theme){
      this.theme = 'primary'
    }

  }

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

  eventChangeColor(){
    this.events.subscribe(configHelper.Events.changeColor, ()=>{
      this.menuController();
         })
  }

  menuController(){
    this.theme = localStorage.getItem(configHelper.storageKeys.color);
    if(this.theme == "#527F76"){
      this.theme = 'primary'
    }
  }

}
