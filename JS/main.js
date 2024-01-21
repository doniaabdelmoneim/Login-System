let nameInput=document.getElementById('nameInput')
let emailInput=document.getElementById('emailInput')
let passwordInput=document.getElementById("passwordInput")
let btnsignup=document.getElementById('btnsignup')
// console.log(nameInput ,emailInput , passwordInput)
let alertExist=document.getElementById("alertExist")


let allUser;
if(localStorage.getItem('users') == null){
    allUser=[]
}
else{
    allUser=JSON.parse(localStorage.getItem('users'))

}

/* signin  */

 function addUser(){
    
    
    if(    nameValidition () === true  && emailValidition() === true && passwordValidition() === true && isExist() === false) {

    let user=
    {
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
    
    allUser.push(user)
    
    localStorage.setItem('users',JSON.stringify(allUser))
    alertExist.classList.replace('d-block' , 'd-none')
    let Success=document.getElementById('Success')
    Success.classList.replace('d-none' , 'd-block')

    swal({
        title: "Good !",
        icon: "success",
        button: "ok!",
      });
    setTimeout(()=>{

window.location.href="index.html"

    },3000)
}


}



function nameValidition(){
            let alertName=document.getElementById('alertName')
            let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
                 if(regex.test(nameInput.value) == true && nameInput.value != ""){

                    // nameInput.classList.add("is-valid")
                    // nameInput.classList.remove("is-invalid")
                    alertName.classList.replace('d-block' , 'd-none')

                    return true

            }else{

                // nameInput.classList.remove("is-valid")
                // nameInput.classList.add("is-invalid")
                alertName.classList.replace('d-none' , 'd-block')

                return false
            }



}


function passwordValidition(){
    let alertPassword=document.getElementById('alertPassword')
    let regex = /^.{5,15}$/;
           if(regex.test(passwordInput.value) == true && passwordInput.value != ""){
 
          
            alertPassword.classList.replace('d-block' , 'd-none')

            return true

    }else{

        alertPassword.classList.replace('d-none' , 'd-block')

        return false
    }



}


function emailValidition(){
    let alertEmail=document.getElementById('alertEmail')
    let regex = /@[a-z]{5,10}(\.com)$/;
               if(regex.test(emailInput.value) == true && emailInput.value != ""){
 
          
            alertEmail.classList.replace('d-block' , 'd-none')

            return true

    }else{


        alertEmail.classList.replace('d-none' , 'd-block')

        return false
    }



}


function isExist(){


        for(let i =0 ; i<allUser.length ;i++){

            if(allUser[i].email.toLowerCase()  === emailInput.value.toLowerCase() ){

               alertExist.classList.replace('d-none' , 'd-block')
                return true

            }
         
        }
        return false


}

/* login */


function login(){

    
    let logEmail=document.getElementById('logEmail')
    let logPassword=document.getElementById('logPassword')
    let nottExist=document.getElementById('nottExist')
    if(logemailValidition() && logpasswordValidition()){
        
        for(let i=0 ; i<allUser.length ; i++ ){
            if(allUser[i].email === logEmail.value && allUser[i].password == logPassword.value){
                nottExist.classList.replace('d-block' ,'d-none')
                
                localStorage.setItem("name" ,allUser[i].name)
                console.log(localStorage.getItem('name'))
                window.location.href="home.html"
                console.log("doog")
                
                   

        }else{
            nottExist.classList.replace('d-none' ,'d-block')
        }
    
    
    
    
    
    }
}

}



/* home */
function logemailValidition(){
    let logEmail=document.getElementById('logEmail')

    let alertEmail=document.getElementById('alertEmail')
    let regex = /@[a-z]{5,10}(\.com)$/;
               if(regex.test(logEmail.value) == true && logEmail.value != ""){
 
          
            alertEmail.classList.replace('d-block' , 'd-none')

            return true

    }else{


        alertEmail.classList.replace('d-none' , 'd-block')

        return false
    }



}



function logpasswordValidition(){
    let logPassword=document.getElementById('logPassword')

    let alertPassword=document.getElementById('alertPassword')
    let regex = /^.{5,15}$/;
           if(regex.test(logPassword.value) == true && logPassword.value != ""){
 
          
            alertPassword.classList.replace('d-block' , 'd-none')

            return true

    }else{

        alertPassword.classList.replace('d-none' , 'd-block')

        return false
    }



}


function homeWelcom(){
    

    let name=document.getElementById('name')

    name.innerHTML =  localStorage.getItem('name') 

}

function logout(){

    let name=document.getElementById('name')

localStorage.removeItem('name')

name.innerHTML = ""


window.location.href="index.html"


}
