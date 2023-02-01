
$(function(){
  $('#curt .title span').mouseenter(function(){
    $(this).addClass('span-active').siblings().removeClass('span-active');
    $('#curt .goods-list .curt-main .goods-right').eq($(this).index()).show().siblings().hide()
  })
  $('#curt1 .title span').mouseenter(function(){
    $(this).addClass('span-active').siblings().removeClass('span-active');
    $('#curt1 .goods-list .curt-main .goods-right').eq($(this).index()).show().siblings().hide()
  })
  $('#curt2 .title span').mouseenter(function(){
    $(this).addClass('span-active').siblings().removeClass('span-active');
    $('#curt2 .goods-list .curt-main .goods-right').eq($(this).index()).show().siblings().hide()
  })
  $('#curt3 .title span').mouseenter(function(){
    $(this).addClass('span-active').siblings().removeClass('span-active');
    $('#curt3 .goods-list .curt-main .goods-right').eq($(this).index()).show().siblings().hide()
  })
  $('#curt4 .title span').mouseenter(function(){
    $(this).addClass('span-active').siblings().removeClass('span-active');
    $('#curt4 .goods-list .curt-main .goods-right').eq($(this).index()).show().siblings().hide()
  })
  $('#curt5 .title span').mouseenter(function(){
    $(this).addClass('span-active').siblings().removeClass('span-active');
    $('#curt5 .goods-list .curt-main .goods-right').eq($(this).index()).show().siblings().hide()
  })
  $('#curt6 .title span').mouseenter(function(){
    $(this).addClass('span-active').siblings().removeClass('span-active');
    $('#curt6 .goods-list .curt-main .goods-right').eq($(this).index()).show().siblings().hide()
  })
})