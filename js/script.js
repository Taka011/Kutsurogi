
$(function() {
    // ロードアニメーション
    $(window).on('load', function() {
        $('.fade').delay(600).fadeOut(800);
        function stopload(){
            $('.fade').delay(1000).fadeOut(700);
            stopload();
        }
    })
    // ヘッダースクロールイベント
    $(window).on("scroll", function () {
        // ファーストビューの高さを取得
        mvHeight = $(".mainvisual").height();
        if ($(window).scrollTop() > mvHeight - 30) {
        // スクロールの位置がファーストビューより下の場合にclassを付与
        $("#header").addClass("active");
        } else {
        // スクロールの位置がファーストビューより上の場合にclassを外す
        $("#header").removeClass("active");
        }
    });
    // ハンバーガーメニュー クリックイベント
    $('.list__content-item a').on('click', function() {
        $('#menu-btn-check').prop('checked', false);
    })

    //フォームイベント
    const result = $('input[type="text"]').val();
    $('input:checked').each(function(){
        console.log($(this).val());
    });

    $('form').validate({
        rules: {
            mytext: {
                required: true,
                email: true
            }
        }
    })
});