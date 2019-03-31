var boarSpace1 = document.querySelector("#one");
var boarSpace2 = document.querySelector("th#two");
var boarSpace3 = document.querySelector("th#three");

var boarSpace4 = document.querySelector("td#four");
var boarSpace5 = document.querySelector("td#five");
var boarSpace6 = document.querySelector("td#six");
var boarSpace7 = document.querySelector("td#seven");
var boarSpace8 = document.querySelector("td#eight");
var boarSpace9 = document.querySelector("td#nine");

var restartBtn = document.querySelector("#restart")

restartBtn.addEventListener("click", function(){
    var b = document.querySelectorAll("th");
    var a =  document.querySelectorAll("td");

    for(var i=0; i < b.length; i++){
        b[i].textContent = "";
        b[i].style.color = "";
        b[i].style.padding = "30px 30px";
    }

    for(var i=0; i < a.length; i++){
        a[i].textContent = "";
        a[i].style.color = "";
        a[i].style.padding = "30px 30px";
    }

})


boarSpace1.addEventListener("click", function(){
    if (this.style.color == ""){
        this.textContent = "X";
        console.log("1");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "X")){
        this.textContent = "O";
        console.log("2");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "O")){
        console.log("3");
        this.style.color = "";
    }
})

boarSpace2.addEventListener("click", function(){
    if (this.style.color == ""){
        this.textContent = "X";
        console.log("1");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "X")){
        this.textContent = "O";
        console.log("2");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "O")){
        console.log("3");
        this.style.color = "";
    }
})

boarSpace3.addEventListener("click", function(){
    if (this.style.color == ""){
        this.textContent = "X";
        console.log("1");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "X")){
        this.textContent = "O";
        console.log("2");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "O")){
        console.log("3");
        this.style.color = "";
    }
})

boarSpace4.addEventListener("click", function(){
    if (this.style.color == ""){
        this.textContent = "X";
        console.log("1");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "X")){
        this.textContent = "O";
        console.log("2");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "O")){
        console.log("3");
        this.style.color = "";
    }
})

boarSpace5.addEventListener("click", function(){
    if (this.style.color == ""){
        this.textContent = "X";
        console.log("1");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "X")){
        this.textContent = "O";
        console.log("2");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "O")){
        console.log("3");
        this.style.color = "";
    }
})

boarSpace6.addEventListener("click", function(){
    if (this.style.color == ""){
        this.textContent = "X";
        console.log("1");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "X")){
        this.textContent = "O";
        console.log("2");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "O")){
        console.log("3");
        this.style.color = "";
    }
})

boarSpace7.addEventListener("click", function(){
    if (this.style.color == ""){
        this.textContent = "X";
        console.log("1");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "X")){
        this.textContent = "O";
        console.log("2");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "O")){
        console.log("3");
        this.style.color = "";
    }
})

boarSpace8.addEventListener("click", function(){
    if (this.style.color == ""){
        this.textContent = "X";
        console.log("1");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "X")){
        this.textContent = "O";
        console.log("2");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "O")){
        console.log("3");
        this.style.color = "";
    }
})

boarSpace9.addEventListener("click", function(){
    if (this.style.color == ""){
        this.textContent = "X";
        console.log("1");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "X")){
        this.textContent = "O";
        console.log("2");
        this.style.color = "black";
    }else if((this.style.color == "black") && (this.textContent == "O")){
        console.log("3");
        this.style.color = "";
    }
})