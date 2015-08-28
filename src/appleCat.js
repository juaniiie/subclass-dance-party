var makeAppleCat = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('apple');
  $('.apple').append('<img src="http://31.media.tumblr.com/b1333bc29cf5fc5d65995669ff503647/tumblr_mmayreeiIJ1qg6rkio1_500.gif">');
};

makeAppleCat.prototype = Object.create(makeDancer.prototype);
makeAppleCat.prototype.constructor = makeAppleCat;


makeAppleCat.prototype.step = function () {
  this.$node.mouseenter(function(event){
    $(this).find('img').slideToggle();});
  this.$node.mouseleave(function(event){
    $(this).find('img').slideToggle();});
  makeDancer.prototype.step.call(this);
}