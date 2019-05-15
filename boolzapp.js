
// $('.audio').click(function(){
//   var new_message = $('.message_container.template .message').clone();
//
//   var nuovo_messaggio = $('textarea').val();
//
//   console.log(nuovo_messaggio);
//
//   new_message.html('<p>ciao</p>').addClass('mine');
//
//   $('.chat').append(new_message);
// });


$('textarea').keypress(function(event){
  if(event.which == 13) {
    //prendo il valore che c'è dentro la textarea, cioé il testo digitato dall'utente
    var nuovo_messaggio = $('textarea').val();
    if (nuovo_messaggio.length > 0) {
    // vado a clonare il template dei messaggi
      var new_message = $('.message_container.template .message').clone();
      // aggiungo al contenuto del div il testo digitato dall'utente, e gli aggiungo la classe mine
      new_message.html(nuovo_messaggio).addClass('mine');
      // aggiungi tutto il div con dentro il testo inserito dall'utente
      $('.chat').append(new_message);
      $('textarea').val('');
      // imposto una funzione "rispondi" che dopo un secondo mi dà un alert di risposta
      setTimeout(rispondi, 1000);
      function rispondi() {
        risposta = $('.message_container.template .message').clone();
        risposta.html('<p> ciao a te </p>').addClass('yours');
        $('.chat').append(risposta);
      }
    }  else {
      alert('testo vuoto!');
    }
  }
});

$('.ricerca').click(function(){

  var nome_ricerca = $('input').val();
  $('.contactname h4').each(function(){
    if($(this).text() === nome_ricerca) {
      alert('trovato!');
    }
  })
});

$('input').keypress(function(event){
  if(event.which == 13) {
    var nome_ricerca = $('input').val();
    if (nome_ricerca.length > 0){
      $('.contact .contactname h4').each(function(){
        if($(this).text().toLowerCase() != nome_ricerca.toLowerCase()) {
          $(this).parent().parent().parent().hide();
        }
      });
    }
  }
});

// ora voglio che esca il testo di risposta dell'altro utente quando si preme sul microfono:

$('.audio').click(function(){
    //prendo il valore che c'è dentro la textarea, cioé il testo digitato dall'utente
    var nuovo_messaggio = $('textarea').val();
    if (nuovo_messaggio.length > 0) {
    // vado a clonare il template dei messaggi
      var new_message = $('.message_container.template .message').clone();
      // aggiungo al contenuto del div il testo digitato dall'utente, e gli aggiungo la classe yours
      new_message.html(nuovo_messaggio).addClass('yours');
      // aggiungi tutto il div con dentro il testo inserito dall'utente
      $('.chat').append(new_message);
    }  else {
      alert('testo vuoto!');
    }
});
