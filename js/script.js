
intevalo = 3000;
var apagaTexto;
var nomeFuncao;
var numeroIntevalo;

function criptografar() {
		var textoArea = document.querySelector("#idtextoArea").value;

		if(textoArea == ""){
					document.getElementById('iDtextoAlert').innerHTML = "Digite o texto no campo acima para criptografar.";
					nomeFuncao = limpaTexto;
					intevaloDeTempo();
		}
		else{
			removerImagemTextoAreaCripto()
			var texto = document.querySelector("#idtextoArea").value;
			var e = texto.replace(/e/g, "enter");
			var i = e.replace(/i/g, "imes");
			var a = i.replace(/a/g, "ai");
			var o = a.replace(/o/g, "ober");
			var u = o.replace(/u/g, "ufat");
			var textoCript = u;
			document.getElementById('idTextoAreaCripto').value = textoCript;
		}
}

function descriptografar() {
		var textoArea = document.querySelector("#idtextoArea").value;

		if(textoArea == ""){
					document.getElementById('iDtextoAlert').innerHTML = "Digite o texto no campo acima para descriptografar.";
					nomeFuncao = limpaTexto;
					intevaloDeTempo();
		}
		else{
		removerImagemTextoAreaCripto()
		var texto = document.querySelector("#idtextoArea").value;
		var enter = texto.replace(/enter/g, "e");
		var imes = enter.replace(/imes/g, "i");
		var ai = imes.replace(/ai/g, "a");
		var ober = ai.replace(/ober/g, "o");
		var ufat = ober.replace(/ufat/g, "u");
		var textoDescriptografado = ufat;
		document.getElementById('idTextoAreaCripto').value = textoDescriptografado;
		}
}

/**/

function intevaloDeTempo() {
  if (!numeroIntevalo) {
    numeroIntevalo = setInterval(nomeFuncao, intevalo);
  }
}

function limpaTexto() {
	document.getElementById("iDtextoAlert").innerHTML = "";
	document.getElementById("idtextoCopiado").innerHTML = "";
	paraIntevaloDeTempo()
}


function paraIntevaloDeTempo() {
  clearInterval(numeroIntevalo);
  numeroIntevalo = null;
}


function copiarTexto() {
		var areaTextoCript = document.querySelector("#idTextoAreaCripto").value;

		if (areaTextoCript == ""){
					document.getElementById('idtextoCopiado').innerHTML = "Não existe texto para ser copiado.";
					nomeFuncao = limpaTexto;
					intevaloDeTempo();
			}
			else{
			    let textoCopiado = document.getElementById("idTextoAreaCripto");
			    textoCopiado.select();
			    textoCopiado.setSelectionRange(0, 99999)
			    document.execCommand("copy");
			    document.getElementById('idtextoCopiado').innerHTML = "Texto copiado com sucesso.";
					nomeFuncao = limpaTexto;
					intevaloDeTempo();
			 }
}

function removerImagemTextoAreaCripto() {
	  var elementoTextoAreaCript = document.getElementById("idTextoAreaCripto");
    elementoTextoAreaCript.style.background = "#FFFFFF";
    elementoTextoAreaCript.style.color = "blue";
}


function limparTextoAreaCripto() {
	  var elementoTextoAreaCript = document.getElementById("idTextoAreaCripto");

	  document.getElementById('idTextoAreaCripto').value = "";

		elementoTextoAreaCript.style.cssText =
		    'background: url("imagens/imagem_area_cript.png");' +
		    'background-repeat: no-repeat;' +
		    'background-position: top right center, top;' +
		    'background-size: 100% 100%';
}


function tranformaTextoEmMinuscula(evento) {
    var valorEventoStart = evento.target.selectionStart;
    var valorSelecEnd = evento.target.selectionEnd;
    evento.target.value = evento.target.value.toLowerCase();
    evento.target.selectionStart = valorEventoStart;
    evento.target.selectionEnd = valorSelecEnd;
}

