console.log('Loaded!');

// var element = document.getElementById('main-text');
// element.innerHTML = 'New value';

//  var img = document.getElementById('madi');

//  var marginLeft =0;

// function moveRight(){
//      marginLeft = marginLeft + 10;
//     img.style.marginLeft = marginLeft + 'px';
//  }

//  img.onclick = function(){
//      var interval= setInterval(moveRight,50);
//  };

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