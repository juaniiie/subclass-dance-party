var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');
  $('.blinky').append('<img src="http://31.media.tumblr.com/b1333bc29cf5fc5d65995669ff503647/tumblr_mmayreeiIJ1qg6rkio1_500.gif">');
  this.$node.mouseenter(function(event){
    console.log($(this));
    $(this)[0].animate(
      { 
        width: ["toggle", "swing"],
        height: ["toggle", "swing"],
        opacity: "toggle",
      }, 5000, "linear");
  });
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
}