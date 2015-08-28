describe("appleCat", function() {

  var appleCat;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    appleCat = new makeDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(appleCat.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a function that makes it flutter", function() {
    sinon.spy(appleCat, 'step');
    appleCat.step();
    expect(appleCat.step.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(appleCat, "step");
      expect(appleCat.step.callCount).to.be.equal(0);
    // appleCat = new makeappleCat(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(appleCat.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(appleCat.step.callCount).to.be.equal(2);
    });
  });
});
