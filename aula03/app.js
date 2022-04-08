var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function areaRet(altura,largura){
  area = altura * largura;
  document.querySelector('#resultado').innerHTML = "A área é: "+area+"u²";
}
function somaRet(altura,largura){
  a = parseInt(altura);
  b = parseInt(largura);
  perimetro = (a + b) * 2;
  document.querySelector('#resultadoP').innerHTML = "O perímetro é: "+perimetro+"u";
}