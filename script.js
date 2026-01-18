// Splash Screen Control window.addEventListener('load', () => { setTimeout(() => { document.getElementById('splash').style.display = 'none'; document.getElementById('app').classList.remove('hidden'); }, 2500); });

// Elements const tabs = document.querySelectorAll('.tab'); const underline = document.querySelector('.underline'); const storyList = document.getElementById('storyList');

let currentLang = 'hi';

// Load Stories function loadStories(lang) { storyList.innerHTML = ''; stories[lang].forEach(story => { const div = document.createElement('div'); div.className = 'story-card'; div.textContent = story.title;

div.onclick = () => openStory(story);
storyList.appendChild(div);

}); }

// Open Story function openStory(story) { storyList.innerHTML = '';

const div = document.createElement('div'); div.className = 'story-card'; div.style.fontSize = localStorage.getItem('fontSize') || '18px'; div.style.whiteSpace = 'pre-line'; div.textContent = story.content;

storyList.appendChild(div); }

// Tabs Click tabs.forEach((tab, index) => { tab.addEventListener('click', () => { tabs.forEach(t => t.classList.remove('active')); tab.classList.add('active');

underline.style.left = index === 0 ? '0%' : '50%';
currentLang = tab.dataset.lang;
loadStories(currentLang);

}); });

// Font Size Control let fontSize = 18; document.addEventListener('keydown', e => { if (e.key === '+') { fontSize += 2; } if (e.key === '-') { fontSize -= 2; } localStorage.setItem('fontSize', fontSize + 'px'); });

// Night Mode Toggle let night = false; document.addEventListener('dblclick', () => { night = !night; document.body.classList.toggle('night', night); });

// Initial Load loadStories(currentLang);
