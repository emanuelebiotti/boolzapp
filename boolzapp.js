// INVIO DI UN MESSAGGIO NELLA CHAT
// Imposto una funzione che fa qualcosa quando premo un tasto nella barra in basso a destra
$('textarea').keypress(function(event){
// se il tasto premuto è "invio"
  if(event.which == 13) {
    //prendo il valore che c'è dentro la textarea, cioé il testo digitato dall'utente
    var nuovo_messaggio = $('textarea').val();
    // se questo testo esiste, cioé se l'utente ha scritto qualcosa
    if (nuovo_messaggio.length > 0) {
    // vado a clonare il template dei messaggi
      var new_message = $('.message_container.template .message').clone();
      // aggiungo al contenuto del div il testo digitato dall'utente, e gli aggiungo la classe mine
      new_message.html(nuovo_messaggio).addClass('mine');
      // aggiungo tutto il div con dentro il testo inserito dall'utente
      $('.chat').append(new_message);
      // svuoto  la textarea una volta che il messaggio è stato inviato
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

// soluzione alternativa: il testo di risposta dell'altro utente esce quando si preme sul microfono:

// $('.audio').click(function(){
//     //prendo il valore che c'è dentro la textarea, cioé il testo digitato dall'utente
//     var nuovo_messaggio = $('textarea').val();
//     if (nuovo_messaggio.length > 0) {
//     // vado a clonare il template dei messaggi
//       var new_message = $('.message_container.template .message').clone();
//       // aggiungo al contenuto del div il testo digitato dall'utente, e gli aggiungo la classe yours
//       new_message.html(nuovo_messaggio).addClass('yours');
//       // aggiungi tutto il div con dentro il testo inserito dall'utente
//       $('.chat').append(new_message);
//     }  else {
//       alert('testo vuoto!');
//     }
// });

// RICERCA DEI CONTATTI NELLA LISTA CONTATTI DI SINISTRA
//imposto funzione che fa qualcosa mentre si scrive qualcosa nell'input
$('input').keyup(function(event){
//salvo in una variabile ciò che l'utente scrive nell'input
  var contact_search = $(this).val().toLowerCase();
// imposto una funzione che fa qualcosa per ogni singolo contatto
  $('.contact').each(function(){
// salvo il nome preesistente del contatto in una variabile
    var name = $(this).find('h4').text().toLowerCase();
// se il nome di uno dei contatti include ciò che l'utente ha scritto nell'input...
    if(name.includes(contact_search)) {
// ...allore quel contatto verrà mostrato
      $(this).show();
// altrimenti verrà nascosto
    } else {
      $(this).hide();
    }
  });
});

// codice potenzialmente utile per eventuali altre sezioni

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
