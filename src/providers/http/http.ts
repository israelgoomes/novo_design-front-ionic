import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerProvider } from '../spinner/spinner';
import { AlertProvider } from '../alert/alert';
import { NetworkProvider } from '../network/network';
import { HttpResultModel } from '../../app/models/httpResultModel';

@Injectable()
export class HttpProvider {

  constructor(
    private http: HttpClient,
    private spinnerSrvc: SpinnerProvider,
    private alertSrvc: AlertProvider,
    private networkSrv: NetworkProvider
    ) {    }

//criando uma promessa, pois é um código que vai demorar para se executar.
public get(url: string): Promise<HttpResultModel> {

  //startando o loader, é necessário apenas uma última vez
  this.spinnerSrvc.show("Carregando os dados...");

  //criando uma nova promessa, por padrão se cria o resolve e o reject, não está sendo utilizado o reject pq dentro do HttpResultModel que está sendo passado a cima na promise já tem as informações de erro.
  return new Promise((resolve) =>{

          //verirfica se o usuário está online
          if (this.networkSrv.IsOnline) {
            //se estiver online ele pega o http do angular e passa a url que veio, e espera o subscribe que é o retorno
            this.http.get(url).subscribe(_res => {
              //quando ele fizer o retorno ele vai tirar o loader com o método hide criado no provider spinner e vai resolver a promise
              this.spinnerSrvc.hide();
              //aqui é feito o resolve, no caso o success true pois foi resolvido com sucesso, no data vem o que retornou do api da pessoa, e virá sem erro
              resolve({ success: true, data: _res, err: undefined});

            }, err => {
              //caso de algum erro no get, ele irá também ocultar o alert
              this.spinnerSrvc.hide();
              //vai dar um toast
              this.alertSrvc.toast('Não foi possível consultar os dados, verifique sua conexão e tente novamente', 'bottom');
              //e da um resolve dizendo que não houve sucesso, não tem informação e passa o erro.
              resolve({ success: false, data: undefined, err: err });
            });
            //cai aqui caso o usuário esteja offline
          }else {
              this.alertSrvc.toast('Você está offline, e infelizmente não pode ser carregado os dados!', 'bottom');
              //da um resolve dizendo que não houve erro, a informação vem vazia e sem erro.
              resolve({ success: true, data: [], err: undefined});
          }
  });
}

}
