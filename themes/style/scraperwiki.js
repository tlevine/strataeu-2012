$(function(){
  // Title in the HTML instead of Javascript so it loads right away
  // $('section.title').append('<img src="themes/style/scraperwiki/tractor-transparent.png" alt="A wheel-tractor scraper">');

  // Footnote
  var img = '<img src="themes/style/scraperwiki/scraperwiki-logotype.png" alt="A wheel-tractor scraper">';
  var title = '<p class="title">' + $('section.title hgroup h1').text() + '</p>';
  var subtitle ='<p class="subtitle">' +  $('section.title hgroup h2').text() + '</p>';

  $('section.slide').not('.title').append('<footer>' + img + title + subtitle + '</footer>');
});
