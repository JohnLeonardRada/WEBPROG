function TestFunction(){

  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  console.log(num1 + num2);

  var operation = document.getElementById("operation").value;
  console.log(operation);

  document.getElementById("test1").innerHTML = num1 + num2;

   //USING SWITCH CASE
   var output = 0;
   switch(operation){
     case "addition":
        output = num1 + num2;
        alert("Addition");
        document.getElementById("test1").style.backgroundColor = "green";
        document.getElementById("test1").style.color = "white";
        break;

     case "subtraction":
        alert("Subtraction");
        output = num1 - num2;
        document.getElementById("test1").style.backgroundColor = "red";
        document.getElementById("test1").style.color = "white";
        break;

     case "multiplication":
        alert("Multiplication");
        output = num1 * num2;
        document.getElementById("test1").style.backgroundColor = "blue";
        document.getElementById("test1").style.color = "white";
        break;

     case "division":
        alert("Division");
        output = num1 / num2;
        document.getElementById("test1").style.backgroundColor = "orange";
        document.getElementById("test1").style.color = "white";
        break;

   }

   document.getElementById("test1").innerHTML = output;

}

function ResetFunction(){
  document.getElementById("num1").value = 0;
  document.getElementById("num2").value = 0;
  document.getElementById("container").innerHTML = "";

}
