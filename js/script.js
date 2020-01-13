//JQuery to add focus to the first text box
$(document).ready(function() {
    $('form:first *:input[type!=hidden]:first').focus();
});


//Variables
const jobRole = document.getElementById('title');
const otherRole = document.getElementById('other-title');
const design = document.getElementById('design');
const color = document.getElementById('colors-js-puns');
const colors = document.getElementById('color');
const activity = document.querySelector('.activities');
const checkboxes = document.querySelectorAll('.activities input');
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');
const pay = document.getElementById('payment');
const nameInput = document.getElementById('name');
const button = document.querySelector('button[type="submit"]');
const email = document.getElementById('mail');
const ccNum = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');

//hide items upon loaded page
otherRole.style.display ='none';

//show other roles when user selects other
jobRole.addEventListener('change', function()  {
    if(jobRole.value === 'other'){
        otherRole.style.display = 'block';
    }
    else{
        otherRole.style.display ="none";
    }
});


//Select a design for t-shirt to categorize color
function theme (){
    
    const option = document.createElement('option');
    option.value = 'select';
    option.innerHTML = `Please Select a T-Shirt Desgin`;
    colors.prepend(option);
    colors.selectedIndex = option.value;
    colors[1].style.display='none';
    colors[2].style.display ='none';
    colors[3].style.display ='none';
    colors[4].style.display ='none';
    colors[5].style.display ='none';
    colors[6].style.display ='none';
    console.log(colors.value);
    console.log(colors.selectedIndex);
    console.log(design.value)
    
   
    design.addEventListener('change', function(){
        
     if(design.value === 'js puns'){
         colors.value = colors[1].value;
        
        colors[1].style.display ='block';
        colors[2].style.display ='block';
        colors[3].style.display ='block';
        colors[4].style.display ='none';
        colors[5].style.display ='none';
        colors[6].style.display ='none';

        }
    
        if(design.value === 'heart js'){
           colors.value = colors[4].value;
      
            colors[4].style.display ='block';
            colors[5].style.display ='block';
            colors[6].style.display ='block';
            colors[1].style.display='none';
            colors[2].style.display ='none';
            colors[3].style.display ='none';
        }
        else{
          if(design.value != 'js puns' && design.value !='heart js'){
          colors.value = colors[0].value;    
          colors[0].style.display ='block';
          colors[1].style.display='none';
          colors[2].style.display ='none';
          colors[3].style.display ='none';
          colors[4].style.display ='none';
          colors[5].style.display ='none';
          colors[6].style.display ='none';
          }
        
        }
    
    });
   
    
}
//call theme function to seperate theme colors
theme();
let total = 0;
const totalDiv = document.createElement('div');
    totalDiv.id ='totalDiv';
    totalDiv.innerHTML = `Total: $` + total;
    activity.append(totalDiv);
//Create an event listener for the checkbox in the registery section
function activities(){

    activity.addEventListener('change', (e) => {
    
    const clicked = (e.target);
    const clickedType = clicked.getAttribute("data-day-and-time");
    const cost = parseInt(clicked.getAttribute('data-cost').slice(-3));
    console.log(cost);
    let total = 0;

    for(i =0; i<checkboxes.length; i++){
        if(checkboxes[i].checked){
            total = total + cost;
        }else{
            totla = total - cost;
        }
        const aD = document.getElementById('totalDiv');
        aD.innerHTML = `<div>Total: $` + total + `</div>`;
        
    }
   
    console.log(activity);
   
    //create a for loop to iterate over all checkboxes 
    for(let i = 0; i <checkboxes.length; i++){

        let checkboxType = checkboxes[i].getAttribute("data-day-and-time");
       

        if(clickedType === checkboxType && clicked !== checkboxes[i]){
            if(clicked.checked){
                checkboxes[i].disabled = true;
               
            }
            else{
                checkboxes[i].disabled = false;
               
            }
         }
       
        }
    
    });
}
//call activities function
activities();

//activities cost




//payment section

//hide the paypal anf bitcoin section untik user selects them from dropdown menu
payPal.style.display='none';
bitCoin.style.display ='none';

//make the credit card the default select 
$(function(){
  let cc ='credit card';
  $('#payment').val(cc);
});

//hide selections based on users choice
pay.addEventListener('change', function(){

    if(pay.value === 'paypal'){
        payPal.style.display ='block';
        creditCard.style.display ='none';
        bitCoin.style.display = 'none';
    }
    if(pay.value === 'bitcoin'){
        bitCoin.style.display ='block';
        payPal.style.display ='none';
        creditCard.style.display ='none';
    }
    if(pay.value === 'credit card'){
        creditCard.style.display ='block';
        payPal.style.display ='none';
        bitCoin.style.display ='none';
    }
});



