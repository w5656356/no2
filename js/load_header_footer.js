define(["jquery","cookie"],function($){
	$.ajax({
		type : "get",
		url : "/html/include/header.html",
		success : function(data){
			var _username = $.cookie("loginUser")
			if(_username){	
				$(data).filter(".login_reg")
					  .html(`欢迎您:${_username}`).end()
					  .appendTo(".header")
			}else{
				$(data).appendTo(".header")
			}
			//头部-顶部菜单栏动画效果
			$(".head_top_inner_right_ul li").hover(function(){
			$(this).css({
				"background-color" : "black",
				"opacity" : 0.85
			})
			$(this).children("ul").stop().slideDown("slow");
			console.log("bbb")
			},function(){
				$(this).children("ul").stop().slideUp("slow",function(){
					$(this).parent().css({
					"background" : "none",
					"opacity" : 1
				})
				});
			})
		}
	});
})