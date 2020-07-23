$(document).ready(function() {
  // Triutum sigil is clicked
  $("#triutum").click(function() {
    // Modal state changes
    $("body").toggleClass("dialogIsOpen");
  });

  // Deactivate on ESC
  function onDocumentKeyUp( event ) {
    if( event.keyCode === 27 ) {
      if($("body").hasClass("dialogIsOpen")) {
        $("body").toggleClass("dialogIsOpen");
      }
    }
  }

  // Deactivate on click
  function onDocumentClick( event ) {
    if( event.target === cover ) {
      if($("body").hasClass("dialogIsOpen")) {
        $("body").toggleClass("dialogIsOpen");
      }
    }
  }

});
