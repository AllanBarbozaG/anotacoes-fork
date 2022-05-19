class AnotacoesController {
  constructor() {
    this.anotacoesArr = [];
  }

  addAnotacao() {
    let tituloForm = document.getElementById('titulo').value;
    let descricaoTarefa = document.getElementById('descricaoTarefa').value;
    const novaAnotacao = new Anotacoes(tituloForm, descricaoTarefa);
    this.anotacoesArr.push(novaAnotacao);
  }
}

const botaoEnviar = document.querySelector('.btn')
const controllerObj = new AnotacoesController();
botaoEnviar.addEventListener('click', function(e) {
  e.preventDefault();
  controllerObj.addAnotacao();
  console.log(controllerObj);
})

