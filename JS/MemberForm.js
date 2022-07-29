let fnameNode=document.getElementById("fname");
let ageNode=document.getElementById("age");
let mobileNode=document.getElementById("contact");
let emailNode=document.getElementById("mail");
let errorNode1=document.getElementById("error1");
let errorNode2=document.getElementById("error2");
let errorNode3=document.getElementById("error3");
let errorNode4=document.getElementById("error4");
let errorNode5=document.getElementById("error5");
let errorNode6=document.getElementById("error6");
let array=[errorNode1,errorNode2,errorNode3,errorNode4,errorNode5,errorNode6];
for(let node of array){
  node.style.color="red";
}

function validateForm(){
    let v1=validate1();
    let v2=validate2();
    let v3=validate3();
    let v4=validate4();
    let v5=validate5();
    let v6=validate6();  

   count=0
   let arr=[v1,v2,v3,v4,v5,v6]
   for(let ele of arr){
    if (ele === true){
        count=count+1
    
   }
}
   if(count===6){
   
    window.alert("Thank you for taking our membersip.")

 
   }
   return (v1 && v2 && v3 && v4 &&v5 && v6)
    
}


function validate1(){
    let fname=fnameNode.value;
    let regex=new RegExp("^[A-Za-z]*$");
    errorNode1.innerHTML="";
    if(fname===''){
        errorNode1.innerHTML="<small>First name is required</small>";
        fnameNode.style.border="2px solid red";
        return false;
    }
    else if(regex.test(fname)==false){
        errorNode1.innerHTML="<small>First name must have only letters</small>";
        fnameNode.style.border="2px solid red";
        return false;
    }
    else{
        fnameNode.style.border="2px solid green";
        return true;
    }
}
function validate2(){
    let age=ageNode.value;
    errorNode2.innerHTML="";
    if(age===''){
        errorNode2.innerHTML="<small>Age is required</small>";
        ageNode.style.border="2px solid red";
        return false;
    }
    else if(age<20 || age>60){
        errorNode2.innerHTML="<small>Age must be between 20 to 60</small>";
        ageNode.style.border="2px solid red";
        return false;
    }
    else{
        ageNode.style.border="2px solid green"; 
        return true;
    }
}
function validate3(){
    let mobile=mobileNode.value;
    errorNode3.innerHTML="";
    let regex=new RegExp("^[0-9]{10}$");
    console.log(mobile);
    console.log(regex.test("mobile"));
    if(mobile===''){
        errorNode3.innerHTML="<small>Mobile number is required</small>";
        mobileNode.style.border="2px solid red";
        return false;
    }
    else if(regex.test(mobile)===false){
        errorNode3.innerHTML="<small>Mobile number must be 10 digits number</small>";
        mobileNode.style.border="2px solid red";
        return false;
    }
    else{
        mobileNode.style.border="2px solid green";
        return  true;
    }

}
function validate4(){
    let email=emailNode.value;
    errorNode4.innerHTML="";
    if(email===''){
        errorNode4.innerHTML="<small>Email is required</small>";
        emailNode.style.border="2px solid red";
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode4.innerHTML="<small>Please enter valid email</small>";
        emailNode.style.border="2px solid red";
        return false;
    }
    else{
        emailNode.style.border="2px solid green";
        return true;
    }
}
function validate5(){
    errorNode5.innerHTML=""
   
    let m=document.getElementById("male")
    let f=document.getElementById("female")

    if(m.checked){
        console.log(m.value)
        return true
    }
    else if(f.checked){
        console.log(f.value)
        return true

    }
    else{
        errorNode5.innerHTML="<small>Select one option</small>"
        return false
    }

}
function validate6(){
   errorNode6.innerHTML=""
   
    let y=document.getElementById("yes")
    let n=document.getElementById("no")

    if(y.checked){
        console.log(y.value)
        return true
    }
    else if(n.checked){
        console.log(n.value)
        return true

    }
    else{
        errorNode6.innerHTML="<small>Select one option</small>"
        return false
    }

}