function mybutton(){
    let myText = document.getElementById("topic").value; 
    let myText_2 = myText.replace(/\s+/g, '');
    let myNumber = document.getElementById("num").value; 
    let lines = document.getElementById("lines").value;
    let myLines = " "; 
    let formattingList = document.getElementById("list"); 
    let outputTextStyle = formattingList.value; 
    for(let i = 0; i < myNumber; i++){
        myLines += '#' + myText_2 + "\n"; 
    }
    if(document.getElementById("num").value.length === 0){
        alert("Enter the number to generate lines");
            document.getElementById("lines").value = "null";

    }
    else if(document.getElementById("topic").value.length === 0){
        alert("Enter the topic name or keyword");
        document.getElementById("lines").value = "null";
    }
    else{
    document.getElementById("lines").value = myLines;
   document.getElementById("lines").style.textTransform = outputTextStyle;
    }
}
function myCopy(){
  const copyText = document.getElementById("lines"); 
  copyText.select();
  document.execCommand("copy"); 
} 
