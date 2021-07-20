function addcard(){
    if(document.getElementById("2vname").value != "")
       {
        document.getElementById("addcard").style.display = "none";           
       }
    document.getElementById("editbut1").click();           
   }
   

   function showInput() {
       
    var mob = /^[6-9]{1}[0-9]{9}$/;
    var txtMobile = document.getElementById('1vmobile');
    if (mob.test(txtMobile.value) == false) {
    alert("Please enter valid mobile number.");
    txtMobile.focus();
    document.getElementById('1vmobile').value = document.getElementById("1mobile").innerHTML;
    document.getElementById("editbut").click();
    return false;
    }
    else
    {
    document.getElementById('1mobile').innerHTML = document.getElementById("1vmobile").value;
    }
    var pin = /^[1-9]{1}[0-9]{5}$/;
    var txtPin = document.getElementById('1vpincode');
    if (pin.test(txtPin.value) == false) {
    alert("Please enter valid pincode.");
    txtPin.focus();
    document.getElementById('1vpincode').value = document.getElementById("1pincode").innerHTML;
    document.getElementById("editbut").click();
    return false;
    }
    else
    {
    document.getElementById('1pincode').innerHTML = document.getElementById("1vpincode").value;
    }
    if(document.getElementById('1vname').value != "") {
        document.getElementById('1name').innerHTML = document.getElementById("1vname").value;
      }
      else
      {
        alert("Enter the Your Name");
        document.getElementById("1vname").value = document.getElementById('1name').innerHTML;
      }
      if(document.getElementById('1vstreet').value != "") {
        document.getElementById('1street').innerHTML = document.getElementById("1vstreet").value;
      }
      else
      {
        alert("Enter the Your Street");
        document.getElementById("1vstreet").value = document.getElementById('1street').innerHTML;
      }
      if(document.getElementById('1varea').value != "") {
        document.getElementById('1area').innerHTML = document.getElementById("1varea").value;
      }
      else
      {
        alert("Enter the Your Area");
        document.getElementById("1varea").value = document.getElementById('1area').innerHTML;
      }
      if(document.getElementById('1vcity').value != "") {
        document.getElementById('1city').innerHTML = document.getElementById("1vcity").value;
      }
      else
      {
        alert("Enter the Your City");
        document.getElementById("1vcity").value = document.getElementById('1city').innerHTML;
      }
      if(document.getElementById('1vstate').value != "") {
        document.getElementById('1state').innerHTML = document.getElementById("1vstate").value;
      }
      else
      {
        alert("Enter the Your State");
        document.getElementById("1vstate").value = document.getElementById('1state').innerHTML;
      }
    }


    function showInput1() {
       
    var mob1 = /^[6-9]{1}[0-9]{9}$/;
    var txtMobile1 = document.getElementById('2vmobile');
    if (mob1.test(txtMobile1.value) == false) {
    alert("Please enter valid mobile number.");
    txtMobile1.focus();
    document.getElementById('2vmobile').value = document.getElementById("2mobile").innerHTML;
    document.getElementById("editbut1").click();
    return false;
    }
    else{
      document.getElementById("addcard").style.display = "none";
        document.getElementById('2mobile').innerHTML = document.getElementById("2vmobile").value;
    }
    var pin1 = /^[1-9]{1}[0-9]{5}$/;
    var txtPin1 = document.getElementById('2vpincode');
    if (pin1.test(txtPin1.value) == false) {
    alert("Please enter valid pincode.");
    txtPin.focus();
    document.getElementById('2vpincode').value = document.getElementById("2pincode").innerHTML;
    document.getElementById("editbut1").click();
    return false;
    }
    else{
      document.getElementById("addcard").style.display = "none";
        document.getElementById('2pincode').innerHTML = document.getElementById("2vpincode").value;
    }

    if(document.getElementById('2vname').value != "") {
      document.getElementById("addcard").style.display = "none";
        document.getElementById('2name').innerHTML = document.getElementById("2vname").value;
      }
      else
      {
        alert("Enter the Your Name");
        document.getElementById("2vname").value = document.getElementById('2name').innerHTML;
      }
      if(document.getElementById('2vstreet').value != "") {
        document.getElementById("addcard").style.display = "none";
        document.getElementById('2street').innerHTML = document.getElementById("2vstreet").value;
      }
      else
      {
        alert("Enter the Your Street");
        document.getElementById("2vstreet").value = document.getElementById('2street').innerHTML;
      }
      if(document.getElementById('2varea').value != "") {
        document.getElementById("addcard").style.display = "none";
        document.getElementById('2area').innerHTML = document.getElementById("2varea").value;
      }
      else
      {
        alert("Enter the Your Area");
        document.getElementById("2varea").value = document.getElementById('2area').innerHTML;
      }
      if(document.getElementById('2vcity').value != "") {
        document.getElementById("addcard").style.display = "none";
        document.getElementById('2city').innerHTML = document.getElementById("2vcity").value;
      }
      else
      {
        alert("Enter the Your City");
        document.getElementById("2vcity").value = document.getElementById('2city').innerHTML;
      }
      if(document.getElementById('2vstate').value != "") {
        document.getElementById("addcard").style.display = "none";
        document.getElementById('2state').innerHTML = document.getElementById("2vstate").value;
      }
      else
      {
        alert("Enter the Your State");
        document.getElementById("2vstate").value = document.getElementById('2state').innerHTML;
      }
    }       

    window.onload = function () {
    document.getElementById("savedata").click();
    document.getElementById("bag").style.display = "none";
    document.getElementById("firstaddcard1").style.boxShadow = "0px 10px 30px 10px #fff9f8";
    document.getElementById("firstaddcard1").style.backgroundColor = " #f4fdfb";
    document.getElementById("firstaddcard1").style.border = " 1px solid #b9f0e5";
    document.getElementById("delopt").style.boxShadow = "0px 10px 30px 10px #fff9f8";
    document.getElementById("delopt").style.backgroundColor = " #fff9f8";
    document.getElementById("delopt").style.border = " 1px solid #b9f0e5";
    
    };
    function remove(){
    document.getElementById("addcard").style.display = "block";
    if( document.getElementById("2vname").value != ""){
    document.getElementById('1vname').value = document.getElementById("2vname").value;
    document.getElementById('1vstreet').value = document.getElementById("2vstreet").value;
    document.getElementById('1varea').value = document.getElementById("2varea").value;
    document.getElementById('1vcity').value = document.getElementById("2vcity").value;
    document.getElementById('1vstate').value = document.getElementById("2vstate").value;
    document.getElementById('1vpincode').value = document.getElementById("2vpincode").value;
    document.getElementById('1vmobile').value = document.getElementById("2vmobile").value;
    
    document.getElementById('1name').innerHTML = document.getElementById("2name").innerHTML;
    document.getElementById('1street').innerHTML = document.getElementById("2street").innerHTML;
    document.getElementById('1area').innerHTML = document.getElementById("2area").innerHTML;
    document.getElementById('1city').innerHTML = document.getElementById("2city").innerHTML;
    document.getElementById('1state').innerHTML = document.getElementById("2state").innerHTML;
    document.getElementById('1pincode').innerHTML = document.getElementById("2pincode").innerHTML;
    document.getElementById('1mobile').innerHTML = document.getElementById("2mobile").innerHTML;

    document.getElementById("2name").innerHTML = "";
    document.getElementById("2street").innerHTML = "";
    document.getElementById("2area").innerHTML = "";
    document.getElementById("2city").innerHTML = "";
    document.getElementById("2state").innerHTML = "";
    document.getElementById("2pincode").innerHTML = "";
    document.getElementById("2mobile").innerHTML = "";


    document.getElementById("2vname").value = "";
    document.getElementById("2vstreet").value = "";
    document.getElementById("2varea").value = "";
    document.getElementById("2vcity").value = "";
    document.getElementById("2vstate").value = "";
    document.getElementById("2vpincode").value = "";
    document.getElementById("2vmobile").value = "";
    document.getElementById("addcard").style.display = "block";
    }
    else{
    alert("please enter the another address");

    document.getElementById("1vname").value = "";
    document.getElementById("1vstreet").value = "";
    document.getElementById("1varea").value = "";
    document.getElementById("1vcity").value = "";
    document.getElementById("1vstate").value = "";
    document.getElementById("1vpincode").value = "";
    document.getElementById("1vmobile").value = "";

    document.getElementById("editbut").click();
    }
    }
    function remove1(){
    document.getElementById("addcard").style.display = "block";

    document.getElementById("2name").innerHTML = "";
    document.getElementById("2street").innerHTML = "";
    document.getElementById("2area").innerHTML = "";
    document.getElementById("2city").innerHTML = "";
    document.getElementById("2state").innerHTML = "";
    document.getElementById("2pincode").innerHTML = "";
    document.getElementById("2mobile").innerHTML = "";

    document.getElementById("2vname").value = "";
    document.getElementById("2vstreet").value = "";
    document.getElementById("2varea").value = "";
    document.getElementById("2vcity").value = "";
    document.getElementById("2vstate").value = "";
    document.getElementById("2vpincode").value = "";
    document.getElementById("2vmobile").value = "";
    document.getElementById("addcard").style.display = "block";
    }
    function close1()
    {
      document.getElementById('1vname').value = document.getElementById("1name").innerHTML;
      document.getElementById('1vstreet').value = document.getElementById("1street").innerHTML;
      document.getElementById('1varea').value = document.getElementById("1area").innerHTML;
      document.getElementById('1vcity').value = document.getElementById("1city").innerHTML;
      document.getElementById('1vstate').value = document.getElementById("1state").innerHTML;
      document.getElementById('1vpincode').value = document.getElementById("1pincode").innerHTML;
      document.getElementById('1vmobile').value = document.getElementById("1mobile").innerHTML;
    }

    function close2()
    {
        document.getElementById("2vname").value = "";
        document.getElementById("2vstreet").value = "";
        document.getElementById("2varea").value = "";
        document.getElementById("2vcity").value = "";
        document.getElementById("2vstate").value = "";
        document.getElementById("2vpincode").value = "";
        document.getElementById("2vmobile").value = "";
        document.getElementById("addcard").style.display = "block";
    }

    function odFunction() {
      var x = document.getElementById("bag");
      if (x.style.display === "none") {
        $(x).show(2000);
        document.getElementById("vdW11").innerHTML = "Close Details";
      } else {
        x.style.display = "none";
        $(x).hide(2000);
        document.getElementById("vdW11").innerHTML = "View Details";
      }
    }
    function in1Function() {
    var radiocolor1 = document.getElementById("firstaddcard1");
    var radiocolor2 = document.getElementById("firstaddcard2");
    if (radiocolor1.style.backgroundColor != "   rgb(138, 238, 180)")
    {
      radiocolor1.style.boxShadow = "0px 10px 30px 10px #f4fdfb";
      radiocolor1.style.backgroundColor = " #ffdcdc";
      radiocolor1.style.border = " 1px solid #b9f0e5";
      radiocolor2.style.backgroundColor = "transparent";
      radiocolor2.style.boxShadow = "0px 0px 0px 0px transparent";
      radiocolor2.style.border = " 1px solid rgba(0, 0, 0, 0.12)";
    }
    }
    function in2Function() {
      var radiocolor1 = document.getElementById("firstaddcard1");
      var radiocolor2 = document.getElementById("firstaddcard2");
      if (radiocolor2.style.backgroundColor != "   rgb(138, 238, 180)")
      {
        radiocolor2.style.boxShadow = "0px 10px 30px 10px #ffdcdc";
        radiocolor2.style.backgroundColor = " #ffdcdc";
        radiocolor2.style.border = " 1px solid #b9f0e5";
        radiocolor1.style.backgroundColor = "transparent";
        radiocolor1.style.boxShadow = "0px 0px 0px 0px transparent";
        radiocolor1.style.border = " 1px solid rgba(0, 0, 0, 0.12)";
      }
      }



    