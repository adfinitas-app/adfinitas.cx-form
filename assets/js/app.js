$(document).foundation()

// Function used in :
// - assets/js/woopra.js
// - assets/js/form.js
function extractUrlParams() {
  var t = document.location.search.substring(1).split('&'); var f = [];
  for (var i=0; i<t.length; i++){
    var x = t[ i ].split('=');
    f[x[0]]=decodeURIComponent(x[1]);
  }
  return f;
};
