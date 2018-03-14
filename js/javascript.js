// function myFunction() {
//     var x = document.getElementById("myDate").type;
//     document.getElementById("demo").innerHTML = x;
// }
function openNav(){
  document.getElementById("mynav").style.width = "50%";
}
function closeNav(){ /*javascript til at lukke menuen når der trykkes på x */
  document.getElementById("mynav").style.width = "0%";
}
function updateTextInput(val) {
          document.getElementById('textInput').value=val;
        }
