/* ===== DATA ===== */
const PRODUCTS = [
  { id:1, art:'F-1001', name:'Кресло Oslo Executive', series:'Серия OSLO', cat:'office', badge:'hit', price:28900, color:'#c9a87c', svgType:'chair', new:false, inStock:true, specs:{Материал:'Экокожа / металл',Цвет:'Чёрный / Хром',Гарантия:'3 года',Вес:'18 кг',Нагрузка:'до 150 кг'} },
  { id:2, art:'F-1002', name:'Стол переговорный Oslo 1600', series:'Серия OSLO', cat:'office', badge:'', price:54500, color:'#b89870', svgType:'desk', new:false, inStock:true, specs:{Материал:'ЛДСП / МДФ / металл',Размер:'160×80×74 см',Цвет:'Дуб натуральный',Гарантия:'3 года',Вес:'42 кг'} },
  { id:3, art:'F-2001', name:'Диван Porto 3-местный', series:'Серия PORTO', cat:'soft', badge:'new', price:87200, color:'#e8d5b7', svgType:'sofa', new:true, inStock:true, specs:{Материал:'Велюр / дерево',Цвет:'Серо-бежевый',Размер:'220×90×80 см',Гарантия:'2 года',Вес:'65 кг'} },
  { id:4, art:'F-2002', name:'Кресло Porto Relax', series:'Серия PORTO', cat:'soft', badge:'', price:39800, color:'#d4c4b0', svgType:'armchair', new:false, inStock:true, specs:{Материал:'Рогожка / дерево',Цвет:'Капучино',Размер:'85×90×85 см',Гарантия:'2 года',Вес:'28 кг'} },
  { id:5, art:'F-3001', name:'Шкаф распашной Loft 2000', series:'Серия LOFT', cat:'storage', badge:'', price:42100, color:'#b8a48a', svgType:'wardrobe', new:false, inStock:true, specs:{Материал:'ЛДСП Egger',Размер:'200×60×220 см',Цвет:'Дуб / Белый',Гарантия:'3 года',Вес:'98 кг'} },
  { id:6, art:'F-3002', name:'Стеллаж открытый Loft 5 секций', series:'Серия LOFT', cat:'storage', badge:'new', price:18600, color:'#c4b09c', svgType:'shelf', new:true, inStock:true, specs:{Материал:'ЛДСП / металл',Размер:'120×35×180 см',Цвет:'Белый / Чёрный',Гарантия:'3 года',Вес:'34 кг'} },
  { id:7, art:'F-4001', name:'Кровать Hotel Standard 160', series:'Серия HOTEL', cat:'hotel', badge:'hit', price:62400, color:'#d9cabb', svgType:'bed', new:false, inStock:true, specs:{Материал:'МДФ / ткань',Размер:'160×200 см',Цвет:'Серый / Белый',Гарантия:'2 года',Вес:'72 кг'} },
  { id:8, art:'F-4002', name:'Тумба прикроватная Hotel', series:'Серия HOTEL', cat:'hotel', badge:'', price:9800, color:'#e0d4c4', svgType:'nightstand', new:false, inStock:true, specs:{Материал:'МДФ / лак',Размер:'50×45×55 см',Цвет:'Белый матовый',Гарантия:'2 года',Вес:'12 кг'} },
  { id:9, art:'F-5001', name:'Стол садовый Teak 120', series:'Серия OUTDOOR', cat:'outdoor', badge:'new', price:34700, color:'#c4b49a', svgType:'outdoorTable', new:true, inStock:false, specs:{Материал:'Тик / нержавеющая сталь',Размер:'120×75×74 см',Цвет:'Натуральный тик',Гарантия:'5 лет',Вес:'28 кг'} },
  { id:10, art:'F-5002', name:'Кресло Teak Lounge', series:'Серия OUTDOOR', cat:'outdoor', badge:'', price:18900, color:'#b9a888', svgType:'loungeChair', new:false, inStock:true, specs:{Материал:'Тик',Цвет:'Натуральный',Размер:'65×80×88 см',Гарантия:'5 лет',Вес:'9 кг'} },
  { id:11, art:'F-6001', name:'Кровать Bambino 90', series:'Серия KIDS', cat:'kids', badge:'new', price:24300, color:'#e8d8c0', svgType:'kidsBed', new:true, inStock:true, specs:{Материал:'Берёза / МДФ',Размер:'90×200 см',Цвет:'Белый / Дуб',Гарантия:'2 года',Вес:'38 кг'} },
  { id:12, art:'F-6002', name:'Стол письменный Kids 120', series:'Серия KIDS', cat:'kids', badge:'', price:14600, color:'#f0e4d0', svgType:'kidsDesk', new:false, inStock:true, specs:{Материал:'МДФ / металл',Размер:'120×60×76 см',Цвет:'Белый / Розовый',Гарантия:'2 года',Вес:'22 кг'} },
  { id:13, art:'F-1003', name:'Стул Oslo Meeting', series:'Серия OSLO', cat:'office', badge:'', price:8400, color:'#a89878', svgType:'chair2', new:false, inStock:true, specs:{Материал:'Ткань / металл',Цвет:'Серый / Хром',Нагрузка:'до 120 кг',Гарантия:'3 года',Вес:'7 кг'} },
  { id:14, art:'F-2003', name:'Пуф Porto Square', series:'Серия PORTO', cat:'soft', badge:'', price:7200, color:'#d4c0a8', svgType:'pouf', new:false, inStock:true, specs:{Материал:'Рогожка / пена',Размер:'50×50×44 см',Цвет:'Бежевый / Коричневый',Гарантия:'1 год',Вес:'6 кг'} },
  { id:15, art:'F-4003', name:'Кресло Hotel Lounge', series:'Серия HOTEL', cat:'hotel', badge:'', price:27600, color:'#c8b8a0', svgType:'armchair', new:false, inStock:true, specs:{Материал:'Велюр / дерево',Цвет:'Тёмно-синий',Размер:'75×80×80 см',Гарантия:'2 года',Вес:'24 кг'} },
  { id:16, art:'F-3003', name:'Комод Loft 4 ящика', series:'Серия LOFT', cat:'storage', badge:'', price:21400, color:'#b0a090', svgType:'dresser', new:false, inStock:false, specs:{Материал:'ЛДСП Egger',Размер:'100×45×80 см',Цвет:'Дуб Сонома / Белый',Гарантия:'3 года',Вес:'48 кг'} },
];

