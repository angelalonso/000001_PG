
function userlist(userid_js)
  { 
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
            newItems.push( '<li><a href="#">' + uservalues[1] + '</a></li>' );
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


function addone(username)
  {
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

function cleanall(username)
  {
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
