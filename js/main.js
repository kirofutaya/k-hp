// javascriptが有効になってない！！


$(function () {

  //トップまで戻るスクロールボタン
      $(window).scroll(function() {
          if($(this).scrollTop() > 100) { // 100pxスクロールしていたら上に戻るボタンを表示
              $(".back-to-top").fadeIn();
          } else {
              $(".back-to-top").fadeOut();
          }
      });

      // トップへ
      $(".back-to-top").click(function() {
          $("body,html").animate({scrollTop:0},800);
          return false; // 800msかけて上に戻る
      });

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


// // スクロールボタン
// var topBtn = $('#back-to-top');
// topBtn.hide();
// //スクロールが100に達したらボタン表示
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//         topBtn.fadeIn();
//     } else {
//         topBtn.fadeOut();
//     }
// });
// //スクロールしてトップ
// topBtn.click(function () {
//     $('body,html').animate({
//         scrollTop: 0
//     }, 500);
//     return false;
// });

// ハンバーガーメニュー
		$('#nav_toggle').click(function(){
					$("header").toggleClass('open');
			    $("nav").slideToggle(500);
				});

});
