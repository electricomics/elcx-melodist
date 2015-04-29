(function() {


function Melodist (options) {
  var opts = options || {};

  return this;
}


if (typeof module !== 'undefined' && typeof exports === 'object') {
  module.exports = Melodist;
}
else {
  this.Melodist = Melodist;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());