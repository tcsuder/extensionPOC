var userId;
var passwordId;
var submitId;
var submitParentId;

console.log("hello");
$(':submit').each(
  function() {
    submitParentId = String($(this).parent().attr('id')).toLowerCase();
    submitId = String($(this).attr('id')).toLowerCase();
    var elements = [submitId, submitParentId];
    console.log($(this));
    console.log($(this).parent())
    var tags = ['signin', 'login', 'submit'];
    for(var i=0; i<elements.length; i++) {
      for (var j=0; j<tags.length; j++) {
        var element = elements[i];
        var tag = tags[j];
        if (element.indexOf(tag) >= 0) {
          console.log(element);
          console.log(tag);
          console.log("SUBMIT BUTTON FOUND");
          return;
        }
      }
    }
  }
)

$('input').each(
  function() {
    var type = $(this).attr('type');
    var id = $(this).attr('id');
    if (String(id).toLowerCase().indexOf('pass') >= 0) {
      console.log("PASSWORD type: " + type + ", id: " + id);
      console.log("PASSWORD FIELD FOUND")
      return;
    }
  }
);

$('input').each(
  function() {
    var name = String($(this).attr('name')).toLowerCase();
    var id = String($(this).attr('id')).toLowerCase();
    var type = String($(this).attr('type').toLowerCase());
    var elements = [name, id, type];
    var tags = ['email', 'user', 'login'];
    var nonTags = ['firstname', 'lastname', 'confirmation'];
    for (var x=0; x<elements.length; x++) {
      for (var y=0; y<tags.length; y++) {
        for (var z=0; z<nonTags.length; z++) {
          var element = elements[x];
          var tag = tags[y];
          var nonTag = nonTags[z];
          // if (element.indexOf(nonTag) < 0) {
          //   console.log("FALSE FIELD");
          // }
          if (element.indexOf(tag) >= 0 && type !== 'hidden') {
            console.log("USER name: " + name + ", id: " + id);
            console.log("USER FIELD FOUND")
            return;
          }
        }
      }
    }
  }
);
