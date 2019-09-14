// javascriptが有効になってない！！


$(function () {

// ナビゲーションバー
    $(window).scroll(function(){
      if ($('.keikan_ken').length){
        var h = $('.keikan_ken').height();
        if ($(window).scrollTop() > h) {
          $('.page-header').addClass('visible');
        } else {
          $('.page-header').removeClass('visible');
        }
      } else {
        $('.page-header').addClass('visible');
      }

    });

// ハンバーガーメニュー
		$('#nav_toggle').click(function(){
					$("header").toggleClass('open');
			    $("nav").slideToggle(500);
				});

// スクロールボタン
    var topBtn = $('.back-to-top');
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

// コンタクトスクロール
  $(".to-contact").click(function() {
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        position = position - 30;

        $('body,html').animate({
          scrollTop:position
        },800);
        return false;
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

// Hiddenチェックボックスの文字変更
$('input[name="check1"]').change(function() {

  // prop()でチェックの状態を取得
  var prop = $('#check1').prop('checked');

  // もしpropがチェック状態だったら
  if (prop) {
    // propでチェックと出力
    $('.check').text('× CLOSE');
  } else {
    // テキストをリセット
    $('.check').text('READ MORE');
  }

});





});
