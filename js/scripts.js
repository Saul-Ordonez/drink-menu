$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var user = parseInt($('#age-verify').val());

    if (user >= 21) {
      return $('#over-21').show();
    }
    else if (user < 21){
      return $('#under-21').show();
    }
    else {
      alert('your not human!')
    }



  });
});
