for (var i = 0; i < 3; i++) {
  (function(j) { // Create a new function scope
    setTimeout(function() {
      console.log(j); // Use the captured argument 'j'
    }, 1000);
  })(i); // Pass the current value of 'i' immediately
}
