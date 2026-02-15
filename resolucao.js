class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  mensagemDeAtaque() {
    let ataque = "";
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    }

    console.log(
      `O heroi com nome ${this.nome} de idade ${this.idade} anos do tipo ${this.tipo} usou o ataque de ${ataque}!`,
    );
  }
}
let meuHeroi = new heroi("Aloy", "30", "guerreiro");
meuHeroi.mensagemDeAtaque();
