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
			var lala = 0
			$("#all_check").click(function(){
				if(lala === 0){
					$("table .self_check").removeAttr("checked")
					lala = 1
				}
				
				if(lala === 1){
					$("table .self_check").attr("checked","checked")
					lala = 0
				}
				
				add()
			})
			$(".self_check").click(function(){
				add()
			})
			//添加商品存数据
				$(".decrease").click(function(){
					var _id = $(this).parents("tr").find(".td_gold").text()
					var _products = $.cookie("products")
					
					var index = isExist(_id, _products);
					console.log(index)
					function isExist(a,b){
						var len = b.length
						for(var i = 0; i < len ; i++){	
							if(a === b[i].id){
								return b[i]
							}
							
						}
					}

					if (index.amount > 1) { // 不存在
						// 向数组中添加元素
						index.amount--
						$.cookie("products", _products, {expires:10});
					} 
					// 将数组存回到 cookie 中
					
					
					
					var _row = $(this).parents("tr").find(".snum")
					var _row2 = $(this).parents("tr").find(".td_price")
					var _row3 = $(this).parents("tr").find(".td_total")
						if(_row.val() > 1){
							var num = Number(_row.val()) - 1;
							_row.val(num);
							var mobi = _row2.text().slice(1)*_row.val()
							_row3.text("￥"+mobi)
						}	
						
						add()
					})
			
				$(".increase").click(function(){
					
					var _id = $(this).parents("tr").find(".td_gold").text()
					var _products = $.cookie("products")
					
					var index = isExist(_id, _products);
					console.log(index)
					function isExist(a,b){
						var len = b.length
						for(var i = 0; i < len ; i++){	
							if(a === b[i].id){
								return b[i]
							}
							
						}
					}

						index.amount++
						$.cookie("products", _products, {expires:10});
					
					
					var _row = $(this).parents("tr").find(".snum")
					var _row2 = $(this).parents("tr").find(".td_price")
					var _row3 = $(this).parents("tr").find(".td_total")
					var num = Number(_row.val()) + 1;
					_row.val(num);
					
					var mobi = _row2.text().slice(1)*_row.val()
					_row3.text("￥"+mobi)
					
					add()
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
					
					var _id = $(this).parents("tr").find(".td_gold").text()
					var _products = $.cookie("products")
					
					var index = isExist(_id, _products);
					console.log(index)
					function isExist(a,b){
						var len = b.length
						for(var i = 0; i < len ; i++){	
							if(a === b[i].id){
								return b[i]
							}
							
						}
					}

						index.amount = $(this).parents("tr").find(".snum").val()
						$.cookie("products", _products, {expires:10});
					
					var mobi = _row2.text().slice(1)*_row.val()
					_row3.text("￥"+mobi)
					
					add()
					}
				})
				$(".td_del a").click(function(){
					var _id = $(this).parents("tr").find(".td_gold").text()
					var _products = $.cookie("products")
					
					var index = isExist(_id, _products);
					console.log(index)
					function isExist(a,b){
						var len = b.length
						for(var i = 0; i < len ; i++){	
							if(a === b[i].id){
								return i
							}
							
						}
					}
					_products.splice(index,1)
					$.cookie("products", _products, {expires:10});
					
					var _row = $(this).parents("tr").empty()
					
				})
				
				
				
				
				
				
		})
	})
})