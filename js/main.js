$(function () {


// ローディング
  // ローディングのサイズを画面いっぱいに設定
  $(function() {
  var h = $(window).height();
   $('#loading__wrapper').css('display','none');
   $('#is-loading ,#loading').height(h).css('display','block');
  });

  // ローディングの時間指定
  $(window).on('load', function(){
    $('#is-loading').delay(900).fadeOut(800);
    $('#loading').delay(600).fadeOut(300);
    $('#loading__wrapper').css('display', 'block');
    $('.title').delay(1400).fadeIn(2000);
  });


  // 一定時間後にローディングを強制終了
  $(function(){
  setTimeout(stopload,2000);
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

          if ($("header").hasClass('open')){
          }else{
            $('.page-header').removeClass('visible');
          };

        };

      } else {
        $('.page-header').addClass('visible');
      }

      $('.non-visible').removeClass('visible');
    });



// ハンバーガーメニュー
		$('#nav_toggle').click(function(){
					$("header").toggleClass('open');
			    $("nav").slideToggle(500);
          if ($("header").hasClass('open')){
            $(".page-header").addClass('visible');
          }else{
            $(window).trigger('scroll');
          }
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
     if (scroll > elemPos - windowHeight + 350){
         $(this).addClass('scrollin');
      }
   });
});

// ニュース欄の自動更新
var api_url = "https://script.google.com/macros/s/AKfycbwNydaP4Emiz809gi0GuyU6rt1SzewiYqFaQW_18Pfq0f4x2yz2/exec";

$(function(){
  // APIを叩いてjsonを取得
  $.getJSON(api_url, function(data) {
    //JSONの中のデータの個数を変数化し、1件以上の場合は出力します（0件の場合返り値が無いため）
    var infoCount = data.length;
    $(data).each(function(){
      var date2 = this.date;
      date2 = date2.split('.');
      date2 = date2.join('-');
      if (this.link.length >= 1){
        $('<li><a class="hover-mask" href="' + this.link + '" target="_blank"><div class="flex-news"><div class="item1"><time datetime="' + date2 + '">' + this.date + '</time></div><div class="item2">' + this.content + '</div></div><div class="mask3"><div class="caption-news">READ MORE</div></div></a></li>').prependTo('ul.newsList');
      }else{
        $('<li><a><div class="flex-news"><div class="item1"><time datetime="' + date2 + '">' + this.date + '</time></div><div class="item2">' + this.content + '</div></div></a></li>').prependTo('ul.newsList');
      };
    });


    // if (infoCount >= 1) {
    //   $(data).each(function(){
    //
    //     if (this.link.length >= 1){
    //
    //     }else{
    //       $('<li><a class="hover-mask"><div class="flex-news"><div class="item1"><time datetime="' + date2 + '">' + this.date '</time></div><div class="item2">' + this.content + '</div></a></li>' ).appendTo('ul.newsList');
    //     };
    //   });
    // }; //end if infocount
  }); //end get json
});



  $(window).trigger('scroll');

// ENDタグ
});
