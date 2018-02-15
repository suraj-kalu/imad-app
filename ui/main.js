console.log('Loaded!');


var button = document.getElementById('counter');

button.onclick=function(){
    
 
 //Make a request to counter end point
 
  var request = new XMLHttpRequest();
  
  
  //Capture the respose and store it into the variable
  
  request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE ){
          if(request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
      }
  }
  
  };
    //Make request
    
   request.open('GET','http://surajratnakalu.imad.hasura-app.io/counter',true);
   request.send(null);
};

//Submit name

var nameInput= document.getElementbyId('name');
var name= nameInput.value;
var submit = document.getElementById('submit-btn');

//Make request to server and send the name

//capture the list of names and render it to the list
var names =['name1','name2','name3'];
var list = '';
for(var i =0; i< names.length;i++){
    list += '<li>' + names[i] + '</li>';
}

var ul = document.getElementbyId('nameList');
ul.innerHTML = list;