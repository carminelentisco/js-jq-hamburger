console.log('JS è stato inserito correttamente');

/***************************************************\
 * 
 * Rendere visibile in apertura e chiusura il menù.
 * Non modificare HTML
 * Non modificare CSS
 * 
\**************************************************/


var hamburger = $('.header-right a');     // Selezionato l'elemento hamburger
var cross = $('.close');                  // Selezionato l'elemento cross
var hamburgerMenù = $('.hamburger-menu'); // Seleziona l'elemento hambur

// Azione di apertura

hamburger.click( function() {
    //hamburgerMenù.show();         // Comparsa menù istantanea
    hamburgerMenù.fadeIn();         // Comparsa menù lenta
} );

cross.click( function() {
    //hamburgerMenù.hide();
    hamburgerMenù.fadeOut();
} );

