function initialize_boxes()
{
  user_id = getCookie("user_id");
  document.getElementById("current_ID").value = user_id;
}
 
function new_ID()
{
  value = Math.floor(Math.random()*100000000000000);
  document.getElementById("current_ID").value = value;
  deleteCookie("user_id");
  setCookie("user_id",value,0);
}

function save_userdata()
{
  user_id = document.getElementById("current_ID").value;
  user_name = document.getElementById("name_input").value;
  if (user_name == "Enter your name here" || user_name == "") {
    user_name = "Anonymous, I guess";
  }
  alert(user_id + " - " + user_name);
}

