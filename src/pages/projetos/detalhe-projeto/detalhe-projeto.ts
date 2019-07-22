import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { projetoModel } from "../../../app/models/projetoModel";
import { ProjetosProvider } from "../../../providers/projetos/projetos";
import { AlertProvider } from "../../../providers/alert/alert";
import { clienteModel } from "../../../app/models/clienteModel";
import { ClientesProvider } from "../../../providers/clientes/clientes";


@IonicPage()
@Component({
  selector: "page-detalhe-projeto",
  templateUrl: "detalhe-projeto.html"
})
export class DetalheProjetoPage {
  projeto: projetoModel;
  foto = [];
  cliente: Array<clienteModel> = new Array<clienteModel>();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public projetoSrvc: ProjetosProvider,
    public alertSrvc: AlertProvider,
    private clienteSrvc: ClientesProvider
  ) {
    let projeto = this.navParams.get("_projeto");
    if (projeto) {
      this.projeto = <projetoModel>projeto;
    } else {
      this.projeto = new projetoModel();
    }
    this.load();
  }

  //gera os projetos relacionados ao cliente
  async load(): Promise<void> {
    try {
      let result = await this.clienteSrvc.getByIdClient(this.projeto.cliente._id);
      if (result.success) {
        this.cliente = <Array<clienteModel>>result.data;
        console.log("CLiente responsável", this.cliente);
      }
    } catch (error) {}
  }

  async deletar(): Promise<void> {
    this.alertSrvc.confirm(
      "Excluir?",
      `Deseja realmente excluir o projeto ${this.projeto.tituloProjeto} ?`,
      async () => {
        let sucesso = false;
        let result = await this.projetoSrvc.delete(this.projeto._id);
        sucesso = result.success;
        if (sucesso) {
          this.alertSrvc.toast("Deletado com sucesso", "bottom");
          this.navCtrl.setRoot("ProjetosPage");
        }
      }
    );
  }

  gerarContrato() {
    this.navCtrl.push("ContratoPage", {
      _projeto: this.projeto,
      _clienteProjeto: this.cliente
    });
    console.log(this.projeto);
  }

  addOrEdit(): void {
    this.navCtrl.push("AdmProjetoPage", {
      _projeto: this.projeto,
      _cliente: this.cliente
    });
    console.log("Enviando o Projeto e o cliente", this.projeto, this.cliente);
  }

  ionViewDidLoad() {
    this.foto = this.projeto.foto;
    this.projeto = <projetoModel>this.navParams.get("_projeto");

    console.log("Projetos", this.projeto);
  }
}
