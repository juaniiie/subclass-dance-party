var makeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.old = makeDancer.prototype.step;
  this.old();
  this.setPosition(top, left);
};


makeDancer.prototype.step = function(){
  setTimeout((function(){
    this.step();
  }).bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function (left){
  var centered = { 
    top: '50%',
    left: left
  };
  this.$node.css(centered);
};

