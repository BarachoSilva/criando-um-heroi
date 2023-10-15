const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou um ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

function criarHeroi() {
  rl.question('Nome do herói: ', (nome) => {
    rl.question('Idade do herói: ', (idade) => {
      rl.question('Tipo do herói (mago, guerreiro, monge ou ninja): ', (tipo) => {
        const meuHeroi = new Hero(nome, idade, tipo);
        meuHeroi.atacar();
        rl.close();
      });
    });
  });
}

function mostrarMenu() {
  console.log('Escolha uma opção:');
  console.log('1. Criar herói e atacar');
  console.log('2. Sair');

  rl.question('Opção: ', (opcao) => {
    if (opcao === '1') {
      criarHeroi();
    } else if (opcao === '2') {
      rl.close();
    } else {
      console.log('Opção inválida. Tente novamente.');
      mostrarMenu();
    }
  });
}

mostrarMenu();
