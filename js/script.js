
// registration validation



// date of birth

$.validator.addMethod("validDate", function (value, element) {
    var  minDate = Date.parse("01/01/1990");  
     var today=new Date();
     var DOB = Date.parse(value);  
     if((DOB <= today && DOB >= minDate)) {  
         return true;  
     }  
     return false;   
 }, "NotValid")

// space 

$.validator.addMethod("noSpace", function(value , element){
    return this.optional(element) 
    || value == '' 
    ||  value.trim().length != 0 ;
},"Spaces are not allowed")  

// password strength 

$.validator.addMethod('strongPassword',function(value , element){
    return this.optional(element) 
    || value.length >= 6  
    && /\d/.test(value) 
    && /[a-z]/i.test(value); 

},"Your password must be atleast 6 characters long and contain at least one number and one char")



// jquery validation using validation plugin  


$("#formValidation").validate({   

    rules:{ 
        fname :{ 
            required:true,
            noSpace : true, 
            minlength: 2,
        },

        lname :{
            required:true, 
            noSpace : true, 
            minlength: 2, 
        },

        gender : {
            required : true,
        },

        email :{
            required : true,
            email : true
        },

        address :{
            required : true, 
            minlength : 15 ,  
           
        }, 

        dob : {
            required : true,
            validDate : true
        }, 

        pwd : {
            strongPassword : true,
            required : true,
        },

        confirm : {
            required : true,
            equalTo : "#pwd",
        }
       
        
    },

    messages: {
        fname:{
            required: "Please enter your Firstname",
            minlength:"Name atleast 2 characters",
          
        },

        lname:{
            required: "Please enter your Lastname",
            minlength:"Name atleast 2 characters" 

        },

        gender : {
            required : "Please select your gender"

        },

        email:{
            required : "Please enter an email address",
            email : "Please enter a <em>valid</em> email address !"
        },

        address : {
            required : "Please enter your address",
            minlength : "Please enter a valid address"
        },

        dob : {
            required : "Please select your date of birth"
        },

        pwd : {
            required : "Please enter Password"
        },

        confirm :{
            required : "Please enter the password again",
            equalTo : " Password not matching !" 
        },
      
      },    
      

        
    submitHandler: function(form){     

        form.submit();    
      
    }       
    
   }); 

   

   
   


