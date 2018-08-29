// 载入js
$(function(){
    $('#allsections').fullpage();
    $('.next_section').on('click', function(){
    	$.fn.fullpage.moveSectionDown();

    })
    $('.previous_section').on('click', function(){
    	$.fn.fullpage.moveSectionUp();
    })
    // 图片按钮鼠标移入移出
    $('.imgbtn').hover(function(){
    	$(this).attr('src', 'images/'+this.id+'_c.png');
    }, function(){
    	$(this).attr('src', 'images/'+this.id+'.png');
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
		$(".service_process").append(
			 	"<div class='left_bottom_box box_"+(i+1)+" line_box' style='background-color: rgba(255,255,255, 0); width: 245px; margin-left: "+(245*i)+"px; bottom:"+(50*i)+"px; '></div>"
			);
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