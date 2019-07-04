export class projetoModel {
        _id: string
        nomeCliente: string;
        tel: string;
        email: string;
        endereco: string;
        bairro: string;
        cidade: string;
        tituloProjeto: string;
        descricaoProjeto: string;
        cep: string;
        preco: string;
        foto: Array<ImageData>;
        foto2: string;
}

/* nomeCliente: {trim: true, required: true, type: String, index: true},
    telefone: {trim:true, requried: true, type: String},
    email: {type: String},
    rua: {type: String, required: true},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true, index: true},
    tituloProjeto: {trim: true, required: true, index: true, type: String },
    descricaoProjeto: {type: String, required: true},
    cep: {type: String, required: true},
    preco: {type: Number},
    foto: {type: String}, */