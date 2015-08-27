describe("coloryDancer", function() {

  var coloryDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    coloryDancer = new makeColoryDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(coloryDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node change color", function() {
    sinon.spy(coloryDancer.$node, 'css');
    coloryDancer.step();
    expect(coloryDancer.$node.css.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(coloryDancer, "step");
      expect(coloryDancer.step.callCount).to.be.equal(0);
    // coloryDancer = new makecoloryDancer(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(coloryDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(coloryDancer.step.callCount).to.be.equal(2);
    });
  });
});
