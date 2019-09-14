$(function(){
//--SNSのスライドダウン
    $('.aside').click(function(){
        $('#aside-items').slideToggle(1000);
    });
//--fAQアコーディオン
    $('.list-item').click(function(){
        var $answer = $(this).find('.answer');
        if ($answer.hasClass('open')){
                $answer.removeClass('open');
                $answer.slideUp();
                /* +マークをつくる*/
            $(this).find('span').text('+');
        }else{
                $answer.addClass('open');
                $answer.slideDown();
                /*-マークをつくる */
            $(this).find('span').text('-');
        }
    });    
//モーダルを表示する
    $('#login').click(function(){
        $('#login-modal-wrapper').fadeIn();
    });        
//フォームを作る
    $('#submit-btn').click(function(){
        var name= $('#name').val();
        var choice= $('#choice option:selected').text();
        $('#output').text(name +'がすきなのは、'+ choice +'ですね。');
        return false;
    });
//モーダルをクローズする
    $('.close-modal').click(function(){
        $('#login-modal-wrapper').fadeOut();
    });

});    
