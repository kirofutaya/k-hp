// javascriptが有効になってない！！


$(function () {


// // スティッキーヘッダー
//   $('.page-header').each(function () {
//
//      var $window = $(window),
//          $header = $(this),
//          headerOffsetTop = $header.offset().top;
//
//      // ウィンドウのスクロールイベントを監視
//      // (ウィンドウがスクロールするごとに処理を実行する)
//      $window.on('scroll', function () {
//
//          if ($window.scrollTop() > headerOffsetTop) {
//              $header.addClass('sticky');
//          } else {
//              $header.removeClass('sticky');
//          }
//
//      });
//
//      // ウィンドウのスクロールイベントを発生させる
//      // (ヘッダーの初期位置を調整するため)
//      $window.trigger('scroll');
//    })


// スクロールボタンn
var topBtn = $('#page-top');
topBtn.hide();
//スクロールが100に達したらボタン表示
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        topBtn.fadeIn();
    } else {
        topBtn.fadeOut();
    }
});
//スクロールしてトップ
topBtn.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// ハンバーガーメニュー
		$('#nav_toggle').click(function(){
					$("header").toggleClass('open');
			    $("nav").slideToggle(500);
				});

});
