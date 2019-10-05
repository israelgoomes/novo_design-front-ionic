import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TesteModel } from '../../app/models/testesModel';
import { elementoAco } from '../../app/models/TesteElementosModel';
import { AlertProvider } from '../../providers/alert/alert';

/**
 * Generated class for the TestesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testes',
  templateUrl: 'testes.html',
})
export class TestesPage {
listaAcos: Array<TesteModel>  = []

listaElementos: Array<elementoAco> = [
{id:1 ,elemento: 'Prata'}, 
{id:2 ,elemento: 'Alumínio'},
{id:3 ,elemento: 'Amerício'},
{id:4 ,elemento: 'Argônio'},
{id:5 ,elemento: 'Arsénio'},
{id:6 ,elemento: 'Ástato'},
{id:7 ,elemento: 'Ouro'},
{id:8 ,elemento: 'Boro'},
{id:10 ,elemento: 'Bário'},
{id:11 ,elemento: 'Berílio'},
{id:12 ,elemento: 'Bóhrio'},
{id:13 ,elemento: 'Bismuto'},
{id:14 ,elemento: 'Berquéli'}
]

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public alertSrvc: AlertProvider) {
//this.listaAcos.push({elemento: 'Fósforo', vlMin: 0.05, vlMax: 0.85}, {elemento: 'Sódio', vlMin: 0.050, vlMax: 0.25})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestesPage');
  }

adicionaLinha(){
  console.log(this.listaAcos);
  let ultimo = this.listaAcos[this.listaAcos.length -1];
  console.log('ultimo valor',ultimo)
if(ultimo != undefined){
  console.log('Entrou no if')
  console.log('Valor min',ultimo.vlMin);
  console.log('Valor min',ultimo.vlMax);
  if(ultimo.vlMin > ultimo.vlMax){

    this.alertSrvc.alert('Erro', 'O valor mínimo não pode ser maior que o máximo.')
   
  }else {
    this.listaAcos.push({id: null, vlMin: null, vlMax: null})
  }
  }else {
    this.listaAcos.push({id: null, vlMin: null, vlMax: null})
}
 


}
retiraLinha(){
  this.listaAcos.pop();
}
  teste(){
    console.log(this.listaAcos)
    let ultimo = this.listaAcos[this.listaAcos.length -1];
    console.log('ultimo indice',ultimo)

  }




  /*this.alertCtrl.create({
    title: 'Erro',
    message: 'O valor minimo deve ser menor que o máximo',
    buttons:[
      {
        text: 'OK'
      }
    ]
  })

}*/
}
