
function refresh_data_user()
{
  server='192.168.10.212:8000';
  username_js = getCookie("username");
  useremail_js = getCookie("useremail");
  userid_js = getCookie("userid");
  if (username_js == null ){
    username_js = "Enter your name here";
  }
  if (useremail_js == null ){
    useremail_js = "Enter your e-Mail here";
  }
  if (userid_js == null || userid_js == "undefined" ){
    userid_js = getnew_userid();
  }
  document.getElementById("username_html_user").value = username_js;
  document.getElementById("useremail_html_user").value = useremail_js;
  document.getElementById("userid_html_user").value = userid_js;
}


function getnew_userid(){
  server='192.168.10.212:8000';
  $.ajax({
    url: 'http://' + server + '/getnewid/',
    success: function(result) {
      userid_ajax = result;
    },
    error: function(e,result) {
      alert(result + e);
      userid_ajax = "You get no ID. Why? because we said so";
    }
  });
  try {
    return userid_ajax;
  } catch(e) {
    return "42. If you have to ask why, you should be playing Cindy Crush instead...";
  }
}


function cleanup_all(){
  var cookies = $.cookie();
  for(var cookie in cookies) {
    $.removeCookie(cookie);
  }
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
  if (useremail_js == "Enter your e-Mail here" || username_js == "") {
    useremail_js = "shy@i.am";
  }
  if (userid_js == "" || userid_js == "42. If you have to ask why, you should be playing Cindy Crush instead...") {
    userid_js = getnew_userid();
  }
  setCookie("username",username_js,0);
  setCookie("useremail",useremail_js,0);
  setCookie("userid",userid_js,0);
  $.ajax({
    url: 'http://' + server + '/saveid/' + userid_js + '/name/' + username_js + '/email/' + useremail_js,
    success: function(result) {
      setCookie("username",username_js,0);
      setCookie("useremail",useremail_js,0);
      setCookie("userid",userid_js,0);
    },
    error: function(e,result) {
      alert(result + e );
    }
  });
      alert("sent");
}

