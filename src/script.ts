import PromptSync = require ('prompt-sync');

const prompt = PromptSync();

class Patinete {
    public cor: string;
    public tamanho: number;
    public material: string;
    public marca: string;
    public tiposPatinete: string;
    public faixaEtaria: string;

    constructor(cor: string, tamanho: number, material: string, marca: string, tiposPatinete: string, faixaEtaria: string){
        this.cor = cor;
        this.tamanho = tamanho;
        this.material = material;
        this.marca = marca;
        this.tiposPatinete = tiposPatinete;
        this.faixaEtaria = faixaEtaria;
    }


    public andar (){
        console.log ('O patinete anda.')
    }

    public eferro (){
        console.log(`Esse patinete é ${this.material=='ferro'?'forte' : 'fraco'}`)
    }
    public description() {
        console.log(`Cor: ${this.cor}`)
        console.log(`Tamanho: ${this.tamanho}`)
        console.log(`Material: ${this.material}`)
        console.log(`Marca: ${this.marca}`)
        console.log(`Tipo de patinete: ${this.tiposPatinete}`)
        console.log(`Faixa etária: ${this.faixaEtaria}`)
    }
}
    const patinete = new Patinete('Cinza', 70 ,'ferro','Blinkdo','Elétrico','Infantil')

    patinete.description();
    patinete.andar();
    patinete.eferro();


