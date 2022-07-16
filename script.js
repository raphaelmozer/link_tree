const colortheme = window.matchMedia('(prefers-color-scheme: dark)');

var page = document.body
page.onload = carregar

function carregar () {

    var link1 = document.getElementsByTagName('link')[3] //aqui eu peguei o primeiro link do arquivo html pela tag
    
    if ( colortheme.matches ) {
        link1.href = 'style.css' //se o tema for dark 
    }else {
        link1.href = '' //se o tema for light
    }
}
