import { Component, OnInit } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Platform,
  ToastController
} from "ionic-angular";
import { File } from "@ionic-native/file";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { clienteModel } from "../../app/models/clienteModel";
import { projetoModel } from '../../app/models/projetoModel';
import * as moment from 'moment';
import { configHelper } from '../../app/helpers/configHelper';
import { Events, ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions, CalendarResult } from 'ion2-calendar';
import { ContratoProvider } from '../../providers/contrato/contrato';


@IonicPage()
@Component({
  selector: "page-contrato",
  templateUrl: "contrato.html"
})
export class ContratoPage implements OnInit{
  contrato = {
    name: "",
    descritivo: "",
    vlTotal: "",
    prEntrega: "",
    cpf: ''
  };
  cliente: clienteModel;
  projeto: projetoModel;
  pdfObj = null;
  values = {}
  theme: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform,
    private file: File,
    private toastCtrl: ToastController,
    private events: Events,
    private modalCtrl: ModalController,
    private contratoSrvc: ContratoProvider
  ) {

    moment.locale('pt-BR', {
      months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    });

    let client = this.navParams.get("_cliente");
    let clienteProjeto = this.navParams.get('_clienteProjeto')
    if (client) {
      this.cliente = <clienteModel>client;
    } else if(clienteProjeto) {
      this.cliente = <clienteModel>clienteProjeto;
    }else{
    this.cliente = new clienteModel();
    }
    let projeto = this.navParams.get('_projeto');
    if(projeto){
      this.projeto = <projetoModel>projeto;
    }else {
      this.projeto = new projetoModel();
    }
  }

  ngOnInit(): void {

  this.contrato.prEntrega = moment(new Date()).format("DD/MM/YYYY");
    
    console.log('cliente', this.cliente)

    this.theme = localStorage.getItem(configHelper.storageKeys.color);

    if(this.theme == "#527F76"){
      this.theme = 'primary'
    }else if(!this.theme){
      this.theme = 'primary'
    } else if(this.theme == 'black'){
      this.theme = 'dark';
      console.log('Mudando nome do tema para black')
    } else if(this.theme == 'purple'){
      this.theme = 'secondary';
    }else if(this.theme == 'blue'){
      this.theme = 'light'
    }
    this.eventChangeColor();


    if(this.projeto.tituloProjeto == undefined){
        this.values = [
          {nome: this.cliente.nome,
          cep: this.cliente.cep,
          endereco: this.cliente.endereco,
          bairro: this.cliente.bairro,
          cidade: this.cliente.cidade,
          tel: this.cliente.tel,
          descritivo: this.contrato.descritivo,
          vlTotal: this.contrato.vlTotal
        }
        ]
    } else {
      this.values = [{
        nome: this.cliente.nome,
        cep: this.cliente.cep,
        endereco: this.cliente.endereco,
        bairro: this.cliente.bairro,
        cidade: this.cliente.cidade,
        descritivo: this.projeto.descricaoProjeto,
        vlTotal: this.projeto.preco,
        projeto: this.projeto.tituloProjeto,
        tel: this.cliente.tel,
      }

      ]
    }
    console.log("Valores do novo array",this.values)
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
    }else if(this.theme == 'black'){
      this.theme = 'dark';
      console.log('Mudando nome do tema para black')
    }
  }

  ionViewDidLoad() {

  }
  openCalendar() {
    const options: CalendarModalOptions = {
        pickMode: 'single',
        title: 'Prazo de Entrega',
        weekdays: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        monthFormat: 'MMMM YYYY',
        canBackwardsSelected: true,
        closeIcon: true,
        doneIcon: true,
        color: this.theme,
    };
    let myCalendar = this.modalCtrl.create(CalendarModal, {
        options: options
    });
    myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
     if(date!=null){
      this.contrato.prEntrega = moment(date.string).format("DD/MM/YYYY")
     }
    })
    myCalendar.present();
  }

  createPdf() {
  if(this.projeto.tituloProjeto == undefined){
this.values["0"].descritivo = this.contrato.descritivo
this.values["0"].vlTotal = this.contrato.vlTotal
    }
    this.contratoSrvc.createPdf(this.values["0"], this.contrato)
  }
}
