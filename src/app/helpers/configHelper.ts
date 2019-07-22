export class configHelper {
    //colocado desse jeito para configurar o cors, foi configura no ionic.config.json n aparte de proxies
   public static url: string = '/v1/';
   // public static url: string = 'https://marcenarianovadesign.com.br/api/';
    //public static url: string ='http://localhost:3000/api/';
    //https://marcenarianovadesign.com.br/api/
   // public static url: string = 'http://localhost:3000/api/'
    public static storageKeys = {
        token: 'novadesign.token',
        user: 'novadesign.user',
        selectClient: 'novadesign.select.client'
    }
    public static Events = {
        atualizacaoUserMenu: 'atualizacao.user.menu',
        atualizaClienteByProjetos: 'atualiza.client.by.projeto',
        atualizaEmailByCliente: 'atualiza.email.by.cliente'
    }
}