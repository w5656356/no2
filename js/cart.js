require(["config"],function(){
	require(["jquery", "template", "load","cookie"],function($, template){
		$(document).ready(function(){
			var cook = $.cookie("products")
			var data = {products : cook}
			var html = template("cart",data)
			$(".main").append(html)
			
			add()
			function add(){
				var check = $("tbody tr .td_check input[type='checkbox']:checked").parents("tr")
							.find(".td_total")
				var last_money = 0
				check.each(function(m){
					last_money += Number($(this).text().slice(1))
				})
				$("#total_end").text(last_money)
			}
			
			$("#all_check").click(function(){
				if(this.checked)
				$("table .self_check").attr("checked","checked")
				if(this.checked !== "checked")
				$("table .self_check").removeAttr("checked")
				add()
			})
			$(".self_check").click(function(){
				add()
			})
			//添加商品存数据
				$(".decrease").click(function(){
					var _row = $(this).parents("tr").find(".snum")
					var _row2 = $(this).parents("tr").find(".td_price")
					var _row3 = $(this).parents("tr").find(".td_total")
						if(_row.val() > 1){
							var num = Number(_row.val()) - 1;
							_row.val(num);
							var mobi = _row2.text().slice(1)*_row.val()
							_row3.text("￥"+mobi)
						}	
					})
			
				$(".increase").click(function(){
					var _row = $(this).parents("tr").find(".snum")
					var _row2 = $(this).parents("tr").find(".td_price")
					var _row3 = $(this).parents("tr").find(".td_total")
					var num = Number(_row.val()) + 1;
					_row.val(num);
					
					var mobi = _row2.text().slice(1)*_row.val()
					_row3.text("￥"+mobi)
				})
				
				$(".snum").blur(function(){
					var _row = $(this).parents("tr").find(".snum")
					var _row2 = $(this).parents("tr").find(".td_price")
					var _row3 = $(this).parents("tr").find(".td_total")
					if(!Number(_row.val()) || Number(_row.val())<= 0){
					alert("输入的数量非法！")
					_row.val(1)
					var mobi = _row2.text().slice(1)*_row.val()
					_row3.text("￥"+mobi)
					return
					}
					else{
					var mobi = _row2.text().slice(1)*_row.val()
					_row3.text("￥"+mobi)	
					}
				})
				$(".td_del a").click(function(){
					var _row = $(this).parents("tr").empty()
				})
				
				
				
				
				
				
		})
	})
})