function shyam(){
var a=document.getElementsByTagName("input")
var x=0
if(a[2].checked){
	x=x+5;
}
// this is the second question answer
if(a[4].checked){
	x=x+5;
}
// this is the thired question answer
if(a[9].checked){
	x=x+5;
}
else{
	alert("wrong...../fill correctly")
}


alert("your marks is:="+x)


}