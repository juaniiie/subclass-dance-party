var makeGrowyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('growy');
  //$('.growy')
  this.$node.append('<img src="http://i264.photobucket.com/albums/ii188/pokbg2/forum%20tags/Animation1.gif">');
  this.$node.click(function(event) {
    // find the amount of dancers
    var otherDancers = window.dancers;
    // setPosition to a couple pixels away from this.$node
    for( var i = 0; i < otherDancers.length; i++){
      otherDancers[i].setPosition(i*50, i*70);
    }
  });
};

makeGrowyDancer.prototype = Object.create(makeDancer.prototype);
makeGrowyDancer.prototype.constructor = makeGrowyDancer;

makeGrowyDancer.prototype.step = function () {
  // this.$node.toggle();
  makeDancer.prototype.step.call(this);
}