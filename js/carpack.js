//封装轮播
define(["jquery"],function(){ 
	carou($("#container"),$("#container ul"),$("#container ul li"),$("#pages"),true,true,$("#prev"),$("#next"))
	carou($("#container2"),$("#container2 ul"),$("#container2 ul li"),$("#pages2"),false,false)
	carou($("#container3"),$("#container3 ul"),$("#container3 ul li"),$("#pages3"),false,false)
	function carou(container,ul,li,pages,boool,neednum,prev,next){
		var lis = li, 
			len = lis.length,
			liWidth = lis.width(),
			uls = ul,
			currentIndex = 1,
			nextIndex = 2,
			timer = null,
			circles = [];
			console.log(len)
			
			uls.css("left",-liWidth + "px");
			lis.first().clone(true).insertAfter(lis.last());
			lis.eq(len-1).clone(true).insertBefore(lis.first());
			uls.css("width",liWidth*(len+2) + "px");
			len += 2
			console.log(len)
			function move(){
				
				var _left = nextIndex*-1*liWidth
				uls.stop().animate({left:_left},"normal",function(){
					currentIndex = nextIndex
					nextIndex++
					if(currentIndex >= len - 1){
					currentIndex = 1
					nextIndex = 2
					uls.css("left",-liWidth + "px")
					}
					if(currentIndex <= 0){
						currentIndex = len - 2
						nextIndex = len -1
					uls.css("left",-(len-2)*liWidth + "px")
					}
				
				})
				var cir;
				if(nextIndex === 0){
					cir = len - 3
				}
				else if(nextIndex === len - 1){
					cir = 0
				}
				else{
					cir = nextIndex - 1
				}
				pages.children("div").eq(cir).addClass("current").siblings().removeClass("current")
				
			}
			timer = setInterval(move,5000)
			var _div = []
			for(let i = 0 ; i < len-2 ; i++){
				_div[i] = document.createElement("div")
				if(neednum)
				_div[i].innerHTML = ""+(i+1)+""
				pages.append(_div[i])
				$(_div[i]).click(function(){
					if(i === (currentIndex - 1))
					return
					else
					nextIndex = i + 1
					move()
				})
			}
			$(_div[0]).addClass("current")
			
			container.hover(function(){
				clearInterval(timer)
			},function(){timer = setInterval(move,5000)})
			if(boool){
				prev.click(function(){
				nextIndex = currentIndex - 1
				move()
				})
				next.click(function(){
					move()
				})
			}
			
	}
})
			