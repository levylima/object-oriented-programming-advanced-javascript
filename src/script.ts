import PromptSync = require ('prompt-sync');

const prompt = PromptSync();

interface NovoPatinete {
    cor: string;
    tamanho: number;
    material: string;
    marca: string;
    tiposPatinete: string;
    faixaEtaria: string;

}

class Patinete {
    public cor: string;
    public tamanho: number;
    public material: string;
    public marca: string;
    public tiposPatinete: string;
    public faixaEtaria: string;


    public podeAndar (){
        console.log (`O patinete está na categoria ${this.faixaEtaria}`)
    }
}