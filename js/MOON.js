/*function $(L,context){
	context = context || document
	if(L.charAt(0) === "#")
	return context.getElementById(L.slice(1,))
	else if(L.charAt(0) === "."){
		if(context.getElementsByClassName){
			return context.getElementsByClassName(L.slice(1,))
			}
		else
		{
			var mma = document.getElementsByTagName("*")
			var len = mma.length
			var _element
			var mmc = []
			for(var i = 0 ; i < len ; i++){
				_element = mma[i]
				var mmb = _element.className.split(" ")
				if(inArray(L.slice(1,)),mmb !== -1)
				mmc.push(_element)
			}
			return mmc
		}
	}
	else
	return context.getElementsByTagName(L)
}*/

function $(selector, context) {
	context = context || document; // 默认 document
	if (selector.indexOf("#") === 0) // id选择器
		return document.getElementById(selector.slice(1));
	if (selector.indexOf(".") === 0) // 类选择器
		return getByClassName(selector.slice(1), context);
	// 元素选择器
	return context.getElementsByTagName(selector);
}

// 根据类名查找元素，解决 getElementsByClassName() 兼容问题
// 参数：
//		className : 待查找的类名
//		context : 查找上下文，默认 document
function getByClassName(className, context) {
	context = context || document;
	if (context.getElementsByClassName) // 支持使用 getElementsByClassName
		return context.getElementsByClassName(className);
	/* 不支持使用 getElementsByClassName */
	/* 方法：在查找上下文的后代中，遍历所有元素，
	 * 比较遍历到的元素是否有使用待查找的类名，
	 * 有则说明遍历到的元素是要查找的元素 */

	// 存放查找到的所有元素的数组
	var result = [];
	// 查找上下文后代的所有元素
	var elements = $("*", context);
	// 循环遍历所有元素
	for (var i = 0, len = elements.length; i < len; i++) {
		// 获取当前遍历到元素使用的所有类名
		var classNames = elements[i].className.split(" ");
		// 遍历当前元素的所有类名，判断是否有待查找的类名
		if (inArray(className, classNames) !== -1) // 说明当前元素是需要查找的元素之一
			result.push(elements[i]);
		/*for (var j = 0, length = classNames.length; j < length; j++) {
			if (classNames[j] == className) {
				result.push(elements[i]);
				break;
			}
		}*/
	}
	// 返回查找到的结果
	return result;
}


function inArray(value, array) {
	if (Array.prototype.indexOf) // 支持使用数组的 indexOf() 方法
		return array.indexOf(value);

	// 不支持使用 indexOf() 方法时，遍历数组中每个元素
	// 当遍历到的元素和查找元素一致时，返回元素在数组中的下标
	for (var i = 0, len = array.length; i < len; i++) {
		if (array[i] === value)
			return i;
	}

	// 如果数组中不存在查找元素，则返回-1
	return -1;
}

function css1(element){
	return window.getComputedStyle ? getComputedStyle(element) : element.currentStyle
}
function css2(element,attr){
	return window.getComputedStyle ? getComputedStyle(element)[attr] : element.currentStyle[attr]
}
function css3(element,attr,value){
	if(typeof attr !== "object" && typeof value === "undefined")
	return window.getComputedStyle ? getComputedStyle(element)[attr] : element.currentStyle[attr]
	else if(typeof attr !== "object" && typeof value !== "undefined")
	element.style[attr] = value
	else if(typeof attr === "object"){
			for(var mma in attr){
			element.style[mma] = attr[mma]
		}
	}
}

function addClass(element,newname){
//	element.className += (" " + newname)
	var mma = element.className.split(" ")
	if(inArray(newname,mma) === -1)
	mma.push(newname)
	var mmb = mma.join(" ")
	element.className = mmb;
}

function removeClass(element,oldname){
//	element.className = element.className.replace(oldname,"")
	var mma = element.className.split(" ")
	if(inArray(oldname,mma) !== -1)
	mma.splice(inArray(oldname,mma),1)
	var mmb = mma.join(" ")
	element.className = mmb
}

