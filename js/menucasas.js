const brasoes = document.querySelectorAll(".brasão__img"); // Pega TODOS os elementos com essa classe
const conteinerBrasao = document.querySelector(".brasoes");
const grinf = document.getElementById("grinfin");
const lufa = document.getElementById("lufalufa");
const raven = document.getElementById("raven");
const sun = document.getElementById("sunserina");
const conteudosCasas = document.getElementById("conteudo__sunserina");
const conteudosraven = document.getElementById("conteudo__raven");
const conteudoslufa = document.getElementById("conteudo__lufalufa");
const conteudosgrinf = document.getElementById("conteudo__grinfin");
const conteudo2 = document.getElementById("casas");
console.log(conteudo2);

sun.addEventListener("click", function () {
  conteudo2.classList.add("sun");
  conteudo2.classList.remove("lufa1");
  conteudo2.classList.remove("raven");
  conteudo2.classList.remove("grinf");
});
grinf.addEventListener("click", function () {
  conteudo2.classList.add("grinf");
  conteudo2.classList.remove("sun");
  conteudo2.classList.remove("lufa1");
  conteudo2.classList.remove("raven");
});
raven.addEventListener("click", function () {
  conteudo2.classList.add("raven");
  conteudo2.classList.remove("sun");
  conteudo2.classList.remove("lufa1");
  conteudo2.classList.remove("grinf");
});
lufa.addEventListener("click", function () {
  conteudo2.classList.add("lufa1");
  conteudo2.classList.remove("sun");
  conteudo2.classList.remove("raven");
  conteudo2.classList.remove("grinf");
});

document.addEventListener("DOMContentLoaded", () => {
  const brasoesImgs = document.querySelectorAll(".brasão__img");
  const conteudosCasas = document.querySelectorAll(".conteudo-casa");

  const esconderTodosConteudos = () => {
    conteudosCasas.forEach((conteudo) => {
      conteudo.classList.add("oculto");
      conteudo.classList.remove("visivel");
    });
    brasoesImgs.forEach((brasao) => {
      brasao.classList.remove("ativo");
    });
  };

  const mostrarConteudoCasa = (idBrasao) => {
    const idConteudo = `conteudo__${idBrasao}`;
    const conteudoParaMostrar = document.getElementById(idConteudo);

    if (conteudoParaMostrar) {
      // Verifica se o conteúdo que seria mostrado JÁ ESTÁ visível
      if (conteudoParaMostrar.classList.contains("visivel")) {
        // Se sim, esconde APENAS ele (o "toggle off")
        conteudoParaMostrar.classList.remove("visivel");
        conteudoParaMostrar.classList.add("oculto");
        // Remove a classe 'ativo' do brasão correspondente
        document.getElementById(idBrasao).classList.remove("ativo");
        return;
      }

      esconderTodosConteudos();
      conteudoParaMostrar.classList.remove("oculto");
      conteudoParaMostrar.classList.add("visivel");
      // Adiciona a classe 'ativo' ao brasão clicado (isso já está no event listener)
    }
  };

  brasoesImgs.forEach((brasao) => {
    brasao.addEventListener("click", function () {
      const idClicado = this.id;
      mostrarConteudoCasa(idClicado);
      // A classe 'ativo' é adicionada aqui, mas removida na função se for um toggle off
      if (!this.classList.contains("ativo")) {
        // Só adiciona se já não estiver ativo
        this.classList.add("ativo");
      }
    });
  });
});
