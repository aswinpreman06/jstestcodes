 <script>
  $(document).ready(function(){
    $("#submit").click(function(){
      login();
    });
  }); 
  function login(){
    var user_name= $("#name").val();
    var password= $("#password").val();
    if((user_name=="" || password=="")){
      $("#err1").html("no empty fields");
      $("#err1").css("color","red");
      return false;
    }
    $.ajax({
        url: "https://reqres.in/api/login",
        type: "POST",
        data: {
            email: user_name,
            password: password
        },
        success: function(response){
            console.log(response);
        }
    });
      
  }
 </script>