function isLeapYear(mma){
	return mma % 4 ===0 && mma % 100 !== 0 ||mma % 400 ===0 ? 366 : 365
}

function month_day(mma,mmb){
	var days;
	switch(Number(mmb)){
		case 4:
		case 6:
		case 9:
		case 11:
		days = 30;
		break;
		case 2:
		days = isLeapYear(mma) ? 29 : 28;
		break;
		default:
		days = 31
	}
	return days
}

function show(mma){
	css3(mma,"display","block")
}

function hide(mma){
	css3(mma,"display","none")
}

function addlisten(element,event,fn){
	if(element.addEventListener){
		if(event.indexOf("on") === 0){
			event = event.slice(2,)
		}
		element.addEventListener(event,fn)
	}
	else{if(event.indexOf("on") !== 0){
			event = event.splice(0,0,"on")
		}
		element.attachEvent(event,fn)}
		
}

function removelisten(element,event,fn){
	if(element.removeEventListener){
		if(event.indexOf("on") === 0){
			event = event.slice(2,)
		}
		element.removeEventListener(event,fn)
	}
	else
		if(event.indexOf("on") !== 0){
			event = event.splice(0,0,"on")
		}
		element.detachEvent(event,fn)
}

function setCookie(key,value,options){
	var cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value)
	if(options.expires){
		var date = new Date
		date.setDate(date.getDate() + options.expires)
		cookie += ";expires=" + date.toUTCString()
	}
	if(options.path){
		cookie += ";path=" + options.path
	}
	if(options.domain){
		cookie += ";domain=" + options.domain
	}
	if(options.secure){
		cookie += ";secure"
	}
	document.cookie = cookie
}

function removeCookie(key, options) {
	options = options || {};
	options.expires = -1;
	setCookie(key, "", options);
}

function getCookie(key){
	var cookies = document.cookie
	var arraycookies = cookies.split(";")
	var len = arraycookies.length
	for(var i = 0 ; i < len ; i++){
		var newarray = arraycookies[i].split("=")
		var monster = decodeURIComponent(newarray.shift())
		if (monster === key)
		return decodeURIComponent(newarray.join("="))
	}
	return null
			}

function animate(element,options,totalTime,fn){
	clearInterval(element.timer)
	var _options = [],_begin =[],change = []
	for(var i in options){
		_options[i] = parseFloat(options[i])
		_begin[i] = parseFloat(css3(element,i))
	}
	var beginTime = +new Date();
	element.timer = setInterval(function(){
	var	nowTime = +new Date(),
		passTime = Math.min(nowTime - beginTime, totalTime)
	for(var i in options){
		i === "opacity" 
		? change[i] = (_options[i] - _begin[i])/totalTime*passTime + _begin[i] 
		: change[i] = (_options[i] - _begin[i])/totalTime*passTime + _begin[i] + "px"
	}
	css3(element,change)
	if(passTime === totalTime){
		clearInterval(element.timer)
		fn && fn()
	}
	
	},20)
}

function fadeIn(element,time,fn){
	css3(element,"opacity",0)
	show(element)
	animate(element,{opacity:1},time,fn)
}

function fadeOut(element,time,fn){
	animate(element,{opacity:0},time,function(){
		hide(element)
		fn && fn()
	})
	
}

function offset(element,options){
	var _top = 0,_left = 0 
	if(typeof options === "undefined"){
		while(element){
			_top += element.offsetTop
			_left += element.offsetLeft
			element = element.offsetParent
		}
		return {
			top : _top,
			left : _left
		}
	}
	else{
		father = element.offsetParent
		while(father){
			_top += father.offsetTop
			_left += father.offsetLeft
			father = father.offsetParent
		}
		css3(element,{
			top : options.top - _top + "px",
			left : options.left - _left + "px"
		})
	}
	
}

