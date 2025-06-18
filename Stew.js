function check() {
   const txt = document.getElementById("txt");
   const codeDiv = document.getElementById("Code");
   // Remove animation class and reset to initial state
   codeDiv.classList.remove("Codeani");
   codeDiv.classList.add("Code");
   // Force reflow to restart animation
   void codeDiv.offsetWidth;
   if (txt.value == "and stuff like that.") {
      document.getElementById("restxt").innerHTML = "You are correct!";
      document.getElementById("result").style.display = 'block';
      codeDiv.classList.remove("Code");
      codeDiv.classList.add("Codeani");
   } else {
      document.getElementById("restxt").innerHTML = "Try again.";
      document.getElementById("result").style.display = 'block';
   }
}