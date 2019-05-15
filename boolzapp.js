
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
    }  else {
      alert('testo vuoto!');
    }
  }
});
