var new_message = $('.message_container.template').clone().removeClass('template');

new_message.children('.message').html('<p>ciao</p>');

$('.chat').append(new_message);

// document.addEventListener("click", function(){
//
//   document.getElementById("demo").innerHTML = "Hello World";
// });
