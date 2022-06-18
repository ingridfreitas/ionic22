console.log("aaaaaaaaa")
$('#on').click(function () {
    var checado = $("#on").is(':checked')
    if(checado == true){
        console.log("Ingrid");
      var mute = document.getElementById('otherss');
      mute.classList.remove("otro");
    }
    if(!checado){
        console.log("FerFer");
    }
})