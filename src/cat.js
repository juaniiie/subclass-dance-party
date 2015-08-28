var makeCat = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('cat');
  this.$node.append('<img src="http://i264.photobucket.com/albums/ii188/pokbg2/forum%20tags/Animation1.gif">');
};

makeCat.prototype = Object.create(makeDancer.prototype);
makeCat.prototype.constructor = makeCat;

makeCat.prototype.step = function () {
  this.$node.click(function(event) {
    // find the amount of dancers
    var otherDancers = window.dancers;
    // setPosition to a couple pixels away from this.$node
    for( var i = 0; i < otherDancers.length; i++){
      otherDancers[i].setPosition(i*50, i*70);
    }
  });
  makeDancer.prototype.step.call(this);
}