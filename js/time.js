function changeImage() {
  var today = new Date();
  var number = today.getDay();
  document.images["myImage"].src = "images/" + "day/" + number + ".png";
}

function abuoutme () {
	 alert("邮箱：1610040024@qq.com") 
}

function Friendship_link () {
	 var link=confirm("即将跳转到一个充满魔性的外部链接，是否确定要跳转？") ;
	 if (link==true) {
	 	window.open('http://www.staggeringbeauty.com/','_blank');
	 } 
	 else {
	 	
	 }
}