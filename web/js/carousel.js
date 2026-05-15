// 轮播图功能
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成，开始初始化轮播图...');
    
    // 获取轮播图元素
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    console.log('找到幻灯片数量:', slides.length);
    console.log('找到指示点数量:', dots.length);
    
    if (slides.length === 0) {
        console.log('未找到轮播图元素');
        return;
    }
    
    let currentSlide = 0;
    let slideInterval;
    
    // 显示指定幻灯片
    function showSlide(n) {
        console.log('显示幻灯片:', n);
        
        // 隐藏所有幻灯片
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // 移除所有点的活动状态
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // 显示当前幻灯片
        if (slides[n]) {
            slides[n].classList.add('active');
        }
        
        // 激活当前点
        if (dots[n]) {
            dots[n].classList.add('active');
        }
        
        currentSlide = n;
    }
    
    // 下一张幻灯片
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // 上一张幻灯片
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // 切换到指定幻灯片
    function goToSlide(n) {
        showSlide(n);
        resetAutoPlay();
    }
    
    // 开始自动播放
    function startAutoPlay() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
        slideInterval = setInterval(nextSlide, 5000); // 5秒切换一次
        console.log('开始自动播放');
    }
    
    // 停止自动播放
    function stopAutoPlay() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
            console.log('停止自动播放');
        }
    }
    
    // 重置自动播放
    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }
    
    // 绑定按钮事件
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            console.log('点击上一张按钮');
            prevSlide();
            resetAutoPlay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            console.log('点击下一张按钮');
            nextSlide();
            resetAutoPlay();
        });
    }
    
    // 绑定指示点事件
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            console.log('点击指示点:', index);
            goToSlide(index);
        });
    });
    
    // 触摸事件支持
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        let startX = 0;
        let endX = 0;
        
        carousel.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            stopAutoPlay();
        }, { passive: true });
        
        carousel.addEventListener('touchend', function(e) {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
            startAutoPlay();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // 向左滑动，显示下一张
                    nextSlide();
                } else {
                    // 向右滑动，显示上一张
                    prevSlide();
                }
                resetAutoPlay();
            }
        }
    }
    
    // 键盘事件支持
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetAutoPlay();
        }
    });
    
    // 鼠标悬停时暂停自动播放
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }
    
    // 初始化显示第一张幻灯片
    showSlide(0);
    
    // 开始自动播放
    startAutoPlay();
    
    console.log('轮播图初始化完成');
});

// 全局函数，供HTML调用（兼容性）
window.changeSlide = function(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    
    // 找到当前活动的幻灯片
    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentSlide = index;
        }
    });
    
    if (direction === 1) {
        // 下一张
        currentSlide = (currentSlide + 1) % slides.length;
    } else {
        // 上一张
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
    
    // 显示新幻灯片
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
    }
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
};

window.currentSlide = function(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0 || n < 1 || n > slides.length) return;
    
    const index = n - 1;
    
    // 显示指定幻灯片
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (dots[index]) {
        dots[index].classList.add('active');
    }
};
