(function() {
    var names = ["Ambani", "Julie", "Nisha", "Jeeva", "Jack", "Tessa"];
  
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      var firstLetter = name.charAt(0).toLowerCase();
  
      if (firstLetter === 'j') {
        console.log("Good Bye " + name);
      } else {
        console.log("Hello " + name);
      }
    }
  })();
  