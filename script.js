document.addEventListener("DOMContentLoaded", function() {
    const menuToggleBtn = document.getElementById("menuToggleBtn");
    const mainNav = document.getElementById("mainNav");

    if (menuToggleBtn && mainNav) {
        menuToggleBtn.addEventListener("click", function() {
            mainNav.classList.toggle("active");
            
            // تبديل الأيقونة من 3 خطوط إلى علامة X عند الفتح
            const icon = menuToggleBtn.querySelector("i");
            if (mainNav.classList.contains("active")) {
                icon.className = "fas fa-times";
            } else {
                icon.className = "fas fa-bars";
            }
        });
    }
});
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
            hero_title: "ابدأ رحلة الابتكار مع أفضل القطع الإلكترونية",
            hero_desc: "نوفر لك لوحات Arduino الأصلي ومكوناتها لتطوير مشاريعك البرمجية بكل سهولة ومن مكان واحد.",
            hero_btn: "تسوّق الآن",
            products_title: "منتجاتنا المتميزة",
            products_desc: "القطع الإلكترونية متوفرة وقادمة قريباً...",
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
            comm_github: '<i class="fab fa-github"></i> github'
        },
        en: {
            doc_title: "Arduino Store - Houssam HK",
            logo: '<span style="color: #007a87; font-weight: 550; font-size: 24px;">Arduino</span> <span style="color: #e67e22; font-weight: 700; font-size: 24px;">Store</span>',
            nav_home: "Home",
            nav_community: 'Community <i class="fas fa-chevron-down nav-arrow"></i>',
            nav_projects: 'Projects <i class="fas fa-chevron-down nav-arrow"></i>',
            nav_shop: "Shop",
            hero_title: "Start your innovation journey with the best electronic components",
            hero_desc: "We provide original Arduino boards and components to develop your programming projects easily and all in one place.",
            hero_btn: "Shop Now",
            products_title: "Our Featured Products",
            products_desc: "Electronic components available and coming soon...",
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
            comm_github: '<i class="fab fa-github"></i> github'
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
});