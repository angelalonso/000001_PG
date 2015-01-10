function refresh_html_main(){
  username_js = getCookie("username");
  document.getElementById("username_html_main").innerHTML = username_js;
  userid_js = getCookie("userid");
  pokelist(userid_js);
  document.getElementById("userlist_html_main").innerHTML = "";
  userlist(userid_js);
  var dc = document.cookie;
  document.getElementById("testing_cookies").innerHTML = dc;
}


function userlist(userid_js){ 
  server='192.168.10.212:8000';
  $.ajax({
    url: 'http://' + server + '/getusers/' + userid_js,
    success: function(result) {
      var entries = result.split('###');
      var $myList = $( "#userlist_html_main" );
      var newItems = [];
      $.each( entries, function( index, value ) {
        if (value != "") {
          uservalues = value.split('///');
          newItems.push( '<li><a href="javascript:poke_to(' + userid_js + ',' + uservalues[0] + ');" >' + uservalues[1] + '</a></li>' );
        }
      });
      $myList.append( newItems.join( "" ) );
      $myList.listview( "refresh" );
    },
    error: function(e,result) {
      alert(result + e);
    }
  });
}

function pokelist(userid_js){
  server='192.168.10.212:8000';
  $.ajax({
    url: 'http://' + server + '/user/' + userid_js,
    success: function(result) {
      document.getElementById("userpokes_html_main").innerHTML = result;
    },
    error: function(e,result) {
      alert(result + e);
    }
  });
}

function poke_to(user_from,user_to){
  alert(user_from + " to " + user_to);
  server='192.168.10.212:8000';
  $.ajax({
    url: 'http://' + server + '/poke/' + user_from + '/' + user_to,
    success: function(result) {
      refresh_html_main();
    },
    error: function(e,result) {
      alert(result + e);
    }
  });
}

function cleanall(){
  userid_js = getCookie("userid");
  server='192.168.10.212:8000';
  $.ajax({
    url: 'http://' + server + '/cleanall/' + userid_js,
    success: function(result) {
      refresh_html_main();
    },
    error: function(e,result) {
      alert(result + e);
    }
  });
}
