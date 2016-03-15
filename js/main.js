grains.forEach(function (item) {
  var $ul = $('<ul>');
  var $li = $('<li>');
  var $h2 = $('<h2>');
  var $img = $('<img>');
  var $p = $('<p>');

  $ul.append($li);
  $img.attr('src', 'images/' + item.img);
  $li.append($img);
  $h2.html(item.name);
  $li.append($h2);
  $p.html(item.desc);
  $li.append($p);
});
