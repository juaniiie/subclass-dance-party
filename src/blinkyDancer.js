var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  debugger;
  $('.dancer').addClass('blinky');
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer blinky"></span>');
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function () {
  debugger;
  this.$node.toggle();
  makeDancer.prototype.step.call(this);
}