Studentinput=[];
function submit(){
var name1=document.getElementById("name_of_the_student_1").value;
var name2=document.getElementById("name_of_the_student_2").value;
var name3=document.getElementById("name_of_the_student_3").value;
var name4=document.getElementById("name_of_the_student_4").value;


Studentinput.push(name1);
Studentinput.push(name2);
Studentinput.push(name3);
Studentinput.push(name4);


console.log(Studentinput);

document.getElementById("display_name").innerHTML=Studentinput;
document.getElementById("Submit_Button").style.display = "none";
document.getElementById("Sort_Button").style.display = "inline-block";
}

function sort(){
Studentinput.sort();
console.log(Studentinput);
document.getElementById("display_name").innerHTML=Studentinput
}