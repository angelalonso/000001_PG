
function initialize_boxes()
  {
    server='192.168.10.212:8000';
    $.ajax({
      url: 'http://' + server + '/user/1',
      success: function(result) {
        document.getElementById("userpokes_html_main").innerHTML = result;
      },
      error: function(e,result) {
        alert(result + e); 
      }
    });
    userid_js = getCookie("username");
    document.getElementById("username_html_main").innerHTML = userid_js;
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
