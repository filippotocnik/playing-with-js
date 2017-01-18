window.addEventListener("load", function(){
  var squares = document.querySelectorAll(".square")

  console.log(squares)
  
  for (var i = 0; i < squares.length; i++) {
     squares[i].style.backgroundColor = "red"
     squares[i].addEventListener("click", function(){
      console.log(this.style.backgroundColor)
      if (this.style.backgroundColor == "red"){
        this.style.backgroundColor = "green"
      } else if (this.style.backgroundColor == "green") {
        this.style.backgroundColor = "yellow"
      } else if (this.style.backgroundColor == "yellow") {
        this.style.backgroundColor = "red"
      }
    })
  }
  

  



}, false)

