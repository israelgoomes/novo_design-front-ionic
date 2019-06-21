import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { projetoModel } from '../../app/models/projetoModel';
import { ProjetosProvider } from '../../providers/projetos/projetos';

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
export class ProjetosPage {
listaProjetos: Array<projetoModel> = new Array<projetoModel>();
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public projetoSrvc: ProjetosProvider
    ) {
      this._loadProjetos();
  }

  ionViewDidLoad() {

    console.log(' lista', this.listaProjetos);
  }

  async _loadProjetos(): Promise<void>{
      let result = await this.projetoSrvc.get();
      if(result.success){
        this.listaProjetos = <Array<projetoModel>>result.data;
        console.log(this.listaProjetos)
      }
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
  abrirDetalheProjeto(model: projetoModel): void {
      this.navCtrl.push('DetalheProjetoPage', {_projeto: model})
  }

}
