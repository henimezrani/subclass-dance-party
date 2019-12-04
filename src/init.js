$(document).ready(function() {
  window.dancers = [];
  //window.list=["assets/omar.png","assets/matt.png","assets/youssef.png","assets/seif.png","assets/walid.png"];
  window.names=["omar","matt","youssef","seif","walid"];
  window.leftV=[300,500,100,700,900];
  window.count=0;

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      50,
     leftV[count],
      Math.random() * 500
    );
    dancer.setPosition();
    dancer.step();
    dancer.$node.attr("src", "assets/" + names[dancer.count] + ".png")
    //console.log(dancer.$node)

    $('body').append(dancer.$node);
    count++;
    if (count === 5) {
      count =0
    }
  });
});

