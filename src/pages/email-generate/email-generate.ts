import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EmailComposer } from "@ionic-native/email-composer";
import { ClientesProvider } from "../../providers/clientes/clientes";
import { configHelper } from "../../app/helpers/configHelper";
import { clienteModel } from "../../app/models/clienteModel";

@IonicPage()
@Component({
  selector: "page-email-generate",
  templateUrl: "email-generate.html"
})
export class EmailGeneratePage {
  subject = "";
  body = "";
  listaClientes: Array<clienteModel> = new Array<clienteModel>();
  listaEmails = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public emailComposer: EmailComposer,
    private clienteSrvc: ClientesProvider
  ) {
    this.load();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EmailGeneratePage");
  }
  async load(): Promise<void> {
    let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
    console.log("Usuário logado", user);
    try {
      let result = await this.clienteSrvc.clientebyIdUser(user._id);
      if (result.success) {
        this.listaClientes = <Array<clienteModel>>result.data;
        for(let i = 0; i < this.listaClientes.length; i++){
          console.log('Percorrendo o for',this.listaClientes[i]);
          this.listaEmails.push(this.listaClientes[i].email);
        } 
        console.log("Emails dos clientes", this.listaEmails);
      }
    } catch (error) {}
  }

  sendEmail() {
    let email = {
      to: [`${this.listaEmails}`],
      cc: [],
      bcc: [],
      attachment: [],
      subject: this.subject,
      body: this.body,
      isHtml: false,
      app: "Gmail"
    };
    this.emailComposer.open(email);
  }
}
