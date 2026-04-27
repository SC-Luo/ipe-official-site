// ==========================================
// 1. Slick 輪播圖初始化 (首頁橫幅)
// ==========================================
$(function() {
  var retryCount = 0;
  var maxRetries = 50; // 最多等待 5 秒 (50 * 100ms)

  function initSlickV1() {
    // 防呆檢查: 確保 1shop 的 jQuery 與 Slick 套件皆已載入
    if (window.jQuery && jQuery.fn.slick) {
      var $target = jQuery('.slide-v1-1shop-main');

      // 避免重複初始化
      if ($target.hasClass('slick-initialized')) return;

      // 執行輪播設定
      $target.slick({
        dots: true,           // 顯示下方點點
        arrows: false,        // 隱藏左右箭頭
        infinite: true,       // 無限循環
        speed: 500,           // 切換速度
        autoplay: true,       // 自動播放
        autoplaySpeed: 3000,  // 停留時間(3秒)
        slidesToShow: 1,
        slidesToScroll: 1
      });
      console.log('IPE 官網輪播圖載入成功！');
    } else {
      retryCount++;
      if (retryCount < maxRetries) {
        // 如果還沒載入好，0.1秒後再試一次
        setTimeout(initSlickV1, 100); 
      } else {
        console.error('輪播圖載入失敗：找不到 Slick 套件');
      }
    }
  }

  // 啟動輪播檢查函數
  initSlickV1();
});

// ==========================================
// 2. 課程卡片懸停浮動效果 (Hover 動畫)
// ==========================================
// 因為 1shop 是動態載入內容，這裡直接選取並綁定事件
document.querySelectorAll('.ipe-card').forEach(el => {
  
  // 加上 CSS 過渡屬性，讓上下浮動不會太生硬 (如果你在 style.css 寫過了，這行會當作雙重保險)
  el.style.transition = "transform 0.3s ease-out";

  // 滑鼠移入：向上浮動 10px
  el.addEventListener('mouseenter', () => {
    el.style.transform = "translateY(-10px)";
  });

  // 滑鼠移出：恢復原位
  el.addEventListener('mouseleave', () => {
    el.style.transform = "translateY(0px)";
  });
});