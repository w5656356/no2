require(["config"],function(){
	require(["jquery", "template", "load"],function($, template){
		$(document).ready(function(){
			
			//动态加载复制
			clone_node($(".lay_1_body_right ul li"),9,$(".lay_1_body_right ul"))
			clone_node($(".lay_1_footer_right_body_inner ul li"),4,$(".lay_1_footer_right_body_inner ul"))
			clone_node($(".lay_1"),4,$(".mainbox")) 
			function clone_node(tar,howmany,dady){
				for(var i = 0; i < howmany; i++){
					tar.clone().appendTo(dady) 
				}
			}
			
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
		//倒计时
		newtime("2017-09-1 12:00:00",$("#first_li4 .days"),$("#first_li4 .hours"),
		$("#first_li4 .minutes"),$("#first_li4 .seconds"))
		function newtime(deadline,days,hours,minutes,seconds){	
			var _deadline = Date.parse(deadline);
			var timer = setInterval(function(){
				var _diff = _deadline - new Date();
				var _seconds = Math.ceil(_diff / 1000);
				var _second = _seconds % 60,
					_min = Math.floor(_seconds / 60) % 60,
					_hour = Math.floor(_seconds / 3600) % 24,
					_days = Math.floor(_seconds / (24 * 60 * 60));
					days.html(_days)
					hours.html(_hour)
					minutes.html(_min) 
					seconds.html(_second)
				if (_seconds <= 0)
					clearInterval(timer);
			}, 1000);
		}
		
		
		
		
		
		
		
		// 模板
		var html = template("pre_lay_1_left_temp", {
			liname : ["a", "b", "c"]
		});
		$(html).appendTo(".demo_temp")
	})
})
