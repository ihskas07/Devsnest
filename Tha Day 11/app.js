function submit(){
    var name  = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var CNIC  = document.getElementById("CNIC").value;
    var quiz = document.getElementsByTagName("div");
    quiz[0].style.display = "none";
    var Questions = document.getElementById("Questions")
    Questions.className += " aa"
    
}

var count = 1;

function Answers(){

    var Q1= document.getElementById("Q1");
    var Q2 = document.getElementById("Q2");
    var Q3 = document.getElementById("Q3");
    var Q4 = document.getElementById("Q4");

    
    //Answers Checking        
    for(var i=0;i<Q1.childNodes.length;i++){
        if( Q1.childNodes[i].nodeType == 1){
            //Question 1 answer
            if (Q1.childNodes[i].checked == true){
                if(Q1.childNodes[i].value == "Hyper Text Transfer Protocol"){
                    count++
                }
            }
            //Question 2 answer
            if (Q2.childNodes[i].checked == true){
                if(Q2.childNodes[i].value == "1980"){
                    count++
                }
            }
            //Question 3 answer
            if (Q3.childNodes[i].checked == true){
                if(Q3.childNodes[i].value == "HTML"){
                    count++
                }
            }
            
            //Question 4 answer
            if (Q4.childNodes[i].checked == true){
                if(Q4.childNodes[i].value == "Application software"){
                    count++
                }
            }
                      
        }
    }
    console.log(count) 
    var Result = document.getElementById("Result")
    Result.className = "Result"
    
    var ResPara = document.getElementById("ResPara")
    if (count === 4){
        ResPara.innerHTML = "Congrates!! "+ name + "You have scored 40 Marks"
    }    
    if(count===3){
        ResPara.innerHTML=name + ", \n You have scored 30 marks "
    }
    if(count===2){
        ResPara.innerHTML=name + ", \n You have scored 20 marks"
    }
    if (count==1){
        ResPara.innerHTML=  + ", \n You have anly been able to score 10 marks"
    }
    Questions.className="hidden"

    console.log(name)
}