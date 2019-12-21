$(function() {
    $("[data-toggle='popover']").popover({
        html : true,  
        title: title(),  
        delay:{show:100, hide:100},
        trigger:'focus hover',
        content: function() {
          return content();  
        } 
    });
});

function title() {
    return '深入解释';
}

function content() {
    var data = $(
        "<div>You find it</div>" +
        "<input id='btn' type='button' value='关闭' onclick='test()'/></form>"
    );
    return data;
}

//模拟悬浮框里面的按钮点击操作
function test() {
    alert('关闭成功');
}

$('.popover-dismiss').popover({
    trigger: 'focus'
})