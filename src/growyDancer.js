var makeGrowyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  $('.dancer').addClass('growy');
};

makeGrowyDancer.prototype = Object.create(makeDancer.prototype);
makeGrowyDancer.prototype.constructor = makeGrowyDancer;

makeGrowyDancer.prototype.step = function () {
  // var back = [10,20];
  // var rand = back[Math.floor(Math.random() * back.length)];
  // this.$node.css('border-radius', rand);
  this.$node.toggle()
  makeDancer.prototype.step.call(this);
}