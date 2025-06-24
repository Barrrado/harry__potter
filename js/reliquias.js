document.addEventListener("DOMContentLoaded", () => {
  const varinhasContainer = document.getElementById("varinhas");
  const relicasImgs = varinhasContainer.querySelectorAll(".reliquias img");
  const infoReliquiaDivs = document.querySelectorAll(".info-reliquia");
  const corReliquiaMap = {
    "varinha-reliquia": "fundo-varinha",
    "pedra-reliquia": "fundo-pedra",
    "capa-reliquia": "fundo-capa",
  };

  const limparClassesDeFundo = () => {
    for (const key in corReliquiaMap) {
      varinhasContainer.classList.remove(corReliquiaMap[key]);
    }
  };
  const removeAtivoFromRelicImages = () => {
    relicasImgs.forEach((img) => {
      img.classList.remove("ativo");
    });
  };

  const esconderTodasInfosReliquias = () => {
    infoReliquiaDivs.forEach((infoDiv) => {
      infoDiv.classList.add("oculto");
      infoDiv.classList.remove("visivel");
    });
  };

  relicasImgs.forEach((img) => {
    img.addEventListener("click", function () {
      const idClicado = this.id;
      const idInfoParaMostrar = `info__${idClicado.split("-")[0]}`;
      const infoDivParaMostrar = document.getElementById(idInfoParaMostrar);
      const classeDeFundoParaAplicar = corReliquiaMap[idClicado];
      const isThisInfoDivVisible =
        infoDivParaMostrar.classList.contains("visivel");
      const isThisBackgroundActive = varinhasContainer.classList.contains(
        classeDeFundoParaAplicar
      );

      if (isThisInfoDivVisible && isThisBackgroundActive) {
        limparClassesDeFundo();

        removeAtivoFromRelicImages();
        esconderTodasInfosReliquias();
      } else {
        limparClassesDeFundo();
        varinhasContainer.classList.add(classeDeFundoParaAplicar);

        removeAtivoFromRelicImages();
        this.classList.add("ativo");

        esconderTodasInfosReliquias();
        infoDivParaMostrar.classList.remove("oculto");
        infoDivParaMostrar.classList.add("visivel");
      }
    });
  });
});
const conteinerReliquias = document.getElementById("reliquias");
const imgref = document.getElementById("imgprincipal1");
imgref.addEventListener("click", function () {
  conteinerReliquias.classList.add("mostrar");
});