const PRICE_TABLE = [
  { art:'F-1001', name:'Кресло Oslo Executive', retail:'28 900 ₽', dealer:'19 074 ₽', stock:'✓ В наличии' },
  { art:'F-1002', name:'Стол переговорный Oslo 1600', retail:'54 500 ₽', dealer:'35 970 ₽', stock:'✓ В наличии' },
  { art:'F-2001', name:'Диван Porto 3-местный', retail:'87 200 ₽', dealer:'57 552 ₽', stock:'✓ В наличии' },
  { art:'F-2002', name:'Кресло Porto Relax', retail:'39 800 ₽', dealer:'26 268 ₽', stock:'✓ В наличии' },
  { art:'F-3001', name:'Шкаф Loft 2000', retail:'42 100 ₽', dealer:'27 786 ₽', stock:'✓ В наличии' },
  { art:'F-4001', name:'Кровать Hotel Standard 160', retail:'62 400 ₽', dealer:'41 184 ₽', stock:'✓ В наличии' },
  { art:'F-5001', name:'Стол садовый Teak 120', retail:'34 700 ₽', dealer:'22 902 ₽', stock:'⏳ Под заказ' },
];

/* ===== SVGs ===== */
function getSVG(type, color) {
  const c = color || '#c4a47a';
  const svgs = {
    chair: `<svg viewBox="0 0 200 200" fill="none"><rect x="40" y="100" width="120" height="50" rx="8" fill="${c}" opacity=".7"/><rect x="55" y="55" width="90" height="50" rx="8" fill="${c}"/><rect x="40" y="145" width="12" height="30" rx="4" fill="${c}" opacity=".6"/><rect x="148" y="145" width="12" height="30" rx="4" fill="${c}" opacity=".6"/></svg>`,
    chair2: `<svg viewBox="0 0 200 200" fill="none"><rect x="50" y="95" width="100" height="40" rx="6" fill="${c}" opacity=".7"/><rect x="60" y="55" width="80" height="45" rx="6" fill="${c}"/><rect x="50" y="130" width="10" height="40" rx="3" fill="${c}" opacity=".6"/><rect x="140" y="130" width="10" height="40" rx="3" fill="${c}" opacity=".6"/><rect x="85" y="165" width="30" height="8" rx="3" fill="${c}" opacity=".4"/></svg>`,
    desk: `<svg viewBox="0 0 200 200" fill="none"><rect x="20" y="90" width="160" height="14" rx="4" fill="${c}"/><rect x="25" y="104" width="10" height="60" rx="3" fill="${c}" opacity=".7"/><rect x="165" y="104" width="10" height="60" rx="3" fill="${c}" opacity=".7"/><rect x="20" y="104" width="60" height="50" rx="4" fill="${c}" opacity=".35"/></svg>`,
    sofa: `<svg viewBox="0 0 200 200" fill="none"><rect x="15" y="100" width="170" height="60" rx="12" fill="${c}" opacity=".75"/><rect x="25" y="80" width="50" height="25" rx="8" fill="${c}"/><rect x="83" y="80" width="34" height="22" rx="6" fill="${c}" opacity=".6"/><rect x="125" y="80" width="50" height="25" rx="8" fill="${c}"/><rect x="15" y="90" width="18" height="70" rx="8" fill="${c}" opacity=".9"/><rect x="167" y="90" width="18" height="70" rx="8" fill="${c}" opacity=".9"/></svg>`,
    armchair: `<svg viewBox="0 0 200 200" fill="none"><rect x="35" y="100" width="130" height="60" rx="10" fill="${c}" opacity=".75"/><rect x="45" y="70" width="110" height="36" rx="8" fill="${c}"/><rect x="28" y="90" width="20" height="55" rx="8" fill="${c}" opacity=".9"/><rect x="152" y="90" width="20" height="55" rx="8" fill="${c}" opacity=".9"/><rect x="50" y="158" width="14" height="22" rx="3" fill="${c}" opacity=".6"/><rect x="136" y="158" width="14" height="22" rx="3" fill="${c}" opacity=".6"/></svg>`,
    wardrobe: `<svg viewBox="0 0 200 200" fill="none"><rect x="30" y="30" width="140" height="150" rx="6" fill="${c}" opacity=".6"/><line x1="100" y1="30" x2="100" y2="180" stroke="#fff" stroke-width="2" opacity=".4"/><circle cx="92" cy="105" r="4" fill="${c}" opacity=".9"/><circle cx="108" cy="105" r="4" fill="${c}" opacity=".9"/><rect x="30" y="176" width="140" height="10" rx="3" fill="${c}" opacity=".8"/></svg>`,
    shelf: `<svg viewBox="0 0 200 200" fill="none"><rect x="30" y="30" width="10" height="160" rx="3" fill="${c}"/><rect x="160" y="30" width="10" height="160" rx="3" fill="${c}"/><rect x="25" y="55" width="150" height="8" rx="3" fill="${c}" opacity=".8"/><rect x="25" y="95" width="150" height="8" rx="3" fill="${c}" opacity=".8"/><rect x="25" y="135" width="150" height="8" rx="3" fill="${c}" opacity=".8"/><rect x="25" y="178" width="150" height="8" rx="3" fill="${c}" opacity=".8"/></svg>`,
    bed: `<svg viewBox="0 0 200 200" fill="none"><rect x="20" y="120" width="160" height="50" rx="6" fill="${c}" opacity=".7"/><rect x="20" y="75" width="40" height="50" rx="6" fill="${c}" opacity=".5"/><rect x="20" y="60" width="160" height="65" rx="4" fill="${c}" opacity=".3"/><rect x="25" y="168" width="12" height="18" rx="3" fill="${c}" opacity=".8"/><rect x="163" y="168" width="12" height="18" rx="3" fill="${c}" opacity=".8"/></svg>`,
    nightstand: `<svg viewBox="0 0 200 200" fill="none"><rect x="50" y="60" width="100" height="120" rx="6" fill="${c}" opacity=".7"/><rect x="50" y="100" width="100" height="3" fill="#fff" opacity=".3"/><circle cx="100" cy="85" r="5" fill="#fff" opacity=".5"/><circle cx="100" cy="120" r="5" fill="#fff" opacity=".5"/><circle cx="100" cy="155" r="5" fill="#fff" opacity=".5"/></svg>`,
    outdoorTable: `<svg viewBox="0 0 200 200" fill="none"><rect x="20" y="90" width="160" height="12" rx="4" fill="${c}"/><rect x="45" y="102" width="10" height="65" rx="3" fill="${c}" opacity=".8"/><rect x="145" y="102" width="10" height="65" rx="3" fill="${c}" opacity=".8"/><rect x="40" y="160" width="120" height="8" rx="3" fill="${c}" opacity=".6"/></svg>`,
    loungeChair: `<svg viewBox="0 0 200 200" fill="none"><rect x="30" y="120" width="140" height="35" rx="8" fill="${c}" opacity=".7"/><rect x="30" y="75" width="80" height="50" rx="8" fill="${c}" opacity=".8"/><rect x="30" y="110" width="16" height="55" rx="6" fill="${c}"/><rect x="154" y="120" width="16" height="45" rx="6" fill="${c}"/></svg>`,
    kidsBed: `<svg viewBox="0 0 200 200" fill="none"><rect x="20" y="110" width="160" height="55" rx="6" fill="${c}" opacity=".7"/><rect x="20" y="60" width="38" height="55" rx="6" fill="${c}" opacity=".8"/><rect x="142" y="60" width="38" height="55" rx="6" fill="${c}" opacity=".8"/><rect x="25" y="162" width="12" height="18" rx="3" fill="${c}" opacity=".8"/><rect x="163" y="162" width="12" height="18" rx="3" fill="${c}" opacity=".8"/><circle cx="80" cy="88" r="8" fill="#fff" opacity=".4"/><circle cx="120" cy="88" r="8" fill="#fff" opacity=".4"/></svg>`,
    kidsDesk: `<svg viewBox="0 0 200 200" fill="none"><rect x="20" y="95" width="160" height="12" rx="4" fill="${c}"/><rect x="25" y="107" width="10" height="60" rx="3" fill="${c}" opacity=".7"/><rect x="165" y="107" width="10" height="60" rx="3" fill="${c}" opacity=".7"/><rect x="20" y="107" width="55" height="45" rx="4" fill="${c}" opacity=".35"/><circle cx="155" cy="78" r="15" fill="${c}" opacity=".4"/></svg>`,
    pouf: `<svg viewBox="0 0 200 200" fill="none"><rect x="40" y="90" width="120" height="65" rx="12" fill="${c}" opacity=".8"/><rect x="50" y="155" width="14" height="16" rx="3" fill="${c}" opacity=".6"/><rect x="136" y="155" width="14" height="16" rx="3" fill="${c}" opacity=".6"/></svg>`,
    dresser: `<svg viewBox="0 0 200 200" fill="none"><rect x="30" y="40" width="140" height="150" rx="6" fill="${c}" opacity=".6"/><rect x="30" y="78" width="140" height="3" fill="#fff" opacity=".3"/><rect x="30" y="116" width="140" height="3" fill="#fff" opacity=".3"/><rect x="30" y="154" width="140" height="3" fill="#fff" opacity=".3"/><circle cx="100" cy="62" r="5" fill="#fff" opacity=".5"/><circle cx="100" cy="99" r="5" fill="#fff" opacity=".5"/><circle cx="100" cy="137" r="5" fill="#fff" opacity=".5"/></svg>`,
  };
  return svgs[type] || svgs.chair;
}

