name_student_array=[];
function get(){
    var display_student_array=[];
    for(var j=1;j<=4;j++){
        var name_of_student=document.getElementById("input"+j).value;
  name_student_array.push(name_of_student);      
    }
    console.log(name_student_array);
    document.getElementById("display").innerHTML=name_student_array.join(" ");
}