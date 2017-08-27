define(["jquery","temp"],function(){
	//主页模版引擎1
	var pre_list1 = {
		len :  5,
		liname : ["疯狂抢购","整箱囤货","爆款精选","口粮聚惠","大牌特卖"]
	}
	console.log(pre_list1)
	var data1 = template("pre_lay_1_left_temp",pre_list1)
	console.log(data1)
	
	$(data1).appendTo(".pre_lay_1_left_head")
	
})