/* ===== STATE ===== */
let currentPage = 1;
const PER_PAGE = 8;
let filteredProducts = [...PRODUCTS];
let isLoggedIn = false;

/* ===== NAVIGATION ===== */
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll('.nav__link').forEach(l => {
    l.classList.toggle('active', l.dataset.section === id);
  });
}

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showSection(link.dataset.section);
    closeNavMobile();
  });
});

/* ===== BURGER ===== */
const burger = document.getElementById('burger');
const nav = document.getElementById('mainNav');
burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
function closeNavMobile() { nav.classList.remove('open'); }

/* ===== SCROLL ===== */
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 10);
});

/* ===== CATALOG ===== */
function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  const start = (currentPage - 1) * PER_PAGE;
  const paginated = filteredProducts.slice(start, start + PER_PAGE);

  if (paginated.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted)"><p style="font-size:32px;margin-bottom:8px">🔍</p><p>Ничего не найдено по вашему запросу</p></div>`;
    document.getElementById('pagination').innerHTML = '';
    return;
  }

  grid.innerHTML = paginated.map(p => `
    <div class="product-card" onclick="openProduct(${p.id})">
      <div class="product-card__img" style="background: linear-gradient(145deg, ${p.color}22, ${p.color}44)">
        ${getSVG(p.svgType, p.color)}
        ${p.badge ? `<span class="product-card__badge badge--${p.badge}">${p.badge === 'hit' ? 'Хит' : p.badge === 'new' ? 'Новинка' : p.badge}</span>` : ''}
        ${!p.inStock ? `<span class="product-card__badge badge--new" style="background:#6b7280;top:auto;bottom:12px">Под заказ</span>` : ''}
      </div>
      <div class="product-card__body">
        <div class="product-card__art">${p.art}</div>
        <div class="product-card__name">${p.name}</div>
        <div class="product-card__series">${p.series}</div>
        <div class="product-card__price-row">
          <span class="product-card__price">${formatPrice(p.price)}</span>
          <span class="product-card__dealer">Дилерская цена</span>
        </div>
      </div>
    </div>
  `).join('');

  renderPagination();
}

