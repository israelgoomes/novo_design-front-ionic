import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { projetoModel } from '../../../app/models/projetoModel';
import { ProjetosProvider } from '../../../providers/projetos/projetos';
import { AlertProvider } from '../../../providers/alert/alert';

/**
 * Generated class for the DetalheProjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-projeto',
  templateUrl: 'detalhe-projeto.html',
})
export class DetalheProjetoPage {
  projeto: projetoModel;
  foto = []
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public projetoSrvc: ProjetosProvider,
    public alertSrvc: AlertProvider
    ) {
    let projeto = this.navParams.get('_projeto')
    if(projeto){
      this.projeto = <projetoModel>projeto
    }else {
      this.projeto = new projetoModel();

    }
  }

  async deletar(): Promise<void>{
 this.alertSrvc.confirm('Excluir?', `Deseja realmente excluir o projeto ${this.projeto.tituloProjeto} ?`, async() => {
    let sucesso = false;
   let result = await this.projetoSrvc.delete(this.projeto._id);
   sucesso = result.success;
    if(sucesso){
      this. alertSrvc.toast('Deletado com sucesso', 'bottom');
      this.navCtrl.setRoot('ProjetosPage')
    }
  });
  }

  gerarContrato(){
    this.navCtrl.push('ContratoPage', { _projeto: this.projeto});
      console.log(this.projeto)
  }

  addOrEdit(): void {
    this.navCtrl.push('AdmProjetoPage', { _projeto: this.projeto });
    console.log('Enviando o Projeto', this.projeto)

}

  ionViewDidLoad() {
  this.foto = this.projeto.foto;
    this.projeto = <projetoModel>this.navParams.get('_projeto');

    console.log('Projetos', this.projeto);
  }

}
