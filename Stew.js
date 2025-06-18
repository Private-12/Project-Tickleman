function check() {
   const txt=document.getElementById("txt");
   if (txt.value == "and stuff like that.") {
      document.getElementById("restxt").innerHTML = "You are correct!";
      document.getElementById("result").style.display = 'block';
   } else {
      document.getElementById("restxt").innerHTML = "Try again.";
      document.getElementById("result").style.display = 'block';
   }
}