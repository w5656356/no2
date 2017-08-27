require(["config"],function(){
	require(["jquery","load"],function(){
		$(document).ready(function(){ 
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
		})
		require(["carpack"],function(){
			
		});
		//A系楼层1，选项卡1
		$(".pre_lay_1_right_top_head_li1").mouseenter(function(){
			$(".pre_lay_1_right_top_body_u1").show();
			$(".pre_lay_1_right_top_head_li1").addClass("checkbox_on")
			$(".pre_lay_1_right_top_head_li2").removeClass("checkbox_on")
			$(".pre_lay_1_right_top_body_u2").hide();
		})
		$(".pre_lay_1_right_top_head_li2").mouseenter(function(){
			$(".pre_lay_1_right_top_body_u2").show();
			$(".pre_lay_1_right_top_head_li2").addClass("checkbox_on")
			$(".pre_lay_1_right_top_head_li1").removeClass("checkbox_on")
			$(".pre_lay_1_right_top_body_u1").hide();
		})
		
		
		
	})
})
