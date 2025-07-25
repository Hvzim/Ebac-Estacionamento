class parquimetro1 {
    constructor(pagamento) {
        // Propriedades
        this.tempo = 0;
        this.pagamento = pagamento;
        this.troco = 0;
    }
    //Condição
    valorMenorQueUm() {
        if (this.pagamento < 1) {
            return "Valor Insuficiente, Insira pelo menos R$ 1,00."
        }
    }
    // Métodos
    calcularTempo() {
        if (this.pagamento >= 3) {
            this.tempo = 120;
            this.troco = this.pagamento - 3;
        } else if (this.pagamento >= 1.75 && this.pagamento < 3) {
            this.tempo = 60;
            this.troco = this.pagamento - 1.75;
        } else if (this.pagamento >= 1.00 && this.pagamento < 1.75) {
            this.tempo = 30;
            this.troco = this.pagamento - 1.00;
        } else {
            return this.valorMenorQueUm(); // trata valor insuficiente
        }
        return `Tempo: ${this.tempo} minutos. Troco: R$${this.troco.toFixed(2)}`;
    }


}
function calcularTempo() {
    const valor = parseFloat(document.getElementById("valor").value);
    const parq = new parquimetro1(valor);
    const resultado = parq.calcularTempo();
    document.getElementById("resultado").innerText = resultado;
}