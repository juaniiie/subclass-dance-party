describe("cat", function() {

  var cat;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    cat = new makeDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(cat.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes it rotate", function() {
    sinon.spy(cat, 'step');
    cat.step();
    expect(cat.step.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(cat, "step");
      expect(cat.step.callCount).to.be.equal(0);
    // cat = new makecat(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(cat.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(cat.step.callCount).to.be.equal(2);
    });
  });
});
