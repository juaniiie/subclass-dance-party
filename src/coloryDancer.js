var makeColoryDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  $('.dancer').addClass('colory');
}

makeColoryDancer.prototype = Object.create(makeDancer.prototype);
makeColoryDancer.prototype.constructor = makeColoryDancer;

makeColoryDancer.prototype.step = function () {
  var back = ['#ff0000','green','yellow'];
  var rand = back[Math.floor(Math.random() * back.length)];
  this.$node.css('border-color', rand);
  makeDancer.prototype.step.call(this);
}