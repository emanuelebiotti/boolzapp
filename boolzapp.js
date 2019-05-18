$(document).ready(function(){

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
      $('.chat.active').append(new_message);
      // faccio scroll fino alla fine del nuovo messaggio inserito
      scroll_message();
      // svuoto  la textarea una volta che il messaggio è stato inviato
      $('textarea').val('');
      // imposto una funzione "rispondi" che dopo un secondo mi dà un alert di risposta
      setTimeout(rispondi, 1000);
      function rispondi() {
        risposta = $('.message_container.template .message').clone();
        risposta.html('<p> ciao a te </p>').addClass('yours');
        $('.chat.active').append(risposta);
        // faccio scroll fino alla fine del nuovo messaggio inserito
        scroll_message();
      }
    }  else {
      alert('testo vuoto!');
    }
  }
});

//funzione per scorrere verso il basso in una conversazione ogni volta che si clicca su una conversazione nuova

function scroll_message() {
  var pixel_scroll = $('.chat.active')[0].scrollHeight;
  $('.chat.active').scrollTop(pixel_scroll);
}


$('.drop').click(function(){
  $(this).siblings('.message_options_panel').toggleClass('active');
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


// Milestone 3
// - Click sul contatto mostra la conversazione del contatto cliccato, è possibile inserire nuovi messaggi per ogni conversazione
// - Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

// Imposto la funzione click sul contatto
$('.contact').click(function(){
  // recupero il nome del contatto cliccato
  var nome_contatto = $(this).find('.contactname h4').text();
  // porto il nome del contatto cliccato nello spazio in alto, quello del contatto corrente
  $('.current_contact_name h4').text(nome_contatto);
  // recupero l'immagine del contatto cliccato
  var immagine_contatto = $(this).find('.contactpic').children('img').attr('src');
  // porto l'immagine del contatto cliccato nello spazio dell'immagine in alto, quella del contatto corrente
  $('.current_contact_img_container').children('img').attr('src', immagine_contatto);
  // mostro la scritta dell'ora ultimo accesso
  $('.current_contact_name').children('small').css('display', 'block');
  // creo una variabile contenente il contatto cliccato associato a un data
  var contattocorrente = $(this).data('contatto');
  // rimuovo la classe active a tutte le conversazioni
  $('.chat').removeClass('active');
  // e contemporaneamente faccio apparire solo la conversazione associata al contatto cliccato
  $('.chat[data-conversazione="'+contattocorrente+'"]').addClass('active');
  // devo aggiungere uno sfondo particolare al contatto cliccato:
  // quindi prima metto un sfondo bianco a tutti gli altri
  $('.contact').css('backgroundColor','white');
  // e poi metto uno sfondo grigio al contatto cliccato
  $(this).css('backgroundColor','#EEEEEE');

  scroll_message();
});

$('.profile_pic').children('img').click(function(){
  alert('Avengers, assemble!!!');
});

//Quando si clicca su "cancella messaggio" il messaggio viene cancellato
$('.message_options_panel .delete_message').click(function(){
  $(this).closest('.message').hide();
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

});
