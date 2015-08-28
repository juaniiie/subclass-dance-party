var makeHeartCat = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('heart');
  $('.heart').append('<img src="http://imgfave-herokuapp-com.global.ssl.fastly.net/image_cache/1440008095234428_animate.gif">');
}

makeHeartCat.prototype = Object.create(makeDancer.prototype);
makeHeartCat.prototype.constructor = makeHeartCat;

makeHeartCat.prototype.step = function () {
  this.$node.find('img').click(function() {
    $('img').animate({
      width: ["toggle", "swing"],
      height: ["toggle", "swing"],
      opacity: "toggle"
    }, 5000, "linear");
  });
  makeDancer.prototype.step.call(this);
}