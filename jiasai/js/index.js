// 载入js
$(function(){
	//fullpage插件相关
    // $('#allsections').fullpage();
    // $('.next_section').on('click', function(){
    // 	$.fn.fullpage.moveSectionDown();

    // })
    // $('.previous_section').on('click', function(){
    // 	$.fn.fullpage.moveSectionUp();
    // })
    // 图片按钮鼠标移入移出
    $('.dobtn').hover(function(){
    	$(this).find('.imgbtn').attr('src', 'images/'+$(this).find('.imgbtn').attr('id')+'_c.png');
    }, function(){
    	$(this).find('.imgbtn').attr('src', 'images/'+$(this).find('.imgbtn').attr('id')+'.png');
    })
    // $('.imgbtn').on('hover', function(element){
    // 	element.setAttribute('src', "images/imgbtn_1_c.png");
    // })
    // 图片按钮点击事件
    $('.next_section').mousedown(function(){
    	$(this).find('img').attr('src', 'images/next_btn_c.png');
    })
    $('.next_section').mouseup(function(){
    	$(this).find('img').attr('src', 'images/next_btn.png');
    })
    addDiv();
    // 案例的分类按钮
    $('.example_kinds div').click(function(){
    	$('.kinds_button_c').removeClass('kinds_button_c');
    	$('.p_c').removeClass('p_c');
    	// $('.kinds_button_c').toggleClass('', 'on');
    	// $('.p_c').toggleClass('p_unc', 'on');
    	$(this).toggleClass('kinds_button_c', 'on');
    	$(this).find('p').toggleClass('p_c', 'on');
    })
    /* ----- 侧边悬浮 ---- */
    $('#function_1').on('click', function() {
    	 $(document.documentElement).animate({scrollTop:0}, 500);
    	/* Act on the event */
    });
    $('#function_2').hover(function() {
    	$('.service_2').removeClass('service_hide');
    	/* Stuff to do when the mouse enters the element */
    }, function() {
    	$('.service_2').addClass('service_hide');
    	/* Stuff to do when the mouse leaves the element */
    });
    $('#function_3').hover(function() {
    	$('.service_3').removeClass('service_hide');
    	/* Stuff to do when the mouse enters the element */
    }, function() {
    	$('.service_3').addClass('service_hide');
    	/* Stuff to do when the mouse leaves the element */
    });
    $('#function_4').hover(function() {
    	$('.service_4').removeClass('service_hide');
    	/* Stuff to do when the mouse enters the element */
    }, function() {
    	$('.service_4').addClass('service_hide');
    	/* Stuff to do when the mouse leaves the element */
    });
	// $(document).on("mouseenter", ".suspension .a", function(){
	// 	var _this = $(this);
	// 	var s = $(".suspension");
	// 	var isService = _this.hasClass("a-service");
	// 	var isServicePhone = _this.hasClass("a-service-phone");
	// 	var isQrcode = _this.hasClass("a-qrcode");
	// 	if(isService){ s.find(".d-service").show().siblings(".d").hide();}
	// 	if(isServicePhone){ s.find(".d-service-phone").show().siblings(".d").hide();}
	// 	if(isQrcode){ s.find(".d-qrcode").show().siblings(".d").hide();}
	// });
	// $(document).on("mouseleave", ".suspension, .suspension .a-top", function(){
	// 	$(".suspension").find(".d").hide();
	// });
	// $(document).on("mouseenter", ".suspension .a-top", function(){
	// 	$(".suspension").find(".d").hide(); 
	// });
	// $(document).on("click", ".suspension .a-top", function(){
	// 	$("html,body").animate({scrollTop: 0});
	// });
	// $(window).scroll(function(){
	// 	var st = $(document).scrollTop();
	// 	var $top = $(".suspension .a-top");
	// 	if(st > 400){
	// 		$top.css({display: 'block'});
	// 	}else{
	// 		if ($top.is(":visible")) {
	// 			$top.hide();
	// 		}
	// 	}
	// });
});
//循环输出div方法
function addDiv(){
	var process_texts=[
	['客户需求分析','需求理解','需求分析'],
	['产品创意定制','产品开发策划','产品运营规划'],
	['产品原型设计','UE交互流程设计','UI界面设计'],
	['严格的项目管理流程','产品迭代开发管理','全面产品测试流程'],
	['后期产品的优化','服务器托管支持','产品迭代更新管理']
	];
	$.each(process_texts, function(i, v){
		$.each(v, function(j, v){
			 $(".service_process").append(
			 	"<div class='left_bottom_box box_"+(i+1)+" box__"+(j+1)+"' style='margin-left: "+(245*i)+"px; bottom:"+(50*i)+"px; '><p class='process_text'>"+v+"</p><div>"
			 	);
		});
		if (i > 0 && i < 4) {
			$(".service_process").append(
			 	"<div class='left_bottom_box box_"+(i+1)+" line_box' style='background-color: rgba(255,255,255, 0); width: 248px; margin-left: "+(245*i-3)+"px; bottom:"+(50*i)+"px; '></div>"
			);
		}
		else if(i == 4){
			$(".service_process").append(
			 	"<div class='left_bottom_box box_"+(i+1)+" line_box' style='background-color: rgba(255,255,255, 0); width: 215px; margin-left: "+(245*i-3)+"px; bottom: "+(50*i)+"px; border-right: 0px solid #ffffff'></div>"
			);
		};
	})
}
// 轮播图js
function imgReload()
{
	var imgHeight = 0;
	var wtmp = $("body").width();
	$("#b06 ul li").each(function(){
        $(this).css({width:wtmp + "px"});
    });
	$(".sliderimg").each(function(){
		$(this).css({width:wtmp + "px"});
		imgHeight = $(this).height();
	});
}
$(window).resize(function(){imgReload();});
$(document).ready(function(e) {
	imgReload();
    var unslider06 = $('#b06').unslider({
		dots: true,
		fluid: true,//宽度自适应
		delay: 3000,
		speed: 500,
		autoplay: true,
		loop: true
	}),
	data06 = unslider06.data('unslider');
	$('.unslider-arrow06').click(function() {
        var fn = this.className.split(' ')[1];
        data06[fn]();
    });
});