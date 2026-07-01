document.addEventListener("DOMContentLoaded", () => {
  // ==================== 1. نظام اللغات (مضبوط نيشَان ومعالج الألوان) ====================
    const translations = {
        ar: {
            doc_title: "متجر أردوينو الإلكتروني - Houssam HK",
            logo: '<span style="color: #007a87; font-weight: 550; font-size: 24px;">أردوينو</span> <span style="color: #e67e22; font-weight: 700; font-size: 24px;">ستور</span>',
            nav_home: "الرئيسية",
            nav_community: 'مجتمع <i class="fas fa-chevron-down nav-arrow"></i>',
            nav_projects: 'المشاريع <i class="fas fa-chevron-down nav-arrow"></i>',
            nav_shop: "تسوق",
            intro_title: 'أردوينو <span style="color: #e67e22;">ستور</span>',
            intro_desc: "منصتك الأولى للحصول على أفضل القطع الإلكترونية والمتحكمات الذكية لبناء مشاريعك البرمجية بكل سهولة.",
            intro_btn: "⌄ استمر",
            hero_title: "ابدأ رحلة الابتكار مع أفضل القطع الإلكترونية",
            hero_desc: "نوفر لك لوحات Arduino الأصلي ومكوناتها لتطوير مشاريعك البرمجية بكل سهولة ومن مكان واحد.",
            hero_btn: "تسوّق الآن",
            products_title: "منتجاتنا المتميزة",
            products_desc: "أفضل القطع المختارة لمشاريعك القادمة",
            products_view_all: "تصفح كل المنتجات",
            form_title: "راسلنا",
            form_name: "الاسم",
            form_email: "البريد الإلكتروني",
            form_message: "رسالتك",
            form_submit: "إرسال",
            footer_about_title: "أردوينو ستور",
            footer_about_desc: "منصتك الأولى للحصول على أفضل القطع الإلكترونية والمتحكمات الذكية لبناء وتطوير مشاريعك البرمجية بكل سهولة.",
            footer_links_title: "روابط سريعة",
            footer_link_products: "المنتجات",
            footer_contact_title: "تواصل معنا",
            footer_phone: '<i class="fas fa-phone-alt"></i> <a href="tel:+213670346089" style="direction: ltr; display: inline-block;">+213 670 34 60 89</a>',
            footer_support: "دعم فني متواصل 24/7",
            footer_social_title: "تابعنا على منصاتنا",
            footer_social_desc: "اشترك وماتنساش تتابعنا على حساباتنا الرسمية:",
            footer_rights: "أردوينو ستور - المطور Houssam HK. جميع الحقوق محفوظة.",
            proj_weather: '<i class="fas fa-cloud-sun"></i> weather situation',
            proj_thermometer: '<i class="fas fa-thermometer-half"></i> LCD thermometer',
            proj_blinking: '<i class="fas fa-bolt"></i> Blinking LED',
            proj_alarm: '<i class="fas fa-bell"></i> Motion alarm',
            proj_robot: '<i class="fas fa-car"></i> Robot car',
            comm_web: '<i class="fas fa-code"></i> web developer',
            comm_app: '<i class="fas fa-mobile-alt"></i> app developer',
            comm_ai: '<i class="fas fa-robot"></i> Ai automation',
            comm_workshops: '<i class="fas fa-chalkboard-teacher"></i> workshops',
            comm_github: '<i class="fab fa-github"></i> github',
            cart_title: "سلة المشتريات",
            cart_empty: "السلة فارغة حالياً",
            cart_total: "المجموع",
            cart_checkout: "إتمام الطلب عبر واتساب"
        },
        en: {
            doc_title: "Arduino Store - Houssam HK",
            logo: '<span style="color: #007a87; font-weight: 550; font-size: 24px;">Arduino</span> <span style="color: #e67e22; font-weight: 700; font-size: 24px;">Store</span>',
            nav_home: "Home",
            nav_community: 'Community <i class="fas fa-chevron-down nav-arrow"></i>',
            nav_projects: 'Projects <i class="fas fa-chevron-down nav-arrow"></i>',
            nav_shop: "Shop",
            intro_title: 'Arduino <span style="color: #e67e22;">Store</span>',
            intro_desc: "Your premier platform to get the best electronic parts and smart microcontrollers to build your software projects with ease.",
            intro_btn: "⌄ Continue",
            hero_title: "Start your innovation journey with the best electronic components",
            hero_desc: "We provide original Arduino boards and components to develop your programming projects easily and all in one place.",
            hero_btn: "Shop Now",
            products_title: "Our Featured Products",
            products_desc: "The best parts hand-picked for your next project",
            products_view_all: "Browse All Products",
            form_title: "Contact Us",
            form_name: "Name",
            form_email: "Email",
            form_message: "Your Message",
            form_submit: "Send",
            footer_about_title: "Arduino Store",
            footer_about_desc: "Your premier platform to get the best electronic parts and smart microcontrollers to build and develop your software projects with ease.",
            footer_links_title: "Quick Links",
            footer_link_products: "Products",
            footer_contact_title: "Contact Us",
            footer_phone: '<i class="fas fa-phone-alt"></i> <a href="tel:+213670346089" style="direction: ltr; display: inline-block;">+213 670 34 60 89</a>',
            footer_support: "Continuous technical support 24/7",
            footer_social_title: "Follow Us On Our Platforms",
            footer_social_desc: "Subscribe and don't forget to follow our official accounts:",
            footer_rights: "Arduino Store - Developed by Houssam HK. All rights reserved.",
            proj_weather: '<i class="fas fa-cloud-sun"></i> weather situation',
            proj_thermometer: '<i class="fas fa-thermometer-half"></i> LCD thermometer',
            proj_blinking: '<i class="fas fa-bolt"></i> Blinking LED',
            proj_alarm: '<i class="fas fa-bell"></i> Motion alarm',
            proj_robot: '<i class="fas fa-car"></i> Robot car',
            comm_web: '<i class="fas fa-code"></i> web developer',
            comm_app: '<i class="fas fa-mobile-alt"></i> app developer',
            comm_ai: '<i class="fas fa-robot"></i> Ai automation',
            comm_workshops: '<i class="fas fa-chalkboard-teacher"></i> workshops',
            comm_github: '<i class="fab fa-github"></i> github',
            cart_title: "Shopping Cart",
            cart_empty: "Your cart is empty",
            cart_total: "Total",
            cart_checkout: "Checkout via WhatsApp"
        }
    };

   const langToggleBtn = document.getElementById('lang-toggle-btn');
   let currentLang = localStorage.getItem('selectedLanguage') || 'ar';

   function changeLanguage(lang) {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
                element.setAttribute('placeholder', translations[lang][key]);
            }
        });

        if (typeof translations !== 'undefined' && translations[lang] && translations[lang]['doc_title']) {
            document.title = translations[lang]['doc_title'];
        }

        if (langToggleBtn) {
            langToggleBtn.textContent = lang === 'ar' ? 'English' : 'العربية';
        }
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            localStorage.setItem('selectedLanguage', currentLang);
            changeLanguage(currentLang);
        });
    }

    // تشغيل اللغة عند تحميل الصفحة ديركت
    changeLanguage(currentLang);

    // ==================== 2. تفاعل حركة الـ Parallax المعدل والمستقر ====================
    const hero = document.querySelector('.hero-section');
    const bgContainer = document.getElementById('heroParallaxBg');

    if (hero && bgContainer) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const xOffset = (mouseX / rect.width) - 0.5;
            const yOffset = (mouseY / rect.height) - 0.5;

            const moveX = xOffset * -35; 
            const moveY = yOffset * -35;
            const rotateX = yOffset * 4;  
            const rotateY = xOffset * -4; 

            bgContainer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        hero.addEventListener('mouseleave', () => {
            bgContainer.style.transition = 'transform 0.8s ease';
            bgContainer.style.transform = 'translate3d(0px, 0px, 0) rotateX(0deg) rotateY(0deg)';
        });

        hero.addEventListener('mouseenter', () => {
            bgContainer.style.transition = 'transform 0.1s ease-out';
        });

        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled <= hero.offsetHeight) {
                hero.style.backgroundPosition = `center ${scrolled * 0.4}px`;
            }
        });
    }

    // ==================== 3. قائمة الموبايل (Hamburger Menu) ====================
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const mainNav = document.getElementById('mainNav');

    if (menuToggleBtn && mainNav) {
        menuToggleBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // فتح/سد القوائم الفرعية (مجتمع / المشاريع) بالضغط بدل الـ hover فالموبايل
        document.querySelectorAll('.has-mega-menu > a').forEach((link) => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 900) {
                    e.preventDefault();
                    link.parentElement.classList.toggle('open');
                }
            });
        });

        // سد القائمة كي تضغط برا منها
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 900 &&
                mainNav.classList.contains('active') &&
                !mainNav.contains(e.target) &&
                e.target !== menuToggleBtn &&
                !menuToggleBtn.contains(e.target)) {
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // ==================== 4. سكرول ناعم يدوي (يصلح مشكل القفزة المفاجئة فـ Safari) ====================
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.length > 1) {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // ملاحظة: ما نبدلوش الـ URL hash هنا عمداً، باش ما يصرى قفزة مفاجئة كي تعاود تكرر الصفحة
                }
            }
        });
    });

    // إذا كانت الصفحة تحملت وعندها hash فالـ URL (مثلا #main-hero)، نمسحوه باش مايبقاش يأثر على الإعادة
    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // ==================== 5. نظام سلة المشتريات (Cart) ====================
    const CART_KEY = 'arduinoStoreCart';
    const WHATSAPP_NUMBER = '213670346089'; // بلا + وبلا صفر البداية

    function getCart() {
        try {
            return JSON.parse(localStorage.getItem(CART_KEY)) || [];
        } catch (e) {
            return [];
        }
    }

    function saveCart(cart) {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }

    function formatPrice(num) {
        return num.toLocaleString('en-US') + ' DA';
    }

    function addToCart(product) {
        const cart = getCart();
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...product, qty: 1 });
        }
        saveCart(cart);
        renderCart();
        bumpCartBadge();
    }

    function updateQty(id, delta) {
        const cart = getCart();
        const item = cart.find(i => i.id === id);
        if (!item) return;
        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(id);
            return;
        }
        saveCart(cart);
        renderCart();
    }

    function removeFromCart(id) {
        let cart = getCart();
        cart = cart.filter(i => i.id !== id);
        saveCart(cart);
        renderCart();
    }

    function bumpCartBadge() {
        const badge = document.getElementById('cartCount');
        if (!badge) return;
        badge.classList.add('bump');
        setTimeout(() => badge.classList.remove('bump'), 200);
    }

    function renderCart() {
        const cart = getCart();
        const countEl = document.getElementById('cartCount');
        const itemsContainer = document.getElementById('cartItemsContainer');
        const totalEl = document.getElementById('cartTotalPrice');
        if (!countEl || !itemsContainer || !totalEl) return;

        const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
        countEl.textContent = totalQty;

        if (cart.length === 0) {
            const emptyText = (currentLang === 'ar') ? 'السلة فارغة حالياً' : 'Your cart is empty';
            itemsContainer.innerHTML = `<p class="cart-empty-msg">${emptyText}</p>`;
            totalEl.textContent = formatPrice(0);
            return;
        }

        let total = 0;
        itemsContainer.innerHTML = cart.map(item => {
            const lineTotal = item.price * item.qty;
            total += lineTotal;
            return `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">${formatPrice(lineTotal)}</div>
                        <div class="cart-item-qty-controls">
                            <button class="cart-qty-btn cart-qty-minus" data-id="${item.id}">−</button>
                            <span>${item.qty}</span>
                            <button class="cart-qty-btn cart-qty-plus" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" data-id="${item.id}" title="حذف"><i class="fas fa-trash"></i></button>
                </div>
            `;
        }).join('');

        totalEl.textContent = formatPrice(total);
    }

    // ربط أزرار "أضف إلى السلة" فكل المنتجات
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const { id, name, price, img } = btn.dataset;
            if (!id) return; // زر بلا بيانات منتج (احتياط)
            addToCart({ id, name, price: parseInt(price, 10) || 0, img });

            // تأثير بصري صغير على الزر نفسه
            btn.classList.add('added');
            setTimeout(() => btn.classList.remove('added'), 400);
        });
    });

    // فتح/غلق درج السلة
    const cartToggleBtn = document.getElementById('cartToggleBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartCloseBtn = document.getElementById('cartCloseBtn');

    function openCart() {
        if (!cartDrawer || !cartOverlay) return;
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.classList.add('cart-open');
    }

    function closeCart() {
        if (!cartDrawer || !cartOverlay) return;
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.classList.remove('cart-open');
    }

    if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    // أزرار +/- والحذف جوا السلة (event delegation)
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (e) => {
            const plusBtn = e.target.closest('.cart-qty-plus');
            const minusBtn = e.target.closest('.cart-qty-minus');
            const removeBtn = e.target.closest('.cart-item-remove');

            if (plusBtn) updateQty(plusBtn.dataset.id, 1);
            if (minusBtn) updateQty(minusBtn.dataset.id, -1);
            if (removeBtn) removeFromCart(removeBtn.dataset.id);
        });
    }

    // زر إتمام الطلب عبر واتساب
    const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');
    if (cartCheckoutBtn) {
        cartCheckoutBtn.addEventListener('click', () => {
            const cart = getCart();
            if (cart.length === 0) return;

            let message = (currentLang === 'ar') ? 'مرحباً، بغيت نطلب:%0A' : 'Hello, I would like to order:%0A';
            let total = 0;
            cart.forEach(item => {
                const lineTotal = item.price * item.qty;
                total += lineTotal;
                message += `- ${item.name} x${item.qty} = ${formatPrice(lineTotal)}%0A`;
            });
            message += (currentLang === 'ar') ? `%0Aالمجموع الكلي: ${formatPrice(total)}` : `%0ATotal: ${formatPrice(total)}`;

            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
        });
    }

    // عرض السلة عند تحميل الصفحة
    renderCart();
});