document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    const loadingEl = document.getElementById('productDetailLoading');
    const contentEl = document.getElementById('productDetailContent');
    const notFoundEl = document.getElementById('productNotFound');

    if (typeof PRODUCTS_DATA === 'undefined') {
        console.error('products-data.js لم يتم تحميله');
        return;
    }

    const product = PRODUCTS_DATA.find(p => p.id === productId);

    if (loadingEl) loadingEl.style.display = 'none';

    if (!product) {
        if (notFoundEl) notFoundEl.style.display = 'block';
        return;
    }

    if (contentEl) contentEl.style.display = 'block';

    // اللغة الحالية محفوظة فـ localStorage من script.js
    const lang = localStorage.getItem('selectedLanguage') || 'ar';
    const desc = lang === 'ar' ? product.desc_ar : product.desc_en;

    document.title = `${product.name} - Arduino Store`;

    const imgEl = document.getElementById('pdImage');
    const categoryEl = document.getElementById('pdCategory');
    const nameEl = document.getElementById('pdName');
    const priceEl = document.getElementById('pdPrice');
    const descEl = document.getElementById('pdDesc');
    const qtyValueEl = document.getElementById('pdQtyValue');
    const qtyMinusBtn = document.getElementById('pdQtyMinus');
    const qtyPlusBtn = document.getElementById('pdQtyPlus');
    const addToCartBtn = document.getElementById('pdAddToCartBtn');

    if (imgEl) { imgEl.src = product.img; imgEl.alt = product.name; }
    if (categoryEl) categoryEl.textContent = product.category;
    if (nameEl) nameEl.textContent = product.name;
    if (priceEl) priceEl.textContent = product.price.toLocaleString('en-US') + ' DA';
    if (descEl) descEl.textContent = desc;

    let qty = 1;
    function renderQty() {
        if (qtyValueEl) qtyValueEl.textContent = qty;
    }
    renderQty();

    if (qtyMinusBtn) {
        qtyMinusBtn.addEventListener('click', () => {
            if (qty > 1) qty--;
            renderQty();
        });
    }
    if (qtyPlusBtn) {
        qtyPlusBtn.addEventListener('click', () => {
            qty++;
            renderQty();
        });
    }

    // ==================== زر المفضلة (Wishlist) فصفحة تفاصيل المنتج ====================
    const WISHLIST_KEY = 'arduinoStoreWishlist';
    const pdWishlistBtn = document.getElementById('pdWishlistBtn');

    function getWishlistPD() {
        try {
            return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
        } catch (e) {
            return [];
        }
    }

    function syncWishlistBtnPD() {
        if (!pdWishlistBtn) return;
        const list = getWishlistPD();
        const active = list.some(item => item.id === product.id);
        pdWishlistBtn.classList.toggle('active', active);
        const icon = pdWishlistBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('far', !active);
            icon.classList.toggle('fas', active);
        }
    }

    if (pdWishlistBtn) {
        pdWishlistBtn.dataset.id = product.id;
        pdWishlistBtn.dataset.name = product.name;
        pdWishlistBtn.dataset.price = product.price;
        pdWishlistBtn.dataset.img = product.img;

        syncWishlistBtnPD();

        pdWishlistBtn.addEventListener('click', () => {
            let list = getWishlistPD();
            const existingIndex = list.findIndex(item => item.id === product.id);
            if (existingIndex > -1) {
                list.splice(existingIndex, 1);
            } else {
                list.push({ id: product.id, name: product.name, price: product.price, img: product.img });
            }
            localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
            syncWishlistBtnPD();

            // نطلق حدث خاص باش سكريبت المفضلة (لي فـ script.js) يعاود يرسم الدرج والعداد
            window.dispatchEvent(new CustomEvent('wishlistUpdated'));
        });
    }

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const CART_KEY = 'arduinoStoreCart';
            let cart = [];
            try {
                cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
            } catch (e) {
                cart = [];
            }
            const existing = cart.find(item => item.id === product.id);
            if (existing) {
                existing.qty += qty;
            } else {
                cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty: qty });
            }
            localStorage.setItem(CART_KEY, JSON.stringify(cart));

            // تحديث عداد السلة فالهيدر مباشرة
            const cartCountEl = document.getElementById('cartCount');
            if (cartCountEl) {
                const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
                cartCountEl.textContent = totalQty;
                cartCountEl.classList.add('bump');
                setTimeout(() => cartCountEl.classList.remove('bump'), 200);
            }

            // إعادة رسم محتوى الدرج إلى كان مفتوح مسبقاً (نفس الدالة renderCart كاينة فـ script.js
            // لكن ماشي معروضة عالمياً، فنفتح الدرج مباشرة كإشارة للمستخدم)
            const cartDrawer = document.getElementById('cartDrawer');
            const cartOverlay = document.getElementById('cartOverlay');
            if (cartDrawer && cartOverlay) {
                cartDrawer.classList.add('active');
                cartOverlay.classList.add('active');
                document.body.classList.add('cart-open');
                // نطلق حدث خاص باش سكريبت السلة (لي فـ script.js) يعاود يرسم المحتوى
                window.dispatchEvent(new CustomEvent('cartUpdated'));
            }

            addToCartBtn.classList.add('added');
            setTimeout(() => addToCartBtn.classList.remove('added'), 400);
        });
    }
});