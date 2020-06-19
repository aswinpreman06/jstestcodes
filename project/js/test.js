
callApi();
function callApi(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users')
    xhr.onload= function(){
      if(this.status==200){
          console.log("hi");
          var response = JSON.parse(this.responseText);
          var users=response.data;
          
          for(i in response.data){
              
              var row = <tr>
       <td>${users[i].id}</td>
       <td>${users[i].email}</td>
       <td>${users[i].firstname}</td>
   
   
              </tr>
              var table=$('#mytable')
              table.append(row);
          
          };
       };   
    };
    xhr.send();  
};

 
