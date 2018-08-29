
	$(function(){
    	$('#container').fullpage({
    		// licenseKey:"OPEN-SOURCE-GPLV3-LICENSE",
    		verticalCentered : false,
    		sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
    		navigation: true,
    		scrollingSpeed: 1000,
    		css3: true,
    		//滚动到当前屏幕触发
    		afterLoad:function(anchorLink ,index){
    			
    			if(index == 1){

    				$('.downwards-btn').css("animation","up-and-down 0.4s linear infinite alternate");
    				$('.page-one .sofa').css("animation","up-and-down 0.5s ease-in infinite alternate .2s");
    				$('.page-one .flag').css("animation","up-and-down 0.7s ease-in-out infinite alternate .1s")
    			}
    			if(index == 2){
    				
    				$('.page-two .text-center-box .text1').fadeOut(500,function(){
    					$('.page-two .text-center-box .text2').fadeIn(500);
    				});
    				$('.page-two .goods').css("animation", "goods-moved 4s linear forwards");
    				$('.page-two  .search').css("animation", "search-moved  4s linear forwards");
    				$('.page-two  .key').css("animation", "key-moved  4s linear forwards");

    			}
    			if(index == 3){

    				$('.page-three .start-info').fadeOut(500,function(){
    					$('.page-three .end-info').fadeIn(500);
    				});
    				
    			}
    			if(index == 4){
    				
    				$('.page-four .cloud').css("animation"," cloud-moved 20s linear infinite alternate");
    			}
    			if(index == 5){

    				$('.page-five .hand').css('animation',"hand-moved 1s ease-out  0.2s forwards");
    				var timeId = setTimeout(function(){
    					$('.page-five .mouse2').css('display','block');
    				},1200);

    			}
    			if(index == 6){
    				$('.page-six').addClass('moved');
    				// $('.page-five .sofa').stop().css("animation","sofa-moved-next 1.1s linear ");
    				// $('.page-six .box').css("animation","box-moved 2s ease-in forwards");
    				$(".page-six .cart-warrper").addClass('moved');
    				$('.page-six .cart-warrper .worker').css('animation','worker-moved 3s ease-out 2.5s forwards');
    			}
    			if(index == 7){
    				
    				$('.page-seven .comment img').css('opacity','1');

    			}
    			if(index == 8){

    			}	 
    			
    		},
    		//鼠标从当前页面离开时触发
    		onLeave:function(index,nextIndex ,direction ){
    			if(index == 2 && nextIndex == 3){

    				$('.page-two .sofa').fadeIn();
    				$('.page-two .sofa').css("animation","decline-scale 1s linear ");
    			
    			}
    			if(index == 3 && nextIndex == 4){

    				$('.page-three .sofa').css('animation',' sofa-rotate-down 1s linear');

    			}
    			if(index == 5 && nextIndex == 6){
    			
    				$('.page-five .sofa').stop().css("animation","sofa-moved-next 1.1s linear ");
    				$('.page-six .box').css("animation","box-moved 2s ease-in forwards");
    			}		
    			
    		},

    	});


    	//动画结束事件监听
    	$(".page-two .key").on('animationend',function(){
    		$(this).siblings('.sofa').css('display','block');
    	})

    	$(".page-two .sofa").on('animationend',function(){
    		$('.page-three .sofa').css('display','block');
    	})

    	$(".page-three .sofa").on('animationend',function(){
    		$('.page-four .sofa').css('display','block');
    		$('.page-four .cart-warrper').css("animation"," cart-warrper-moved 1s linear forwards");
    	})

    	$('.page-four .cart-warrper').on('animationend',function(){
    		$('.page-four .text1').fadeOut(500,function(){
    				$('.page-four .text2').fadeIn(500);
    		})
    		$('.page-four .shopping-info').fadeIn(500,function(){
    			$('.page-four .ads2').fadeIn(500);
    		})
    	})

    	$('.page-five .hand').on('animationend',function(){
    		$('.page-five .sofa').css('animation',"sofa-moved 1s ease-out forwards 0.2s");
    		$('.page-five .bank-order').css('animation','bank-orders-moved 1s ease-out 0.4s forwards');
    	})

    	$('.page-six').on('transitionend',function(){
    	
    		// $('.page-six .cart-warrper .worker').css('animation','worker-moved 3s ease-out 0.5s forwards');
    	})

    	$('.page-six .cart-warrper .worker').on('animationend',function(){
    		$('.page-six .live .door').fadeIn(500,function(){
    			$('.page-six .live .person').css('animation',' person-moved 2s ease-out forwards');
    			$('.page-six .text1').fadeOut(500,function(){
    				$('.page-six .text2').fadeIn(500);
    			})
    		})
    		$('.page-six .cart-warrper .say').css('opacity',1);
    	})

    	$('.page-eight').on('mousemove',function(e){
    		 x = e.clientX - 10;
             y = e.clientY - 10;
             $('.page-eight .hand').css({"left":x,"top":y});
    	})


    	$('.page-eight .center-img').on('mouseover','.btn01',function(){
    		console.log('enter');
    		$(".page-eight .center-img .btn01").css('display','none');
    		$(".page-eight .center-img .btn02").css('display',"block");
    		
    	})

    	$('.page-eight .center-img').on('mouseout','btn02',function(){
    		console.log('leave');
    		$(".page-eight .center-img .btn01").css('display','block');
    		$(".page-eight .center-img .btn02").css('display',"none");
    		
    	})

    	$('.downwards-btn').on('click',function(){
    		$.fn.fullpage.moveSectionDown();
    	})

    	$('.page-eight .again').on('click',function(){
    				// $('.page-two .goods').css("animation", "");
    				// $('.page-two  .search').css("animation", "");
    				// $('.page-two  .key').css("animation", "");
    				// $('.page-five .hand').css('animation',"");
    				// $('.page-six .box').css("animation","");
    				
    				$('.moved').removeClass('moved');
    				console.log($('.moved').removeClass('moved'));
    				$('.content [style]').removeAttr('style');

    		$.fn.fullpage.moveTo(1);
    	})
	});
