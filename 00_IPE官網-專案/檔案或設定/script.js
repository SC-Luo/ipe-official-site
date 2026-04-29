document.addEventListener("DOMContentLoaded", function() {
    // ==========================================
    // 1. Slick 輪播圖初始化 (首頁橫幅)
    // ==========================================
    var retryCount = 0;
    function initSlickV1() {
        if (window.jQuery && jQuery.fn.slick) {
            var $target = jQuery('.slide-v1-1shop-main');
            if ($target.length && !$target.hasClass('slick-initialized')) {
                $target.slick({
                    dots: true, arrows: false, infinite: true, speed: 500,
                    slidesToShow: 1, autoplay: true, autoplaySpeed: 3000,
                    pauseOnHover: false, pauseOnFocus: false, adaptiveHeight: true
                });
                setTimeout(function() { $target.slick('slickPlay'); }, 500);
            }
        } else if (retryCount < 50) {
            retryCount++;
            setTimeout(initSlickV1, 100);
        }
    }
    initSlickV1();

    // ==========================================
    // 2. 課程卡片與按鈕懸停效果
    // ==========================================
    document.querySelectorAll('.ipe-card').forEach(el => {
        el.style.transition = "transform 0.3s ease-out";
        el.addEventListener('mouseenter', () => el.style.transform = "translateY(-10px)");
        el.addEventListener('mouseleave', () => el.style.transform = "translateY(0px)");
    });

    // ==========================================
    // 3. 常見問題與公告 手風琴折疊動畫
    // ==========================================
    document.addEventListener('click', function(e) {
        const header = e.target.closest('.faq-header');
        if (header) {
            const faqItem = header.parentElement;
            const isActive = faqItem.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
            if (!isActive) faqItem.classList.add('active');
        }
        
        const newsItem = e.target.closest('.news-item');
        if (newsItem && !e.target.closest('.news-link-btn')) {
            newsItem.classList.toggle('active');
        }
    });

    // ==========================================
    // 4. 防 Email 爬蟲保護
    // ==========================================
    const mailContainer = document.getElementById("ipe-mail") || document.getElementById("ipe-contact-mail");
    if (mailContainer) {
        const email = "ipce2026@gmail.com";
        mailContainer.innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
    }

    // ==========================================
    // 5. 動態列表載入 (講師/理監事/公告)
    // ==========================================
    const fetchAndRender = (id, url, renderFunc, emptyMsg) => {
        const container = document.getElementById(id);
        if (!container) return;
        fetch(url).then(res => res.json()).then(data => {
            if (!data || data.length === 0) {
                container.innerHTML = `<div class="loading-status">${emptyMsg}</div>`;
                return;
            }
            container.innerHTML = '';
            data.forEach((item, index) => container.insertAdjacentHTML('beforeend', renderFunc(item, index)));
        }).catch(() => {
            container.innerHTML = '<div class="loading-status" style="color:#e74c3c;"><i class="fas fa-exclamation-triangle"></i> 無法載入資料，請稍後再試。</div>';
        });
    };

    // 動態載入：理監事名冊
    fetchAndRender('dynamic-board-grid', 'https://script.google.com/macros/s/AKfycbzM0uZedkApt-0UmkM3W4TC31tn410DnCNsqTAH7Ru71ylmUTEyz-W8BqBGH2ep2p516A/exec', item => {
        const avatar = item.photoUrl ? `<img src="${item.photoUrl}" alt="${item.name}">` : `<div class="board-avatar-fallback"><i class="fas fa-user-tie"></i></div>`;
        const exp = item.experience ? item.experience.replace(/\n/g, '<br>') : '';
        return `<div class="board-card"><div class="board-avatar">${avatar}</div><span class="board-title">${item.title || '理監事'}</span><h3 class="board-name">${item.name}</h3><p class="board-exp">${exp}</p></div>`;
    }, '目前尚無理監事資料。');

    // 動態載入：最新公告
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    fetchAndRender('dynamic-news-list', 'https://script.google.com/macros/s/AKfycby4EKQYiPt4P7iacGEsB5Wmft29-wdkOgapynz_Swcw-7Axb4AKzcs2tZW_HD0Pt4HX/exec', item => {
        let day = '--', my = item.date;
        if (item.date && !isNaN(new Date(item.date).getTime())) {
            const d = new Date(item.date);
            day = ('0' + d.getDate()).slice(-2); my = `${months[d.getMonth()]} ${d.getFullYear()}`;
        }
        const tag = item.tag ? `<span class="news-tag ${item.tagClass||''}">${item.tag}</span>` : '';
        const content = (item.content || item.excerpt || '').replace(/\n/g, '<br>');
        const btn = item.link ? `<a href="${item.link}" target="_blank" class="news-link-btn">查看相關連結 <i class="fas fa-external-link-alt"></i></a>` : '';
        return `<div class="news-item"><div class="news-header"><div class="news-date"><span class="day">${day}</span><span class="month-year">${my}</span></div><div class="news-summary">${tag}<h3 class="news-title">${item.title}</h3></div><div class="news-arrow"><i class="fas fa-chevron-down"></i></div></div><div class="news-full-content"><div class="news-full-text">${content}</div>${btn}</div></div>`;
    }, '目前尚無最新公告。');

    // ==========================================
    // 6. 表單全域綁定機制 (成績查詢/申請等)
    // ==========================================
    const bindForm = (id, url, successMsg) => {
        const form = document.getElementById(id);
        if (!form) return;
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const btnText = document.getElementById('btn-text');
            const status = document.getElementById('form-status') || document.getElementById('statusMsg');
            const originalText = btnText ? btnText.innerHTML : btn.innerHTML;
            
            btn.disabled = true;
            if(btnText) btnText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 處理中...';
            if(status) status.style.display = 'none';

            fetch(url, { method: 'POST', body: new FormData(form) })
                .then(res => id === 'scoreQueryForm' ? res.json() : {status: 'success'})
                .then(data => {
                    if (id === 'scoreQueryForm') {
                        if (data.status === 'success') {
                            document.getElementById('res-name').innerText = data.name;
                            document.getElementById('res-count').innerText = data.records.length;
                            const rw = document.getElementById('records-wrapper');
                            rw.innerHTML = '';
                            data.records.forEach((r, i) => {
                                let dStr = r.date;
                                if(!isNaN(new Date(r.date).getTime())) {
                                    const d = new Date(r.date); dStr = `${d.getFullYear()}/${('0'+(d.getMonth()+1)).slice(-2)}/${('0'+d.getDate()).slice(-2)}`;
                                }
                                const isPass = r.result === '合格';
                                const reviewBtn = isPass ? '' : `<a href="/score-review?subject=${encodeURIComponent(r.examItem)}&date=${encodeURIComponent(dStr)}" class="review-apply-btn"><i class="fas fa-question-circle"></i> 申請成績複查</a>`;
                                rw.innerHTML += `<div class="record-card ${i===0?'latest-record':''}">${i===0?'<div class="latest-badge"><i class="fas fa-crown"></i> 最近一次測驗</div>':''}<div class="rc-left"><div class="rc-date"><i class="far fa-calendar-alt"></i> 測驗日期：${dStr}</div><div class="rc-subject">${r.examItem} <span class="rc-level">${r.level}</span></div></div><div class="rc-right"><div class="verdict-badge ${isPass?'badge-pass':'badge-fail'}"><i class="fas fa-${isPass?'check':'times'}"></i> ${r.result}</div>${reviewBtn}</div></div>`;
                            });
                            document.getElementById('result-container').style.display = 'block';
                        } else {
                            if(status) { status.className = 'status-msg status-error'; status.innerHTML = '<i class="fas fa-exclamation-triangle"></i> 查無此人資料。'; status.style.display = 'block'; }
                        }
                    } else {
                        if(status) { status.style.display = 'block'; status.style.cssText = 'background: rgba(39, 174, 96, 0.1); color: #27ae60; border: 1px solid #27ae60; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px;'; status.innerHTML = `<i class="fas fa-check-circle"></i> ${successMsg}`; }
                        form.reset();
                    }
                })
                .catch(() => {
                    if(status) { status.style.display = 'block'; status.style.cssText = 'background: rgba(231, 76, 60, 0.1); color: #c0392b; border: 1px solid #c0392b; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px;'; status.innerHTML = '<i class="fas fa-exclamation-triangle"></i> 網路或系統發生錯誤，請稍後再試。'; }
                })
                .finally(() => { btn.disabled = false; if(btnText) btnText.innerHTML = originalText; else btn.innerHTML = originalText; });
        });
    };

    bindForm('scoreQueryForm', 'https://script.google.com/macros/s/AKfycbyZlhfc4mYFLYCrhYy2NxBxooNxKLQ5iIWfXNFd_Y09lizI0tCYfxlCSjhYlUaWVOx3Tg/exec', '');
    bindForm('reviewForm', 'https://script.google.com/macros/s/AKfycbx_fFPiCCBCtbAGwzpGdHQiMz_iRlO4_0oT-UVbMZIo6lRWbWlXav5OT50HncctqPut/exec', '複查申請已成功送出！');
    bindForm('instructorForm', 'https://script.google.com/macros/s/AKfycbweC8vouJKAJySg6YcXny7c-Z8YR3-U23CM15GpJskwRRyTEQF1hHChz-C0LVTk7jZP/exec', '申請已成功送出！委員會將盡快與您聯繫。');
    bindForm('ipeContactForm', 'https://script.google.com/macros/s/AKfycbzg9nHKNByM0Sb2iwgemOCmGUDZsZlh5YIOfewhQHCdFlbw82D_ZA540PHTvHR5v3Q51w/exec', '訊息已成功送出！');
});