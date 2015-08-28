var makeColoryDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('colory');
  $('.colory').append('<img src="http://imgfave-herokuapp-com.global.ssl.fastly.net/image_cache/1440008095234428_animate.gif">');
}

makeColoryDancer.prototype = Object.create(makeDancer.prototype);
makeColoryDancer.prototype.constructor = makeColoryDancer;

makeColoryDancer.prototype.step = function () {
  // var back = ['#ff0000','green','yellow'];
  // var rand = back[Math.floor(Math.random() * back.length)];
  // this.$node.css('border-color', rand);
  makeDancer.prototype.step.call(this);
}