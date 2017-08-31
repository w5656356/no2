require(["../config"],function(){
	require(["jquery"],function($){
		window.onload = function(){
			$("input").val("")
			var num1 = 0,num2 = 0,num3 = 0,num4 = 0,num5 = 0,num6 = 0,num7 = 0,num8 = 0
		}
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
			var num1 = 0,num2 = 0,num3 = 0,num4 = 0,num5 = 0,num6 = 0,num7 = 0,num8 = 0
			
			$(".denglu").click(function(){
				
				var _last1 = num1*num2*num3
				var _last2 = num4*num5*num6*num7*num8
				console.log(num1)
				console.log(num2)
				console.log(num3)
				console.log(num4)
				console.log(num5)
				console.log(num6)
				console.log(num7)
				console.log(num8)
				console.log(_last1)
				console.log(_last2)
				if(_last1 || _last2){
					window.location.replace("/index.html");
				}
				else{
					$(".zhuangtailan").text("请填写正确的注册信息并勾选千杯网注册协议!")
				}	
			})
			//表单判定
			//1.是否输入及正则判定
			_blur($(".row2_row1_user_2"),$("#wrongu_1"),$("#wrongu_a_1"),$("#wrongu_b_1"))
			_blur($(".row2_row2_user_2"),$("#wrongu_2"),$("#wrongu_a_2"),$("#wrongu_b_2"))
			_blur($(".row2_row3_user_2"),$("#wrongu_3"),$("#wrongu_a_3"),$("#wrongu_b_3"))
			_blur($(".row2_row4_user_2"),$("#wrongu_4"),$("#wrongu_a_4"),$("#wrongu_b_4"))
			_blur($(".row2_row5_user_2"),$("#wrongu_5"),$("#wrongu_a_5"),$("#wrongu_b_5"))
			_blur($(".row3_row1_user_2"),$("#wrongu_6"),$("#wrongu_a_6"),$("#wrongu_b_6"))
			_blur($(".row3_row2_user_2"),$("#wrongu_7"),$("#wrongu_a_7"),$("#wrongu_b_7"))
			_blur($(".row3_row3_user_2"),$("#wrongu_8"),$("#wrongu_a_8"),$("#wrongu_b_8"))
			_blur($(".row3_row4_user_2"),$("#wrongu_9"),$("#wrongu_a_9"),$("#wrongu_b_9"))
			_blur($(".row3_row5_user_2"),$("#wrongu_10"),$("#wrongu_a_10"),$("#wrongu_b_10"))
			//2.是否提醒判定
			_focus($(".row2_row1_user_2"),$("#wrongu_1"),$("#wrongu_a_1"),$("#wrongu_b_1"))
			_focus($(".row2_row2_user_2"),$("#wrongu_2"),$("#wrongu_a_2"),$("#wrongu_b_2"))
			_focus($(".row2_row3_user_2"),$("#wrongu_3"),$("#wrongu_a_3"),$("#wrongu_b_3"))
			_focus($(".row2_row4_user_2"),$("#wrongu_4"),$("#wrongu_a_4"),$("#wrongu_b_4"))
			_focus($(".row2_row5_user_2"),$("#wrongu_5"),$("#wrongu_a_5"),$("#wrongu_b_5"))
			_focus($(".row3_row1_user_2"),$("#wrongu_6"),$("#wrongu_a_6"),$("#wrongu_b_6"))
			_focus($(".row3_row2_user_2"),$("#wrongu_7"),$("#wrongu_a_7"),$("#wrongu_b_7"))
			_focus($(".row3_row3_user_2"),$("#wrongu_8"),$("#wrongu_a_8"),$("#wrongu_b_8"))
			_focus($(".row3_row4_user_2"),$("#wrongu_9"),$("#wrongu_a_9"),$("#wrongu_b_9"))
			_focus($(".row3_row5_user_2"),$("#wrongu_10"),$("#wrongu_a_10"),$("#wrongu_b_10"))
			//3.正则判定
			
			
			//正则系列
			var _phone = /^1[34578]\d{9}$/
			var _pass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
			var _email = /\w+@([0-9a-zA-Z]+[-0-9a-zA-Z]*)(\.[0-9a-zA-Z]+[-0-9a-zA-Z]*)+/
			var _user = /^[a-zA-Z]\w{7,15}$/
			/*function test(fc,val,){
				
			}*/
			//聚焦提醒
			function _focus(val,wrong,wrong2,wrong3){
			val.focus(function(){
					wrong.hide()
					wrong2.show()
					if(wrong3)
					wrong3.hide()
			})	
			}
			var makesure = 0
			//输入框是否输入
			function _blur(val,wrong,wrong2,wrong3){
			if(val.val())
				wrong.hide()	
			else
				wrong.show()
			val.blur(function(){
				wrong2.hide()
				if(val.val()){
					wrong.hide()
					if(val[0] === $(".row2_row1_user_2")[0]){
						var result = _phone.test(val.val())
						if(!result)
						wrong3.show()
						else
						num1 = 1
					}
					if(val[0] === $(".row2_row4_user_2")[0]){
						var result = _pass.test(val.val())
						if(!result)
						wrong3.show()
						else
						num2 = 1
					}
					if(val[0] === $(".row2_row5_user_2")[0]){
						if(val.val() !== $(".row2_row4_user_2").val())
						wrong3.show()
						else
						num3 = 1
					}
					if(val[0] === $(".row3_row1_user_2")[0]){
						var result = _user.test(val.val())
						if(!result)
						wrong3.show()
						else
						num4 = 1
					}
					if(val[0] === $(".row3_row2_user_2")[0]){
						var result = _email.test(val.val())
						if(!result)
						wrong3.show()
						else
						num5 = 1
					}
					if(val[0] === $(".row3_row3_user_2")[0]){
						var result = _phone.test(val.val())
						if(!result)
						wrong3.show()
						else
						num6 = 1
					}
					if(val[0] === $(".row3_row4_user_2")[0]){
						var result = _pass.test(val.val())
						if(!result)
						wrong3.show()
						else
						num7 = 1
					}
					if(val[0] === $(".row3_row5_user_2")[0]){
						if(val.val() !== $(".row3_row4_user_2").val())
						wrong3.show()
						else
						num8 = 1
					}		
				}
					
				else
					wrong.show()
			})	
			}
		
		})
	})
})