function check() {
   const txt=document.getElementById("txt");
   if (txt.value == "and stuff like that.") {
      document.getElementById("result").innerHTML = "You are correct!";
      document.getElementById("restxt").style.display = 'block';
   } else {
      document.getElementById("restxt").innerHTML = "Try again.";
      document.getElementById("result").style.display = 'block';
   }
}