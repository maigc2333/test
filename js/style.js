n=0;
function moveLeft(){
	if(n<$(".img-box img").length-1){
		n=n+1;
	}else{
		n=0;
		$(".img-box").css({marginLeft:0});
	}
	$(".img-box").animate({marginLeft:-440*n},1000);
	$(".ctrl_button li").removeClass("current");
	if(n==$(".img-box img").length){
		$(".ctrl_button li").eq(0).addClass("current");
	}else{
		$(".ctrl_button li").eq(n).addClass("current");
	}
}
t=setInterval(moveLeft,5000);
$(".ctrl_button li").click(function(){
	n = $(this).index();
	$(".img-box").animate({marginLeft:-440*n},1000);
	$(".ctrl_button li").removeClass("current").eq(n).addClass("current");
})
