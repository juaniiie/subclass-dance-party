describe("heartCat", function() {

  var heartCat;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    heartCat = new makeDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(heartCat.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes that cat go away", function() {
    sinon.spy(heartCat, 'step');
    heartCat.step();
    expect(heartCat.step.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(heartCat, "step");
      expect(heartCat.step.callCount).to.be.equal(0);
    // heartCat = new makeheartCat(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(heartCat.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(heartCat.step.callCount).to.be.equal(2);
    });
  });
});
