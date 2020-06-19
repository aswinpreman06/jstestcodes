 
  $(document).ready(function(){
    $("#submit").click(function(){
      login();
    });
  }); 
  function login(){
    
    var user_name= $("#name").val();
    var password= $("#password").val();
    if((user_name=="" || password=="")){
      $("#hidden").text("no empty fields");
      $("#hidden").css("color","red");
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
  
 