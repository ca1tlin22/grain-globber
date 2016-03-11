grains.forEach(function (grain) {
  var $li = $('<li>');
  var $figure = $('<figure>');
  var $img = $('<img>');
  var $caption = $('<figcaption>');

  $desc.html(grain.name);
  $img.attr('src', 'images/' + dino.img);

  $figure.append($img, $caption);
  $li.append($figure);
  $ul.append($li);
});
