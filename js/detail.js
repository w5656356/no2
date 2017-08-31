require(["config"],function(){
	require(["jquery", "template", "load"],function($, template){
		$(document).ready(function(){
			$.getJSON("/mock/detail.json",function(data){
			   var _search = window.location.search  
			   console.log(window.location.search )
			   var _num;  
			   var src;
			   if(_search == "?maotai=1"){
			   	src = "/images/list/maotaibig.jpg";
			   	_num = 0;
			   }
			   if(_search == "?wuliangye=1"){
			   	src = "/images/list/wuliangyebig.jpg";
			   	_num = 1
			   }
			   
			   if(_search == "?luzhoulaojiao=1"){
			   	src = "/images/list/luzhoulaojiaobig.jpg";
			   	_num = 2
			   }
			   
			   if(_search == "?limingqishi=1"){
			   	src = "/images/list/limingqishibig.png";
			   	_num = 3
			   }
			  
			   if(_search == "?rentouma=1"){
			   	src = "/images/list/rentoumabig.jpg";
			   	_num = 4	
			   }
			   
			  
				var html = template("detail",{datas : data , xxx : _num})
				$(".small_main2").append(html)
				
				
				//添加商品存数据
				$(".increase").click(function(){
					var num = Number($(".need_amount").val()) + 1;
					$(".need_amount").val(num);
					
				})
				$(".decrease").click(function(){
					if($(".need_amount").val() > 1){
						var num = Number($(".need_amount").val()) - 1;
						$(".need_amount").val(num);
					}	
				})
				
				
				$(".atoc a").click(function(){
				if(!Number($(".need_amount").val()) || Number($(".need_amount").val())=== 0){
					alert("输入的数量非法！")
					$(".need_amount").val(1)
					return
				}
				console.log(src)
				// 将所在行商品信息保存到对象中
				var product = {
					id : $(".no_ne").html(),
					imgSrc : src,
					name : $(".super_name").text(),
					price : $(".need_price").text().slice(1),
					amount : $(".need_amount").val()
				};
				// 判断在 cookie 中是否有已存在的购物车数组结构
				// 使用 jquery 的 cookie 插件操作 cookie
				$.cookie.json = true; // 自动转换
				var _products = $.cookie("products") || [];
				// 查找当前选购商品的ID在数组中已选购商品元素中是否存在
				var index = isExist(product.id, _products);
				function isExist(a,b){
					var len = b.length
					for(var i = 0; i < len ; i++){
						if(a === b[i].id)
						return i
					}
					return -1
				}
				if (index === -1) { // 不存在
					// 向数组中添加元素
					_products.push(product); 
				} else { // 存在，则修改数量
					_products[index].amount++;
				}
				// 将数组存回到 cookie 中
				$.cookie("products", _products, {expires:10});
				return false;
			});
				
				
			})
		})
		
	})
})