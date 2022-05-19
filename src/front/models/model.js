class Anotacoes {
  constructor (titulo,nota){
    try {
      if (typeof titulo === 'string' && typeof nota === 'string') {
        this.titulo = titulo;
        this.nota = nota;  
      } else {
        throw new Error('Criação de notas: dados inválidos');
        }
    } catch(error) {
      console.error(error);
      alert(error);
    }
  }
}



/*// Exercício de Pilhas
class Pilha {
  constructor(){
    this.dados = [];
  };  

  empilha(novoDado) {
    this.dados.push(novoDado);
  };  
  desempilha() {
    try {
      if (this.dados.length != 0) {
        this.dados.pop();
      } else {
        throw new Error("A lista está vazia. Não é possível remover mais itens.");
      }
    } catch(error) {
      console.log(error);
      console.error(error)
    }
  }
}*/

/*//Exercício filas
class Fila {
  constructor() {
    this.dados = [];
  };

  chegada(...novoDado) {
    this.dados.push(...novoDado);
  };
  partida() {
    try {
      if (this.dados.length !== 0) {
        return this.dados.splice(0, 1);
      } else {
        throw new Error('Fila vazia');
      };
    } catch(error) {
      console.error(error);
    };
  };
  mostraFila() {
    for (let i = 0; i < this.dados.length; i++) {
      console.log(`Item ${[i+1]}: ${this.dados[i]}`);
    };
  };
}*/
    

