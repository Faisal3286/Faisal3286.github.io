 
var database=[
    {
    	username:"Faisal",
    	password:"password"
    },
    {
    	username:"danis",
    	password:"123"
    },
    {
    	username:"yasir",
    	password:"1234"
    }


];
var newsFeed=[
     {
     	username:"ali",
     	timeLine:"so enjoy from all taht learning!"
     },
      {
     	username:"ahsan",
     	timeLine:"jaascript is sooo cool!"
      }
];

function isUserVaild(username,password){
	for(var i=0; i<database.length; i++){
 		if (database[i].username === username &&
 			database[i].password === password) {
 			return true;
 		}
 	}
 		return false;
}


 function signin(username,password) {
 		
 		 if (isUserVaild(username,password)) {
 			console.log(newsFeed);
 		    }
 		    else{
 		    	alert("sorry wrong user name and password");
 		    }
 	    
 	
 	
 	  // if (username === database[0].username &&
 	  //  password === database[0].password) {
 	  // 	console.log(newsFeed);
 	  // }
 	  // else{
 	  // 	alert("sorry wrong username and password");
 	  // }
 }

 var userNamePrompt = prompt("what's your name?");
var passwordPrompt = prompt("what's your password?");
signin(userNamePrompt,passwordPrompt);

