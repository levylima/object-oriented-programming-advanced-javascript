"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var Patinete = /** @class */ (function () {
    function Patinete(cor, tamanho, material, marca, tiposPatinete, faixaEtaria) {
        this.cor = cor;
        this.tamanho = tamanho;
        this.material = material;
        this.marca = marca;
        this.tiposPatinete = tiposPatinete;
        this.faixaEtaria = faixaEtaria;
    }
    Patinete.prototype.andar = function () {
        console.log('O patinete anda.');
    };
    Patinete.prototype.eferro = function () {
        console.log("Esse patinete \u00E9 ".concat(this.material == 'ferro' ? 'forte' : 'fraco'));
    };
    Patinete.prototype.description = function () {
        console.log("Cor: ".concat(this.cor));
        console.log("Tamanho: ".concat(this.tamanho));
        console.log("Material: ".concat(this.material));
        console.log("Marca: ".concat(this.marca));
        console.log("Tipo de patinete: ".concat(this.tiposPatinete));
        console.log("Faixa et\u00E1ria: ".concat(this.faixaEtaria));
    };
    return Patinete;
}());
var patinete = new Patinete('Cinza', 70, 'ferro', 'Blinkdo', 'Elétrico', 'Infantil');
patinete.description();
patinete.andar();
patinete.eferro();
