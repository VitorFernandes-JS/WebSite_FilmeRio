function funTrocaTema(par_tema) {
    CSS_tema.href = "Estilo/CSS_" + par_tema + ".css";
    texto_destaque.innerHTML = par_tema;
    img_destaque.src = "Imagens/" + par_tema +".png";
    img_destaque.alt = par_tema;
    img_destaque.title = img_destaque.title = par_tema;
}

function funBorda () {
    if ( borda.checked ) {
        cor.disabled = false;
        alert("Agora selecione uma cor!");
    }
    else {
      texto_destaque.style.borderStyle = "none";
      cor.options[0].selected = "selected"; 
      cor.disabled = true;
    }
} 

function funCorBorda () {
    texto_destaque.style.borderStyle = "solid";
    texto_destaque.style.borderColor = cor.value;
}

function funSombra () {
    if (sombra.value == "Adiciona Sombra") {
    texto_destaque.className = "sombra_texto";
    sombra.value = "Remove Sombra"
} 
else {
    texto_destaque.className = "";
    sombra.value = "Adiciona Sombra";
} 

}