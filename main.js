// Add this at the top of main.js
let currentLang = 'en';

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

function toggleLanguage() {
  const select = document.querySelector('.goog-te-combo');
  if (select) {
    currentLang = currentLang === 'en' ? 'vi' : 'en';
    select.value = currentLang;
    select.dispatchEvent(new Event('change'));
  } else {
    alert('Không tìm thấy phần tử dịch ngôn ngữ');
  }
}


// ...existing code...

const newsData = [
    {
        img: 'https://cdn.galaxycine.vn/media/2024/12/12/den-am-hon-750_1733994529473.jpg',
        title: 'Chốn Tâm Thức trong Đèn Âm Hồn: Cầu nối hai thế giới',
        desc: 'Một phần không thể thiếu của bộ phim Đèn Âm Hồn là Chốn Tâm Thức...',
        url: 'URL-của-bài-1'
    },
    {
        img: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/m/a/main_ah_social-1.jpg',
        title: '4 Nhân Vật Mắc Kẹt Trong Chốn Tâm Thức: Ai Sẽ Thoát Ra?',
        desc: 'Trong Chốn Tâm Thức, có 4 nhân vật đang mắc kẹt và phải tìm cách thoát ra...',
        url: 'URL-của-bài-2'
    },
    {
        img: 'https://vcdn1-giaitri.vnecdn.net/2024/09/26/z5868205596448-586d85a3dfafd20-7420-7852-1727333289.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=cgGyVerkR2nvPW8WKK39fg',
        title: 'Những Người Lính Trong Đèn Âm Hồn: Hành Trình Trở Về Quê Hương',
        desc: 'Những người lính trong bộ phim Đèn Âm Hồn đang trong hành trình trở về quê hương...',
        url: 'URL-của-bài-3'
    },
    {
        img: 'https://vcdn1-giaitri.vnecdn.net/2024/05/21/image-544036797-extractword-0-4664-6706-1716260891.png?w=500&h=300&q=100&dpr=1&fit=crop&s=b5h0iX8owt8QOnVcZREvvQ',
        title: 'Điều kỳ diệu tại Đèn Âm Hồn: Khi thế giới tâm linh và thực tế hòa quyện',
        desc: 'Bộ phim Đèn Âm Hồn đem lại cái nhìn sâu sắc về sự hòa quyện giữa tâm linh và thực tế...',
        url: 'URL-của-bài-4'
    }
];

let currentPage = 1;
const itemsPerPage = 3;

