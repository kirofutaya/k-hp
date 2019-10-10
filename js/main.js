// ロード時に作動
$(window).on('load', function(){
  $('#is-loading').delay(900).fadeOut(800);
  $('#loading').delay(600).fadeOut(300);
  $('#loading__wrapper').css('display', 'block');
  $('.title').delay(1400).fadeIn(2000);
  $('.tokyo').delay(5000).fadeIn(5000);
});

$(function () {

// ローディング
  $(function() {
  var h = $(window).height();
   $('#loading__wrapper').css('display','none');
   $('#is-loading ,#loading').height(h).css('display','block');
  });

  $(function(){
  setTimeout('stopload()',10000);
  });

  function stopload(){
   $('#loading__wrapper').css('display','block');
   $('#is-loading').delay(900).fadeOut(800);
   $('#loading').delay(600).fadeOut(300);
   $('.site-title').delay(1000).fadeIn(2500);
  }

// トップページにおいてナビゲーションバーの色を一定スクロール後に変える
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

      $('.non-visible').removeClass('visible');
    });



// ハンバーガーメニュー
		$('#nav_toggle').click(function(){
					$("header").toggleClass('open');
			    $("nav").slideToggle(500);
				});

// 「トップまで戻る」右下のスクロールボタン
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

// メニューのコンタクトを押すとフッターまでスクロールする
$('a[href^="#"]').click(function(){
  var speed = 800;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  position = position - 80;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
});


// Hiddenチェックボックスの文字変更
$('input[name="check1"]').change(function() {
  // prop()でチェックの状態を取得
  var prop = $('#check1').prop('checked');
  // もしpropがチェック状態だったら
  if (prop) {
    $('.check').text('× CLOSE'); // propでチェックと出力
  } else {
    $('.check').text('Former Staff');// テキストをリセット
  }
});

// スクロールするとフェードイン
$(window).scroll(function (){
   $('.fadein').each(function(){
     var elemPos = $(this).offset().top,
         scroll = $(window).scrollTop(),
         windowHeight = $(window).height();
     if (scroll > elemPos - windowHeight + 370){
         $(this).addClass('scrollin');
      }
   });
});

});
