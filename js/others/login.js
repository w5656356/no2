require(["../config"],function(){
	require(["jquery","cookie"],function($){
		$(document).ready(function(){
			$(".head_inner_select_small").parent().children().hover(function(){
			  	$(".head_inner_select_mid").show();
			},function(){
			  	$(".head_inner_select_mid").hide();
			}) 
			var count = 1
			$(".username").click(function(){
				$(".username").addClass("add")
				$(".mobile").removeClass("add")
				$(".row2").show()
				$(".row3").hide()
				count = 1
			})
			$(".mobile").click(function(){
				$(".mobile").addClass("add")
				$(".username").removeClass("add")
				$(".row3").show()
				$(".row2").hide()
				count = 0
			})
			//输入框是否输入
			_blur($(".row2_row1_user_2"),$("#wrongu_1"))
			_blur($(".row2_row2_user_2"),$("#wrongu_2"))
			_blur($(".row2_row3_user_2"),$("#wrongu_3"))
			_blur($(".row3_row1_user_2"),$("#wrongu_4"))
			_blur($(".row3_row2_user_2"),$("#wrongu_5"))
			_blur($(".row3_row3_user_2"),$("#wrongu_6"))
			function _blur(val,wrong){
			if(val.val())
				wrong.hide()
			else
				wrong.show()
			val.blur(function(){
				if(val.val())
					wrong.hide()
				else
					wrong.show()
			})	
			}
		//ajax检查
		$.cookie.json = true
		$(".row2_login input").click(function(){
			$.getJSON("/mock/login.json",function(data){
				if(count){
					var uname = $(".row2_row1_user_2").val();
					var pword = $(".row2_row2_user_2").val();
					for(var i = 0, len = data.length ; i < len ; i++){
						if(data[i]._username === uname && data[i]._password === pword){
							window.location.replace("/index.html");
							$.cookie("loginUser",uname,{expires:1,path:"/"});
//							break;
						}	
					}
					
					$(".zhuangtailan").text("您输入的账号或者密码有误，请从新输入!")
					$(".zhuangtailan").append("<i class='iconfont icon-gaojing'></i>")
					$(".row2_row1_user_2").val("")
					$(".row2_row2_user_2").val("")
					
				}
				else{
					var uname = $(".row3_row1_user_2").val();
					var pword = $(".row3_row2_user_2").val();
					for(var j = 0, len = data.length ; j < len ; j++){
						if(data[j]._username === uname && data[j]._password === pword){
							window.location.replace("/index.html");
							$.cookie("loginUser",uname,{expires:2});
//							break;
						}	
					}
					$(".zhuangtailan").text("您输入的账号或者密码有误，请从新输入!")
					$(".zhuangtailan").append("<i class='iconfont icon-gaojing'></i>")
					$(".row3_row1_user_2").val("")
					$(".row3_row2_user_2").val("")
				}
			})
		})
		
			
		})
	})
})