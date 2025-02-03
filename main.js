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