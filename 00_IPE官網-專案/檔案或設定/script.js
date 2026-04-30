document.addEventListener("DOMContentLoaded", function() {
    // ==========================================
    // SVG Icon Definitions
    // ==========================================
    const svgSpinner = '<svg class="ipe-spinner-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.2-184.1c-16.9-5-26.5-22.9-21.5-39.8s22.9-26.5 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"/></svg>';
    const svgExclamationTriangle = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M569.5 448H6.5C-2.2 448-5.8 439.8.9 432.5l280-416c4.5-6.7 14.5-6.7 19.1 0l280 416c6.7 7.3 3.1 15.5-5.6 15.5zM288 384c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm-16-96c0-8.8 7.2-16 16-16h0c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h0c-8.8 0-16-7.2-16-16v-64z"/></svg>';
    const svgCheckCircle = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>';
    const svgCrown = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.2 7.6-.6l52.2 209.2c1.9 7.6 8.7 13.4 16.5 13.4h391.3c7.8 0 14.6-5.8 16.5-13.4l52.2-209.2c2.4.4 5 .6 7.6 .6 26.5 0 48-21.5 48-48s-21.5-48-48-48z"/></svg>';
    const svgChevronDown = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>';
    const svgUserTie = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128S326.7 0 256 0zM184 288c-44.2 0-80 35.8-80 80V448c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V368c0-44.2-35.8-80-80-80H184zm139.4 54.6c7.5-3.1 12.6-10.5 12.6-18.6 0-11.4-9.2-20.6-20.6-20.6H208.6c-11.4 0-20.6 9.2-20.6 20.6 0 8.1 5.1 15.5 12.6 18.6l-24.4 81.4c-3.1 10.3 4.2 21.4 15.2 21.4h101.2c11 0 18.3-11.1 15.2-21.4l-24.4-81.4z"/></svg>';
    const svgExternalLink = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>';
    const svgQuestionCircle = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>';
    const svgCalendarDays = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V288c0-8.8-7.2-16-16-16H64z"/></svg>';
    const svgCheck = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>';
    const svgTimes = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';

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
        const avatar = item.photoUrl ? `<img src="${item.photoUrl}" alt="${item.name}">` : `<div class="board-avatar-fallback">${svgUserTie}</div>`;
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
        const btn = item.link ? `<a href="${item.link}" target="_blank" class="news-link-btn">查看相關連結 ${svgExternalLink}</a>` : '';
        return `<div class="news-item"><div class="news-header"><div class="news-date"><span class="day">${day}</span><span class="month-year">${my}</span></div><div class="news-summary">${tag}<h3 class="news-title">${item.title}</h3></div><div class="news-arrow">${svgChevronDown}</div></div><div class="news-full-content"><div class="news-full-text">${content}</div>${btn}</div></div>`;
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
            if(btnText) btnText.innerHTML = `<span class="ipe-spinner">${svgSpinner}</span> 處理中...`;
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
                                const reviewBtn = isPass ? '' : `<a href="/score-review?subject=${encodeURIComponent(r.examItem)}&date=${encodeURIComponent(dStr)}" class="review-apply-btn">${svgQuestionCircle} 申請成績複查</a>`;
                                rw.innerHTML += `<div class="record-card ${i===0?'latest-record':''}">${i===0?`<div class="latest-badge">${svgCrown} 最近一次測驗</div>`:''}<div class="rc-left"><div class="rc-date">${svgCalendarDays} 測驗日期：${dStr}</div><div class="rc-subject">${r.examItem} <span class="rc-level">${r.level}</span></div></div><div class="rc-right"><div class="verdict-badge ${isPass?'badge-pass':'badge-fail'}">${isPass?svgCheck:svgTimes} ${r.result}</div>${reviewBtn}</div></div>`;
                            });
                            document.getElementById('result-container').style.display = 'block';
                        } else {
                            if(status) { status.className = 'status-msg status-error'; status.innerHTML = `${svgExclamationTriangle} 查無此人資料。`; status.style.display = 'block'; }
                        }
                    } else {
                        if(status) { status.style.display = 'block'; status.style.cssText = 'background: rgba(39, 174, 96, 0.1); color: #27ae60; border: 1px solid #27ae60; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px;'; status.innerHTML = `${svgCheckCircle} ${successMsg}`; }
                        form.reset();
                    }
                })
                .catch(() => {
                    if(status) { status.style.display = 'block'; status.style.cssText = 'background: rgba(231, 76, 60, 0.1); color: #c0392b; border: 1px solid #c0392b; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px;'; status.innerHTML = `${svgExclamationTriangle} 網路或系統發生錯誤，請稍後再試。`; }
                })
                .finally(() => { btn.disabled = false; if(btnText) btnText.innerHTML = originalText; else btn.innerHTML = originalText; });
        });
    };

    bindForm('scoreQueryForm', 'https://script.google.com/macros/s/AKfycbyZlhfc4mYFLYCrhYy2NxBxooNxKLQ5iIWfXNFd_Y09lizI0tCYfxlCSjhYlUaWVOx3Tg/exec', '');
    bindForm('reviewForm', 'https://script.google.com/macros/s/AKfycbx_fFPiCCBCtbAGwzpGdHQiMz_iRlO4_0oT-UVbMZIo6lRWbWlXav5OT50HncctqPut/exec', '複查申請已成功送出！');
    bindForm('instructorForm', 'https://script.google.com/macros/s/AKfycbweC8vouJKAJySg6YcXny7c-Z8YR3-U23CM15GpJskwRRyTEQF1hHChz-C0LVTk7jZP/exec', '申請已成功送出！委員會將盡快與您聯繫。');
    bindForm('ipeContactForm', 'https://script.google.com/macros/s/AKfycbzg9nHKNByM0Sb2iwgemOCmGUDZsZlh5YIOfewhQHCdFlbw82D_ZA540PHTvHR5v3Q51w/exec', '訊息已成功送出！');
});