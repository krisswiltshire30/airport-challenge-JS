describe("Plane", function() {
  var plane;
  var airport;
  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj("airport", [
      "clearForLanding",
      "clearForTakeOff"
    ]);
  });
  it("can land at an airport", function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
  it("can make a plane take off", function() {
    plane.land(airport);
    plane.takeOff(plane);
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
});
