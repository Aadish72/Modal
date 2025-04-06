let inp1=document.getElementById("inp1")
let inp2=document.getElementById("inp2")
let inp3=document.getElementById("inp3")
let inp4=document.getElementById("inp4")
let inp5=document.getElementById("inp5")




let form=document.getElementById("form")

function openPopup(){
     form.classList.add("openpopup")
}
function alertPopup(){
        if(inp1.value!=""&&inp2.value!=""&&inp3.value!=""&&inp4.value!=""&&inp5.value!=""){
          alert("please complete the details");
        }
        else{
    form.classList.remove("openpopup");
    alert("Thank you for submitting the form");
        }
}
     

function closePopup(){
    form.classList.remove("openpopup")
}

