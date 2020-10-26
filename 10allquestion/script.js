// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 6

function changeColor (){
	var q6_text = document.querySelector("#q6-text");
    q6_text.style.color="blue";
}


// Q 7

let msg = document.querySelector("#q7-text");
msg.addEventListener("mouseover",function(){
	this.style.color = "blue";
	this.style.backgroundColor = "green";
});

// Q 8
let message = document.querySelector("#q8-text");
message.addEventListener("mouseover",function(){
	this.style.color = "red";
	this.style.backgroundColor = "green";
});
    message.addEventListener("mouseleave",function(){
	this.style.color = "";
	this.style.backgroundColor = "";
});


// Q 9
 var input = document.querySelector("#q9-input");
 var text = document.querySelector("#q9-result");
 var btn = document.querySelector('#q9-btn');
console.log(btn);
btn.addEventListener('click', function () {
  text.textContent = input.value;
})

// Q 10
 var input2 = document.querySelector("#q10-input");
 var text2 = document.querySelector("#q10-result");
 var btn2 = document.querySelector('.q10-btn');
console.log(btn2);
btn2.addEventListener('click', function () {
	if (input2.value >= 20) {
    console.log("利用できます")
    text2.textContent = "利用できます";
  	}else{
	console.log("利用できません");
	text2.textContent = "20歳未満の方の利用は禁止です。";
	}
  // text2.textContent = input2.value;
})



