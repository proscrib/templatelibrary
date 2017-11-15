// JavaScript Document

// Make the entire body a menu tabbed page, in other words make all of the pages live on the home page. Thank you W3Schools for some of the guidance here.  And entheosweb.com for responsive guidance.

 // tabbed content
function openArchive(evt, archiveName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("archive");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < x.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" tab-border-lime", "");
  }
  document.getElementById(archiveName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " tab-border-lime";
}

$(document).ready(function(){
	$('Home a:first').tab('show');
});

//I want the Home tab to open on page load

 $('[data-toggle="tabajax"]').click(function(e) {
    var $this = $(this),
      loadurl = $this.attr('href'),
      targ = $this.attr('data-target');

    $.get(loadurl, function(data) {
      $(targ).html(data);
    });

    $this.tab('show');
    return false;
  });

  $('[data-toggle="tabajax"]:eq(0)').trigger('click');
