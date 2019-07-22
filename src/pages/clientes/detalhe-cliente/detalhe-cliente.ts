import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams, Events } from "ionic-angular";
import { clienteModel } from "../../../app/models/clienteModel";
import { ClientesProvider } from "../../../providers/clientes/clientes";
import { AlertProvider } from "../../../providers/alert/alert";
import { projetoModel } from "../../../app/models/projetoModel";
import { configHelper } from "../../../app/helpers/configHelper";
import { ProjetosProvider } from "../../../providers/projetos/projetos";
import * as moment from "moment";

@IonicPage()
@Component({
  selector: "page-detalhe-cliente",
  templateUrl: "detalhe-cliente.html"
})
export class DetalheClientePage implements OnInit {
  cliente: clienteModel;
  clienteSelecionado: projetoModel = new projetoModel();
  icone = false;
  projeto: Array<projetoModel> = new Array<projetoModel>();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private clienteSrvc: ClientesProvider,
    private alertSrvc: AlertProvider,
    private projetoSrvc: ProjetosProvider,
    private events: Events
  ) {
    let client = this.navParams.get("cliente");
    if (client) {
      this.cliente = <clienteModel>client;
    } else {
      this.cliente = new clienteModel();
    }
  }

  ionViewWillEnter() {
    this.cliente = <clienteModel>this.navParams.get("cliente");
    console.log("Cliente que está vindo", this.cliente);
    /* trazendo pelo localStorage
     this.clienteSelecionado = <projetoModel>JSON.parse(localStorage.getItem(configHelper.storageKeys.selectClient));
    */
    console.log("lista de projetos para o cliente", this.clienteSelecionado);
    //this.load();
    console.log("Proejtos", this.projeto);
  }

  ngOnInit(): void {
    this.load();
  }

  async load(): Promise<void> {
    try {
      let result = await this.projetoSrvc.projetoByClienteId(this.cliente._id);
      if (result.success) {
        this.projeto = <Array<projetoModel>>result.data;
        this.projeto.forEach(v => {
          v.data = moment(v.data).format("DD/MM/YYYY");
        });
        console.log("Projetos", this.projeto);
      }
    } catch (error) {}
  }

  expandable() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }

  addOrEdit(): void {
    this.navCtrl.push("AdmClientePage", { _cliente: this.cliente });
    console.log("Enviando o cliente", this.cliente);
  }
  cadastrarProjeto() {
    this.navCtrl.push("CadastroProjetoPage", { _projeto: this.cliente });
  }

  async deletar(): Promise<void> {
    this.alertSrvc.confirm(
      "Excluir?",
      `Deseja realmente excluir o cliente ${this.cliente.nome} ?`,
      async () => {
        let sucesso = false;
        let result = await this.clienteSrvc.delete(this.cliente._id);
        this.events.publish(configHelper.Events.atualizaEmailByCliente);
        sucesso = result.success;
        if (sucesso) {
          this.alertSrvc.toast("Deletado com sucesso", "bottom");
          this.navCtrl.setRoot("ClientesPage");
        }
      }
    );
  }
  gerarContrato() {
    this.navCtrl.push("ContratoPage", { _cliente: this.cliente });
  }

  detalheCliente: any = [];

  back() {
    this.navCtrl.pop();
  }
}
