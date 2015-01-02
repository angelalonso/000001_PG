
function initialize_boxes()
{
  server='192.168.10.212:8000';
  username_js = getCookie("user_name");
  useremail_js = getCookie("user_email");
  userid_js = getCookie("user_id");
  if (userid_js == "" ){
    userid_js = getnew_userid();
  }
  document.getElementById("userid_html_user").value = userid_js;

}
 
function getnew_userid(){
  $.ajax({
    url: 'http://' + server + '/getnewid/',
    success: function(result) {
      userid_js = result;
    },
    error: function(e,result) {
      alert(result + e);
      userid_js = "You get no ID. Why? because we said so";
    }
  });
  return userid_js;

}

// We can delete this after testing
function new_ID()
{
  //value = Math.floor(Math.random()*100000000000000);
  value = getnew_userid();
  document.getElementById("userid_html_user").value = value;
  deleteCookie("userid");
  setCookie("userid",value,0);
}

function save_userdata()
{
  server='192.168.10.212:8000';
  username_js = document.getElementById("username_html_user").value;
  useremail_js = document.getElementById("useremail_html_user").value;
  userid_js = document.getElementById("userid_html_user").value;
  if (username_js == "Enter your name here" || username_js == "") {
    username_js = "Anonymous, I guess";
  }
  $.ajax({
    url: 'http://' + server + '/checkid/' + userid_js ,
    success: function(result) {
      initialize_boxes();
    },
    error: function(e,result) {
      alert(result + e);
    }
  });

  alert(username_js + " - " + useremail_js + " - " + userid_js);
}

