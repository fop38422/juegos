document.getElementById('idiomas').addEventListener('change', function(){
    var idiomaSel = this.value;
    document.getElementById('rps').innerHTML = traducciones[idiomaSel].rps;
    document.getElementById('buscaminas').innerHTML = traducciones[idiomaSel].buscaminas;
    document.getElementById('simon').innerHTML = traducciones[idiomaSel].simon;
});