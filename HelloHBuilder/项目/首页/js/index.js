$(function(){
	//卷帘效果
		//鼠标滑过显示
	$("#select-1").mouseenter(function(){
		$(".contry-list").stop(true,false).slideDown('slow');
	})
		//鼠标离开隐藏
	$("#select-1").mouseleave(function(){
		setTimeout(function(){
			$(".contry-list").stop(true,false).slideUp('5000');
		},1000)
	})
		//鼠标滑过显示
	$("#select-2").mouseenter(function(){
		$(".language").stop(true,false).slideDown('slow');
		
	})
		//鼠标离开隐藏
	$("#select-2").mouseleave(function(){
		
		$(".language").stop(true,false).slideUp('5000');
		
	})
	//遍历contry-list线面的a加边框
	var $contrylist=$(".contry-list a");
	//console.log($contrylist);
	
	 $contrylist.each(function(){
	 	$(this).hover(function(){
	 		$(this).css('border','1px solid blue');
	 	},function(){
	 		$(this).css('border','none');
	 	})
	 })
	//遍历language里面的a加边框
	var $languagea=$(".language a");
	$languagea.each(function(){
		$(this).hover(function(){
			$(this).css('border','1px solid blue')
		},function(){
			$(this).css('border','none');
		})
	})
	//遍历head-right里面的a加字体颜色
	$(".head-right a").each(function(){
		$(this).hover(function(){
			$(this).css({"color":"red"})
		},function(){
			$(this).css({"color":"#93846f"})
		})
	})
	//myshopping里面的a-4里面的b字体颜色变化
	$(".a-4 b").hover(function(){
		$(this).css({"color":"red"})
	},function(){
		$(this).css({"color":"#bdb7b1"})
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