function renderPagination() {
  const total = Math.ceil(filteredProducts.length / PER_PAGE);
  const pg = document.getElementById('pagination');
  if (total <= 1) { pg.innerHTML = ''; return; }
  let html = '';
  if (currentPage > 1) html += `<button class="page-btn" onclick="goPage(${currentPage-1})">‹</button>`;
  for (let i = 1; i <= total; i++) {
    html += `<button class="page-btn${i===currentPage?' active':''}" onclick="goPage(${i})">${i}</button>`;
  }
  if (currentPage < total) html += `<button class="page-btn" onclick="goPage(${currentPage+1})">›</button>`;
  pg.innerHTML = html;
}

function goPage(n) {
  currentPage = n;
  renderCatalog();
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

function filterCatalog(cat) {
  showSection('catalog');
  document.getElementById('categoryFilter').value = cat;
  applyFilters();
}

function applyFilters() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const cat = document.getElementById('categoryFilter').value;
  const sort = document.getElementById('sortFilter').value;

  filteredProducts = PRODUCTS.filter(p => {
    const matchCat = cat === 'all' || p.cat === cat;
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.art.toLowerCase().includes(q) || p.series.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (sort === 'name') filteredProducts.sort((a,b) => a.name.localeCompare(b.name));
  else if (sort === 'new') filteredProducts = filteredProducts.filter(p=>p.new).concat(filteredProducts.filter(p=>!p.new));
  else if (sort === 'popular') filteredProducts.sort((a,b) => b.price - a.price);

  currentPage = 1;
  renderCatalog();
}

document.getElementById('searchInput').addEventListener('input', applyFilters);
document.getElementById('categoryFilter').addEventListener('change', applyFilters);
document.getElementById('sortFilter').addEventListener('change', applyFilters);

function formatPrice(n) {
  return '₽ ' + n.toLocaleString('ru-RU');
}

/* ===== PRODUCT MODAL ===== */
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const dealerPrice = Math.round(p.price * 0.66);
  const specsHtml = Object.entries(p.specs).map(([k,v]) =>
    `<div class="spec-row"><span>${k}</span><span>${v}</span></div>`
  ).join('');
  document.getElementById('productModalContent').innerHTML = `
    <div class="product-modal__img">${getSVG(p.svgType, p.color)}</div>
    <div class="product-modal__info">
      <div class="product-modal__art">${p.art}</div>
      <h2 class="product-modal__name">${p.name}</h2>
      <div style="font-size:13px;color:var(--text-muted);margin-bottom:8px">${p.series} · ${p.inStock ? '✓ В наличии' : '⏳ Под заказ'}</div>
      <div class="product-modal__price">${formatPrice(p.price)}</div>
      <div class="product-modal__dealer-price">🔒 Дилерская цена: <strong>${formatPrice(dealerPrice)}</strong> (скидка 34%) — войдите в кабинет</div>
      ${specsHtml}
      <div class="product-modal__actions">
        <button class="btn btn--primary" onclick="requestOrder(${p.id})">Запросить заказ</button>
        <button class="btn btn--outline" onclick="closeProductModal()">Закрыть</button>
      </div>
    </div>
  `;
  document.getElementById('productModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = '';
}

function requestOrder(id) {
  closeProductModal();
  if (isLoggedIn) {
    openModal();
    showScreen('screenOrder');
  } else {
    openModal();
    showToast('Войдите в дилерский кабинет для оформления заказа');
  }
}

document.getElementById('productModal').addEventListener('click', e => {
  if (e.target === document.getElementById('productModal')) closeProductModal();
});

/* ===== MODAL ===== */
function openModal() {
  document.getElementById('dealerModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  if (!isLoggedIn) showScreen('screenLogin');
  else showScreen('screenDashboard');
}

function closeModal() {
  document.getElementById('dealerModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('loginBtn').addEventListener('click', openModal);
document.getElementById('heroDealerBtn').addEventListener('click', () => {
  openModal(); showScreen('screenRegister');
});

document.getElementById('dealerModal').addEventListener('click', e => {
  if (e.target === document.getElementById('dealerModal')) closeModal();
});

function showScreen(id) {
  document.querySelectorAll('.modal-screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(id);
  if (screen) screen.classList.add('active');
}

/* ===== DASHBOARD TABS ===== */
document.querySelectorAll('.dash-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.dash-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById('tab-' + tab.dataset.tab);
    if (panel) panel.classList.add('active');
  });
});

/* ===== PRICE TABLE ===== */
function renderPriceTable() {
  const tbody = document.getElementById('priceTableBody');
  if (!tbody) return;
  tbody.innerHTML = PRICE_TABLE.map(r => `
    <tr>
      <td style="font-size:11px;color:var(--text-muted)">${r.art}</td>
      <td>${r.name}</td>
      <td style="color:var(--text-muted);text-decoration:line-through">${r.retail}</td>
      <td style="font-weight:700;color:var(--accent)">${r.dealer}</td>
      <td style="font-size:12px">${r.stock}</td>
    </tr>
  `).join('');
}

/* ===== AUTH ===== */
function doLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value.trim();
  const errEl = document.getElementById('loginError');
  if ((email === 'demo@forma.ru' || email === 'demo') && pass === 'demo123') {
    isLoggedIn = true;
    errEl.style.display = 'none';
    document.getElementById('dealerName').textContent = 'Иван';
    showScreen('screenDashboard');
    renderPriceTable();
    document.getElementById('loginBtn').textContent = 'Личный кабинет';
    showToast('Добро пожаловать в дилерский кабинет!');
  } else {
    errEl.style.display = 'block';
  }
}

function doLogout() {
  isLoggedIn = false;
  closeModal();
  document.getElementById('loginBtn').textContent = 'Войти в кабинет';
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPass').value = '';
  showToast('Вы вышли из кабинета');
}

function submitRegister(e) {
  e.preventDefault();
  document.getElementById('successTitle').textContent = 'Заявка отправлена!';
  document.getElementById('successText').textContent = 'Наш менеджер свяжется с вами в течение 1 рабочего дня для верификации и предоставления доступа.';
  showScreen('screenSuccess');
}

function submitRecover(e) {
  e.preventDefault();
  document.getElementById('successTitle').textContent = 'Письмо отправлено';
  document.getElementById('successText').textContent = 'Проверьте вашу почту — ссылка для восстановления пароля уже в пути.';
  showScreen('screenSuccess');
}

function submitOrder(e) {
  e.preventDefault();
  document.getElementById('successTitle').textContent = 'Заказ оформлен!';
  document.getElementById('successText').textContent = 'Ваш заказ принят и передан в обработку. Подтверждение придёт на email.';
  showScreen('screenSuccess');
  const btn = document.querySelector('#screenSuccess .btn--primary');
  btn.textContent = 'Вернуться в кабинет';
  btn.onclick = () => showScreen('screenDashboard');
}

/* ===== CONTACTS FORM ===== */
function submitForm(e) {
  e.preventDefault();
  showToast('✓ Заявка отправлена! Ответим в течение 1 рабочего дня.');
  e.target.reset();
}

/* ===== ORDER ROW ===== */
function addOrderRow() {
  const container = document.getElementById('orderItems');
  const row = document.createElement('div');
  row.className = 'order-item-row';
  row.innerHTML = `<input type="text" placeholder="Арт. или наименование"/><input type="number" placeholder="Кол-во" min="1"/><button type="button" class="remove-row" onclick="this.parentElement.remove()">×</button>`;
  container.appendChild(row);
}

/* ===== DOWNLOAD FAKE ===== */
function fakeDownload(filename) {
  showToast(`📥 Загрузка: ${filename}`);
}

/* ===== TOAST ===== */
function showToast(msg, duration = 3500) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

/* ===== KEYBOARD ===== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeProductModal();
  }
});

/* ===== INIT ===== */
renderCatalog();
