// تأثير الكتابة للعناوين (اختياري)
document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('h1:not(.glitch)');
    titles.forEach(title => {
        const text = title.innerText;
        title.innerText = '';
        let i = 0;
        const typeWriter = setInterval(() => {
            if (i < text.length) {
                title.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
            }
        }, 100);
    });

    // إضافة تأثير الظهور التدريجي للعناصر عند التمرير
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .screenshot-gallery a, .privacy-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });
});

// إضافة كلاس fade-in للعناصر
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .fade-in {
            animation: fadeInUp 0.8s forwards !important;
        }
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
`);

// تحذير عند تحميل الملف المباشر (APK) - مثال
document.querySelectorAll('.btn.direct').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('سيبدأ تحميل ملف APK. تأكد من أن جهازك يسمح بالتثبيت من مصادر خارجية.');
        window.location.href = 'path-to-your-apk-file.apk'; // استبدل بالرابط الحقيقي
    });
});