function refresh_html_main(){
  username_js = getCookie("username");
  document.getElementById("username_html_main").innerHTML = username_js;
  userid_js = getCookie("userid");
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
          //newItems.push( '<li><a href="#" onclick="javascript:poke_to("' + userid_js + '","' + uservalues[0] + '")">' + uservalues[1] + '</a></li>' );
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

function poke_to(user_from,user_to){
  alert(user_from + " to " + user_to);
}

function addone(username){
  server='192.168.10.212:8000';
  $.ajax({
    url: 'http://' + server + '/poke/1/1',
    success: function(result) {
      initialize_boxes(username);
    },
    error: function(e,result) {
      alert(result + e);
    }
  });
}

function cleanall(username){
  server='192.168.10.212:8000';
  $.ajax({
    url: 'http://' + server + '/cleanall/1',
    success: function(result) {
      initialize_boxes(username);
    },
    error: function(e,result) {
      alert(result + e);
    }
  });
}
