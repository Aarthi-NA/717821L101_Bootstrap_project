$(document).ready(function(){       
    $('#myModal').modal('show');
     });
     function myFunction() {
        let fname = document.forms["myForm"]["fname"].value;
         let lname = document.forms["myForm"]["lname"].value;
         let email = document.forms["myForm"]["email"].value;
         let company = document.forms["myForm"]["company"].value;
         let phone = document.forms["myForm"]["phone"].value;
       
         var empty = false;
         if ((fname == "")||(lname == "")||(email == "")||(company == "")||(phone == "")) {
           empty =true;
         }
         else if ((validateName(fname)==false)||(validateName(lname)==false)||
           (validateEmail(email)==false)||(validateCompany(company)==false)||
           (validatePhone(phone)==false)){
           empty = true;
         }
       
       
         if(!empty) {
             document.getElementById('send').disabled = false;
         }
         else if(document.getElementById('send').disabled == false){
           document.getElementById('send').disabled = true;
         }
       }
       
       //Name validation only char
       function validateName(name)
       {
           let regex = /^[a-zA-Z ]{2,30}$/;
           if (regex.test(name)) {
               return true;
           }
           else {
               return false;
           }
       }
       
       //([A-Z0-9 ])
       //Email validation
       function validateEmail(email)
       {
           let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           if (regex.test(email)) {
               return true;
           }
           else {
               return false;
           }
       }
       function validateCompany(company)
       {
           let regex = /^[a-zA-Z0-9. ]{2,30}$/;
           if (regex.test(company)) {
               return true;
           }
           else {
               return false;
           }
       }
       
       function validatePhone(phone){
         let regex = /^(\+\d{2,4})?\s?(\d{10})$/;
         if (regex.test(phone)) {
             return true;
         }
         else {
             return false;
         }
       }
       