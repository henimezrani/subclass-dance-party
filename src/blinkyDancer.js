/*var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {

    oldStep();

    blinkyDancer.$node.toggle();
  };

};*/

//////////////

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.oldStep=this.step;
}

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.oldStep=makeBlinkyDancer.prototype.step;
makeBlinkyDancer.prototype.step = function() {
  this.oldStep(this);
  var originalLink = "assets/" + names[this.count] + ".png"
  var updatedLink = "assets/" + names[this.count] + "2.png"
  console.log(this.count)
  if (this.$node.attr("src") ===updatedLink)
    this.$node.attr("src", originalLink);
  else {
  this.$node.attr("src", updatedLink);
  }
};