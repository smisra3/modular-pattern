/**
 *  EXAMPLE OF MODULAR PATTERN.
 */
var myClass = (function () {
  var privateMethod = function () {
    console.log("hi");
  }
  return {
    publicMethod: function () {
      privateMethod();
    }
  };
})()
myClass.publicMethod();