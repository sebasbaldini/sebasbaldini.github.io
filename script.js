// muestra solo el boton seleccionado.
$(document).ready(() =>{
    $('#home').show();
    $('#api1').hide();
   

    $('#mostrarHome').click(function(){
        $('#home').show();
        $('#api1').hide();
       
    });
    $('#mostrarApi1').click(function(){
        $('#api1').show();
        $('#home').hide();
        
    });
    
});

// funcion de nombre.
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
   // console.log(data.results[0].gender);


    $('#nombre1').text("Nombre = " + data.results[0].name.first);
    $('#apellido1').text("Apellido = " + data.results[0].name.last);
    $('#correo1').text("Correo = " + data.results[0].email);
    $('#pais1').text("País = " + data.results[0].location.city);
    $('#celular1').text("Celular = " + data.results[0].cell);

}
});


//api para bitcoin;

const url = 'https://blockchain.info/ticker';
$.ajax({
  url: url,
  type: 'GET',
  dataType: 'json',
  success: (data) => {
    // console.log(data);
    $('#bit').text(data.USD.last + ' US$ ');
  },
  error: () => {
    alert('Error vuelva a intentarlo mas tarde.');
  }
});

//api para Ethereum;

$.ajax({
  url: 'https://api.blockchain.com/v3/exchange/tickers/ETH-USD',
  type: 'GET',
  dataType: 'json',
  success: (data) => {
    // console.log(data);
    $('#ethe').text(data.price_24h + ' US$');
  },
  error: () => {
    alert('Error vuelva a intentarlo mas tarde.');
  }
});
