//requirejs的配置
require.config({
	baseUrl : "/",
	paths : {
		"jquery" : "lib/jquery/jquery-3.2.1",
		"cookie" : "lib/jquery_plugins/jquery.cookie",
		"template" : "lib/arttemplate/template-native",
		"load" : "js/load_header_footer",
		"carpack" : "js/carpack" 
	},
	
	shim : {
		"template" :{
			exports : "template"
		}
	}
})