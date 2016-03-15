grains.forEach(function (item) {
  var $ul = $('<ul>');
  var $newLi = $('<li>');
  var $img = $('<img>');
  var $p = $('<p>');

  $newLi.html(grain.name);
  $('ul').append($newLi);

  $img.attr('src', 'images/' + grains.img);
  $li.append($img);
});
