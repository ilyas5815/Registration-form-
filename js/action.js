


// displaying on other html page - form post using id

window.addEventListener('load', () => {      

     
    const params = (new URL(document.location)).searchParams; 
    const FirstName = params.get('fname'); 
    const LastName = params.get("lname");  
    const email = params.get("email");  
    const dob = params.get('dob'); 
    const address = params.get('address'); 
    const gender = params.get('gender'); 


    document.getElementById('result-name').innerHTML = FirstName + ' ' +  LastName; 
    document.getElementById('result-email').innerHTML = email; 
    document.getElementById('result-dob').innerHTML = dob; 
    document.getElementById('result-address').innerHTML = address; 
    document.getElementById('result-gender').innerHTML = gender; 
    document.getElementById('result-welcome').innerHTML = 'Welcome' + ' ' + FirstName + ' ' +  LastName + ' ' + '!' ; 


    // alert("Hey ," + " " + FirstName + " " + " ! " + " " + "Press OK to continue" );     
   
});





  
