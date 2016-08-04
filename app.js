$(document).ready(function () {
  createButton();
  $('.addNewSpy').on('click', 'button', appendDom);
  $('.container').on('click', '.changeSpy', changeSpy);
  $('.container').on('click', '.deleteSpy', deleteSpy);
});

var clicks = 0;

function createButton() {
  // adds "New Spy" button onto the DOM right away
  $('.addNewSpy').append('<button class="addSpyButton">New Spy</button>');
}

function appendDom() {
  clicks++;
  $('.container').append('<div class="spy"></div>');
  var $el = $('.container').children().last();
  $el.append('<span>' + clicks + '</span>');
  $el.append('<button class="deleteSpy">Delete</button>');
  $el.append('<button class="changeSpy">Change</button>');
}

function changeSpy() {
  $(this).parent().toggleClass('red');
}

function deleteSpy() {
  $(this).parent().remove();
}
