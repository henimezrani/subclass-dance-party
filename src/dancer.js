// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img class="dancer" src="assets/youssef.png">');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.count = window.count;
//this.setPosition(top, left)
}


makeDancer.prototype.step = function(that) {
  setTimeout(this.step.bind(that), this.timeBetweenSteps);
};
  

makeDancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

//var dancer = new Dancer()

//this.setPosition();
//this.step();