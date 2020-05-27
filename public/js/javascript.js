

function sendtoPage(){
   search = document.getElementById("search-bar").value;
   window.location.href = 'https://testdev3.herokuapp.com/search?query='+search;
}

