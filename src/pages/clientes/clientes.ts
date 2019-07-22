import { Component, OnInit, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Content,
  Events
} from "ionic-angular";
import { ModalController } from "ionic-angular";
import { ClientesProvider } from "../../providers/clientes/clientes";
import { clienteModel } from "../../app/models/clienteModel";
import { configHelper } from "../../app/helpers/configHelper";
import { usuarioModel } from "../../app/models/usuarioModel";
import { AppVersion } from "@ionic-native/app-version";

@IonicPage()
@Component({
  selector: "page-clientes",
  templateUrl: "clientes.html"
})
export class ClientesPage implements OnInit {
  @ViewChild(Content) content: Content;

  listaClientes: Array<clienteModel> = new Array<clienteModel>();
  usuario: Array<usuarioModel> = new Array<usuarioModel>();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public clienteSrvc: ClientesProvider,
    private events: Events,
    private appVersion: AppVersion
  ) {
    console.log("Versão do aplicativo", this.appVersion.getVersionNumber());
    console.log("Versão do aplicativo", this.appVersion.getAppName());

    this.load();
    this.loadEvent();
  }

  abrirDetalheClientePage(cliente: clienteModel) {
    const modal = this.modalCtrl.create("DetalheClientePage", {
      cliente: cliente
    });
    modal.present();
  }

  async load(): Promise<void> {
    let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
    console.log("Usuário logado", user);
    try {
      let result = await this.clienteSrvc.clientebyIdUser(user._id);
      if (result.success) {
        this.listaClientes = <Array<clienteModel>>result.data;

        console.log(
          "Cliente pertencentes ao usuario logado",
          this.listaClientes
        );
      }
    } catch (error) {}
  }

  ngOnInit(): void {
    this.events.publish(configHelper.Events.atualizacaoUserMenu, {});
    let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
  }

  abrirCadastro(model?: clienteModel) {
    this.navCtrl.push("CadastroClientePage", { cliente: model });
  }
  abrirDetalheCliente(model?: clienteModel) {
    this.navCtrl.push("DetalheClientePage", { cliente: model });
  }

  private loadEvent() {
    this.events.subscribe(configHelper.Events.atualizaClienteByProjetos, () => {
      this.load();
    });
  }

  abrirPdf() {
    this.navCtrl.setRoot("ContratoPage");
  }
  logout() {
    localStorage.setItem(configHelper.storageKeys.token, null);
    localStorage.setItem(configHelper.storageKeys.user, null);
    this.navCtrl.setRoot("LoginPage");
  }
}