function displayNews(page) {
    const container = document.getElementById('newsContainer');
    container.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedNews = newsData.slice(start, end);

    paginatedNews.forEach(news => {
        const newsItem = document.createElement('a');
        newsItem.href = news.url;
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <img src="${news.img}" alt="Hình ảnh">
            <div>
                <h3>${news.title}</h3>
                <p>${news.desc}</p>
            </div>
        `;
        container.appendChild(newsItem);
    });

    updateButtons();
}

function updateButtons() {
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === Math.ceil(newsData.length / itemsPerPage);
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayNews(currentPage);
    }
}

function nextPage() {
    if (currentPage < Math.ceil(newsData.length / itemsPerPage)) {
        currentPage++;
        displayNews(currentPage);
    }
}

// Hiển thị trang đầu tiên
displayNews(currentPage);

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Countdown Timer
const countdown = () => {
    const countDate = new Date('February 7, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = textDay;
    document.getElementById('hours').innerText = textHour;
    document.getElementById('minutes').innerText = textMinute;
    document.getElementById('seconds').innerText = textSecond;
};

setInterval(countdown, 1000);

/* filepath: /C:/HTML - CSS/Đèn Âm Hồn/main.js */
// Add to existing main.js
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.gallery-item').forEach(item => {
        observer.observe(item);
    });
});

// Add after existing code
class ParticleTrail {
    constructor() {
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.initCanvas();
        this.initEvents();
        this.animate();
    }

    initCanvas() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '9999';
        document.body.appendChild(this.canvas);
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    initEvents() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.addParticle();
        });

        document.addEventListener('click', () => {
            for (let i = 0; i < 10; i++) {
                this.addParticle(true);
            }
        });
    }

    addParticle(isClick = false) {
        const hue = (Date.now() / 30) % 360;
        this.particles.push({
            x: this.mouseX,
            y: this.mouseY,
            size: isClick ? Math.random() * 15 + 5 : Math.random() * 8 + 2,
            speedX: (Math.random() - 0.5) * (isClick ? 8 : 2),
            speedY: (Math.random() - 0.5) * (isClick ? 8 : 2),
            hue,
            life: 1
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.life -= 0.01;
            p.x += p.speedX;
            p.y += p.speedY;
            p.size *= 0.96;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.life})`;
            this.ctx.fill();

            if (p.life <= 0 || p.size < 0.1) {
                this.particles.splice(i, 1);
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particle trail when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    new ParticleTrail();
    // ...existing code...
});

// Add after existing code
class ImageZoom {
    constructor() {
        this.currentIndex = 0;
        this.images = document.querySelectorAll('.gallery-item img');
        this.initModal();
        this.initEvents();
    }

    initModal() {
        this.modal = document.createElement('div');
        this.modal.className = 'zoom-modal';
        this.modal.innerHTML = `
            <button class="close-btn">&times;</button>
            <button class="nav-btn prev">&#10094;</button>
            <button class="nav-btn next">&#10095;</button>
            <div class="zoom-container">
                <img src="" alt="Zoomed image">
            </div>
            <div class="zoom-counter"></div>
        `;
        document.body.appendChild(this.modal);
    }

    initEvents() {
        this.images.forEach((img, index) => {
            img.addEventListener('click', () => this.openImage(index));
        });

        this.modal.querySelector('.close-btn').onclick = () => this.closeModal();
        this.modal.querySelector('.prev').onclick = () => this.navigate(-1);
        this.modal.querySelector('.next').onclick = () => this.navigate(1);

        document.addEventListener('keydown', (e) => {
            if (this.modal.classList.contains('active')) {
                if (e.key === 'Escape') this.closeModal();
                if (e.key === 'ArrowLeft') this.navigate(-1);
                if (e.key === 'ArrowRight') this.navigate(1);
            }
        });
    }

    openImage(index) {
        this.currentIndex = index;
        const zoomImg = this.modal.querySelector('img');
        zoomImg.src = this.images[index].src;
        this.modal.classList.add('active');
        this.updateCounter();
    }

    closeModal() {
        this.modal.classList.remove('active');
    }

    navigate(direction) {
        this.currentIndex = (this.currentIndex + direction + this.images.length) % this.images.length;
        this.openImage(this.currentIndex);
    }

    updateCounter() {
        this.modal.querySelector('.zoom-counter').textContent = 
            `${this.currentIndex + 1} / ${this.images.length}`;
    }
}

// Initialize zoom gallery
document.addEventListener('DOMContentLoaded', () => {
    new ImageZoom();
    // ...existing code...
});

/* filepath: /c:/HTML - CSS/Đèn Âm Hồn/main.js */

function initInfiniteGallery() {
    const gallery = document.querySelector('.gallery');
    const items = gallery.innerHTML;
    gallery.innerHTML = items + items; // Duplicate items for seamless loop
}

document.addEventListener('DOMContentLoaded', () => {
    initInfiniteGallery();
    // ...existing code...
});

/* filepath: /C:/HTML - CSS/Đèn Âm Hồn/main.js */
function initProgressBar() {
    const progressBar = document.getElementById('progressBar');
    
    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    document.addEventListener('DOMContentLoaded', () => {
        progressBar.style.width = '100%';
        setTimeout(() => {
            progressBar.style.transition = 'width 0.2s ease';
            progressBar.style.width = '0%';
        }, 1000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initProgressBar();
    // ...existing code...
});

class ParallaxCard {
    constructor() {
        this.cards = document.querySelectorAll('.movie-info');
        this.initEvents();
    }

    initEvents() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleParallax(e, card));
            card.addEventListener('mouseleave', () => this.resetCard(card));
            this.addDepthToChildren(card);
        });
    }

    addDepthToChildren(card) {
        const elements = card.children;
        Array.from(elements).forEach((el, index) => {
            el.style.transform = `translateZ(${(index + 1) * 20}px)`;
            el.style.transition = 'all 0.3s ease';
        });
    }

    handleParallax(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale3d(1.05, 1.05, 1.05)
        `;

        this.addLighting(card, x, y);
    }

    addLighting(card, x, y) {
        const glare = `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 80%
        )`;
        
        card.style.backgroundImage = glare;
    }

    resetCard(card) {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        card.style.backgroundImage = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (!('ontouchstart' in window)) {
        new ParallaxCard();
    }
    // ...existing code...
});

/* filepath: /C:/HTML - CSS/Đèn Âm Hồn/main.js */
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1500);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    // ...existing code...
});