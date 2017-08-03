/**
 * Created by Administrator on 2017/8/2.
 */
var myswiper=new Swiper('.swiper-container',{
    autoplay:2300,
    autoplayDisableOnInteraction:false,
    loop:true,
    pagination:'.swiper-pagination'
});

$('.weui-tabbar__item').on('click',function(){
    $(this).addClass('weui-bar__item_on').siblings('.weui-tabbar__item').removeClass('weui-bar__item_on');
    var _index=$(this).index();
    if(_index==1){
        var myScroll;
        setTimeout(function(){
            myScroll=new IScroll("#wrapper",{
                scrollbars:true,
                freeScroll:true
            })
        },200);
    }
    $('.weui-tab__content').eq(_index).show().siblings('.weui-tab__content').hide();
})
function login(){
    $('#login').show().siblings().hide();
}
function dologin(){
    $('#dologin').show().siblings().hide();
    setTimeout(function(){
        $('#dologin').hide();
        $('.weui-tab__content').eq(0).show().siblings('.weui-tab__content').hide();
        $('.weui-tabbar__item').eq(0).addClass('weui-bar__item_on').siblings('.weui-tabbar__item').removeClass('weui-bar__item_on');
    },2000);
}
function unlogin(){
    $('#unlogin').show().siblings().hide();
    setTimeout(function(){
        $('#unlogin').hide();
    },2000)
}