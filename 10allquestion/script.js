// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 6

function changeColor (){
	var q6_text = document.querySelector("#q6-text");
    q6_text.style.color="blue";
}

// Q 6 変数使わない場合
// function changeColor (){
// 	document.querySelector("#q6-text").style.color="blue";
// }

// Q 6 イベントリスナー使う場合
// htmlのonclickはいらない
// document.querySelector("#q6-text").addEventListener("click",function(){
// this.style.color="blue";
// }

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
var btn = document.querySelector('#q9-btn');
console.log(btn);
btn.addEventListener('click', function () {
var text = document.querySelector("#q9-result");
var input = document.querySelector("#q9-input");
  text.textContent = input.value;
})

// Q 10
// 問題６０歳以上を入力された場合「６０歳以上の人は半額です。それ以外の人はふつうの数字を入力
 var btn2 = document.querySelector('.q10-btn');
console.log(btn2);
btn2.addEventListener('click', function () {
 var input2	 = document.querySelector("#q10-input");
 var text2 = document.querySelector("#q10-result");
	if (input2.value < 20) {
   text2.textContent = "20歳未満の方の利用は禁止です。";
  	}else if(input2.value >= 60){
	text2.textContent = "60歳以上の方は半額です。";
	}else{
	text2.textContent = input2.value;
	}
});








