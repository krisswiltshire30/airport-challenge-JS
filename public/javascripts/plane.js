function Plane() {
  Plane.prototype.land = function(airport) {
    airport.clearForLanding(this);
    this.location = airport;
  };

  Plane.prototype.takeOff = function() {
    this.location.clearForTakeOff();
  };
}
