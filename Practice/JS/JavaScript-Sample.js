function TestFunction(){
  // var testVariable = document.getElementById("test1").innerHTML;
  // alert("Output: " + testVariable);

  var username = document.getElementById("username").value;
  var fname = document.getElementById("fname").value;
  alert(fname + "" + username);

  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  console.log(num1 + num2);

  var eyeColor = document.getElementById("eyeColor").value;
  console.log(eyeColor);

  document.getElementById("test1").innerHTML = num1 + num2;

  // USING IF-ELSE
  // if(eyeColor == "pink"){
  //   document.getElementById("test1").innerHTML = num1 + num2;
  // }else if (eyeColor == "green"){
  //   document.getElementById("test1").innerHTML = num1 * num2;
  // }
  // ALTERNATIVE
  // var output = 0;
  // if(eyeColor == "pink"){
  //   output = num1 + num2;
  // }else if (eyeColor == "green"){
  //   output = num1 * num2;
  // }
  // document.getElementById("test1").innerHTML = output;

   //USING SWITCH CASE
   var output = 0;
   switch(eyeColor){
     case "pink":
        output = num1 + num2;
        document.getElementById("test1").style.backgroundColor = "pink";
        document.getElementById("test1").style.color = "white";
        break;

     case "green":
     document.getElementById("test1").style.backgroundColor = "green";
     document.getElementById("test1").style.color = "orange";
     break;
   }

   document.getElementById("test1").innerHTML = output;

}

function ResetFunction(){
  document.getElementById("num1").value = 0;
  document.getElementById("num2").value = 0;
  document.getElementById("test1").style.backgroundColor = "white";
  document.getElementById("test1").style.color = "black";
  document.getElementById("test1").innerHTML = "Output";
}
