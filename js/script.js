window.addEventListener("load", function(){
  var squares = document.querySelectorAll(".square")

  console.log(squares)
  
  for (var i = 0; i < squares.length; i++) {
     squares[i].addEventListener("click", function(){
       alert('mu');
      if (this.style.backgroundColor == "red"){
        this.style.backgroundColor = "green"
        alert('bu');
      } if (this.style.backgroundColor == "red") {
        this.style.backgroundColor = "yellow"
        alert('zu');
      } if (this.style.backgroundColor == "yellow") {
        this.style.backgroundColor = "green"
        alert('fu');
      }
    })
  }
  

  



}, false)

