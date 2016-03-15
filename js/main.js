grains.forEach(function (item) {
  var $ul = $('<ul>');
  var $newLi = $('<li>');
  var $h2 = $('<h2>');
  var $img = $('<img>');
  var $p = $('<p>');

  $newLi.html(grain.name);
  $('ul').append($newLi);

  $img.attr('src', 'images/' + grains.img);
  $li.append($img);
  $h2.html(item.name);
  $li.append($h2);
  $p.html(item.desc);
  $li.append($p);
});
