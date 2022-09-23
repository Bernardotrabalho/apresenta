function verificar() {
var data = new Date()
var ano = data.getFullYear()
var xano = document.getElementById('txtano')
var res = document.querySelectorAll('div#res')

if(xano.value.length == 0 || xano.value > ano ){
window.alert('[ERRO] Verifique os Dados Novamente!')
} else { window.alert('Tudo Ok!')

}


}