var get_data = document.getElementById("new_data").innerHTML;
var data = [];
function add_data() {
data = data + get_data
};
if (get_data != "") {
  add_data();
}