//form validation creating span tags to show errors

//Name Error tag
const spanName = document.createElement('span');
spanName.classList = 'validate';
spanName.innerHTML ='Please enter a valid Name';
spanName.style.color ='red';
spanName.style.display ='none';
nameInput.appendChild(spanName);

//Email Error tag
const spanMail = document.createElement('span');
spanMail.classList ='validate';
spanMail.innerHTML = 'Please enter a valid Email';
spanMail.style.color ='red';
spanMail.style.display ='none';


//Reg Error tag
const spanReg = document.createElement('span');
spanReg.classList = 'validate';
spanReg.innerHTML = 'Select at least ONE Activity';
spanReg.style.color ='red';
spanReg.style.display ='none';

//Credit Card Number tag
const spanCredit = document.createElement('span');
spanCredit.classList ='validate';
spanCredit.innerHTML = 'Credit Card must contain 13 to 16 digits';
spanCredit.style.color ='red';
spanCredit.style.display ='none';

//Zip tag
const spanZip = document.createElement('span');
spanZip.classList ='validate';
spanZip.innerHTML ='Please enter a valid Zip Code';
spanZip.style.color ='red';


//CVV tag
const spanCVV = document.createElement('span');
spanCVV.classList ='validate';
spanCVV.innerHTML = 'Please enter a valid CVV';
spanCVV.style.color ='red';
spanCVV.style.display ='none';


//use an event listener to see if form is valid after submit

let x = document.querySelector('form');

//name validation
x.addEventListener('submit', function(e) {
    
        e.preventDefault();
    function validateName(nameInput){
    if(nameInput.value =="" ){   
        nameInput.after(spanName);
        spanName.style.display = 'block';
        nameInput.focus();
        
         }
         else{
            spanName.style.display ='none';
             
         }
    

    }
    validateName(nameInput);

    e.preventDefault();
   //email validation
   
   function validateEmail(email){
       const reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

   if(!reg.test(email.value)){
    email.after(spanMail);
    spanMail.style.display ='block';
    email.focus();
    
       
   }
    else {
        
        spanMail.style.display ='none';
      
       
   }
} 
validateEmail(email);


//activity validation
    function validateActivity(checkboxes){
    e.preventDefault();
 
    for(let i=0; i<checkboxes.length; i++){
          
        if(checkboxes[i].checked == false){
            totalDiv.after(spanReg);
            spanReg.style.display ='block';
            activity.focus();
          
          
           
        }
        else{ 
            spanReg.style.display ='none';
            return true;
        }
    }
    }
    validateActivity(checkboxes);


//payment validation

    e.preventDefault();

    function validateCard(ccNum){
         let cardno = /^[\d]{4}[\d]{4}[\d]{4}[\d]{1,4}$/
         if(!cardno.test(ccNum.value)){
            ccNum.after(spanCredit);
            spanCredit.style.display ='block';
            ccNum.focus();
                
        }
        else{
            spanCredit.style.display='none';
            
        }
    }
    //call validateCard function
    validateCard(ccNum);

    function validateZip(zip){
        let zipReg = /^\d{5}(?:[-\s]\d{4})?$/;
        if(!zipReg.test(zip.value)){
            zip.after(spanZip);
            spanZip.style.display ='block';
            zip.focus();
        }
        else{
            spanZip.style.display ='none';
        }
    }
    //call validateZip function
    validateZip(zip);

    function validateCVV(cvv){
        let cvvReg = /^\d{3}$/;
        if(!cvvReg.test(cvv.value)){
            cvv.after(spanCVV);
            spanCVV.style.display = 'block';
            cvv.focus();
        }
        else{
            spanCVV.style.display ='none';
        }
    }
    //call validateCVV function
    validateCVV(cvv);


console.log(x);
console.log(ccNum);
//reset form after submission 
b = document.querySelector('button');

x.addEventListener('submit', function(e){
    if(validateEmail(email) === false){
        e.preventDefault();
    }
    if(validateName(name) === false){
        e.preventDefault();
    }
    if(validateActivity(checkboxes) === false){
        e.preventDefault();
    }
    if(pay.value === 'credit card'){
        if(validateCard(ccNum) === false){
            e.preventDefault();
        }
        if(validateZip(zip) === false){
            e.preventDefault();
        }
        if(validateCVV(cvv) === false){
            e.preventDefault();
        }
    }
    x.submit();
});
        
  
}); 
   

