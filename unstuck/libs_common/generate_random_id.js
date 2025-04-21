(function(){
  var generate_random_id;
  generate_random_id = function(){
    var output, i$, i;
    output = 'TRI-';
    for (i$ = 0; i$ < 4; ++i$) {
      i = i$;
      output += '0123456789'[Math.floor(Math.random() * 10)];
    }
    output += '-';
    for (i$ = 0; i$ < 4; ++i$) {
      i = i$;
      output += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)];
    }
    return output;
  };
  module.exports = {
    generate_random_id: generate_random_id
  };
}).call(this);
