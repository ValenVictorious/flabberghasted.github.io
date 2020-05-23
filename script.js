let text = document.getElementById('pastText');
let inputbox = document.getElementById('textInput');

var post=("");
let post_name = document.getElementById("post_name").innerHTML
let post_content = document.getElementById("post_content").innerHTML
console.log(post_name)

function get_post(){
  if (post_name != "" && post_content.innerHTML != "") {
    post = [post_name, post_content]
    document.getElementById("post_content").style.color = "black"
    document.getElementById("post_name").style.color = "black"
  } else if (post_name != "" && post_content === ""){
    document.getElementById("post_content").innerHTML = "enter post content";
    document.getElementById("post_content").style.color = "red";
  } else if (post_name === "" && post_content != "") {
    document.getElementById("post_name").innerHTML = "enter post name";
    document.getElementById("post_name").style.color = "red";
  } else if (post_name === "" && post_content === "") {
    document.getElementById("post_name").innerHTML = "enter post name";
    document.getElementById("post_name").style.color = "red";
    document.getElementById("post_content").innerHTML = "enter post content";
    document.getElementById("post_content").style.color = "red";
  }
};
let submit = document.getElementById("post_submit");
submit.addEventListener("click", function() {

  get_post();
});
//edits the data in Transfer.html to send over to data.js(the database)
var new_data = document.getElementById("new_data").innerHTML;
if (new_data === "" && post != ""){
  document.getElementById("new_data").innerHTML = post;
};

