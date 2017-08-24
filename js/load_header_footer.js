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
		}
	});
})