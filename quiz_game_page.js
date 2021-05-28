function changescreen(){
    window.location = "2ndindex.html";
}
function addUser(){
    document.getElementById("p_1_text").value;
    document.getElementById("p_2_text").value;

    localStorage.setItem("p_1_text");
    localStorage.setItem("p_2_text");
}
function send(){
    document.getElementById("number1").value;
    document.getElementById("number2").value;
    actual_answer=(number1)*parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value = "";
    document.getElementById("number1").value = "";
}
