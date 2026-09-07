/* ==========================================
   GOLDEN BEE GÜZELLİK MERKEZİ - JAVASCRIPT & I18N
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    initServiceTabs();
    initMobileMenu();
    initScrollHeader();
    initLanguageSwitcher();
});

/* 1. Translation Dictionary (TR / EN) */
const translations = {
    tr: {
        top_address: "Merkez Mah. Hrant Dink Sok. No:31, Şişli / İstanbul",
        top_hours: "Pzt - Cmt: 09:00 - 20:00",
        top_wa: "WhatsApp",
        header_wa: "WhatsApp",
        brand_sub: "GÜZELLİK MERKEZİ • ADMIRE THE BEAUTY",
        nav_home: "Ana Sayfa",
        nav_services: "Hizmetlerimiz",
        nav_about: "Hakkımızda",
        nav_reviews: "Müşteri Yorumları",
        nav_contact: "İletişim",
        hero_badge: "Şişli Merkez'in Prestijli Güzellik Salonu",
        hero_title: "Güzelliğinize Altın <br><span class=\"gradient-text\">Dokunuşlar</span>",
        hero_desc: "Golden Bee Güzellik Merkezi'nde Protez Tırnak, İpek Kirpik, Cilt Bakımı, Kalıcı Makyaj ve Lazer Epilasyon uygulamalarıyla kendinizi şımartın.",
        hero_btn_wa: "WhatsApp Randevu & Danışma",
        hero_btn_maps: "Google Maps'te Yol Tarifi",
        stat_google_reviews: "Google Harita Yorumları",
        stat_satisfaction: "Kişiye Özel İlgi & Bakım",
        stat_hygiene: "Medikal Hijyen Standartı",
        hero_card_tag: "Gold VIP Bakım Deneyimi",
        hero_card_desc: "Kişiye özel tasarım nail art, hacimli ipek kirpikler ve ışıltılı cilt bakımları.",
        mini_tag_1: "💅 Protez Tırnak",
        mini_tag_2: "👁️ İpek Kirpik",
        mini_tag_3: "❄️ Cilt Bakımı",
        mini_tag_4: "👄 Kalıcı Makyaj",
        badge_google: "Gerçek Danışan Yorumları",
        badge_team: "Uzman & Sertifikalı Kadro",
        services_subtitle: "ÖZEL BAKIM PROTOKOLLERİ",
        services_title: "Hizmetlerimiz",
        services_desc: "Golden Bee kalitesiyle geliştirilmiş estetik ve bakım uygulamalarımızla tanışın.",
        tab_all: "Tümü",
        tab_nails: "Protez Tırnak & Manikür",
        tab_lashes: "İpek Kirpik & Lifting",
        tab_skin: "Cilt Bakımı & Epilasyon",
        tab_makeup: "Kalıcı Makyaj & İncelme",
        badge_popular: "En Popüler",
        badge_special: "Özel İlgi",
        badge_medical: "Medikal",
        badge_trend: "Trend",
        s1_name: "Protez Tırnak & Nail Art",
        s1_info: "Jel ve akrilik sistemlerle kırılmayan, bakımlı ve şık tırnaklar. Kişiye özel el çizimi nail art ve trend tasarımlar.",
        s1_f1: "Medikal Şablon Kurulumu",
        s1_f2: "Sınırsız Nail Art Renk Kataloğu",
        s1_f3: "3-4 Hafta Dayanıklılık Garantisi",
        s2_name: "İpek Kirpik (Klasik, Volume, Mega)",
        s2_info: "Göz yapınıza en uygun kıvrım ve hacimde ipek kirpik uygulamaları. Bakışlarınıza derinlik ve çekicilik katın.",
        s2_f1: "1:1 Klasik & 3D/5D Volume Kirpik",
        s2_f2: "Anti-Alerjenik Özel Yapıştırıcı",
        s2_f3: "Doğal ve Hafif Hissiyat",
        s3_name: "Kirpik Lifting & Kaş Laminasyonu",
        s3_info: "Kendi doğal kirpiklerinize ekstra uzunluk, hacim ve kıvrım kazandıran keratin bakım destekli lifting.",
        s3_f1: "Keratin & Vitamin Kompleksi",
        s3_f2: "6-8 Hafta Kalıcılık",
        s3_f3: "Kaş Şekillendirme & Boyama",
        s4_name: "Hydrafacial & Derin Cilt Bakımı",
        s4_info: "Cildinizi ölü hücrelerden ve siyah noktalardan arındıran, nem ve anti-aging serumlarla ışıltı kazandıran bakım.",
        s4_f1: "Vakumlu Derin Gözenek Temizliği",
        s4_f2: "Led Terapi & Radyofrekans",
        s4_f3: "Anında Işıltılı & Canlı Cilt",
        s5_name: "Lazer Epilasyon (Buz Başlıklı)",
        s5_info: "Acısız, konforlu ve son teknoloji buz başlıklı epilasyon cihazı ile 4 mevsim istenmeyen tüylerden kurtulun.",
        s5_f1: "Acısız ve Soğutmalı Başlık",
        s5_f2: "Tüm Cilt Tiplerine Uygun",
        s5_f3: "Hızlı ve Etkili Seanslar",
        s6_name: "Kalıcı Makyaj & Microblading",
        s6_info: "Doğal kaş görünümü veren Microblading kıl tekniği, canlı Dudak Renklendirme ve Dipliner uygulamaları.",
        s6_f1: "Doğal Organik Pigmentler",
        s6_f2: "Altın Oran Kaş Çizimi",
        s6_f3: "1.5 - 2 Yıl Kalıcılık",
        s7_name: "Bölgesel İncelme & G5 Masajı",
        s7_info: "Selülit giderici, bölgesel yağ yakımını hızlandıran ve vücudu sıkılaştıran profesyonel masaj ve cihazlı bakımlar.",
        s7_f1: "G5 Ritmik Titreşim Teknolojisi",
        s7_f2: "Ödem & Selülit Karşıtı Etki",
        s7_f3: "Sıkılaşma & Dolaşım Hızlandırma",
        s8_name: "Medikal Pedikür & Spa Ayak Bakımı",
        s8_info: "Hijyenik koşullarda batık, nasır ve topuk çatlağı bakımları ile ayaklarınıza hak ettiği estetiği sağlayın.",
        s8_f1: "Medikal Steril Ekipmanlar",
        s8_f2: "Peeling & Nem Banyosu",
        s8_f3: "Kalıcı Oje Seçeneği",
        about_subtitle: "GOLDEN BEE FARKI",
        about_title: "Neden Bizi Tercih Etmelisiniz?",
        about_lead: "Şişli Merkez Mahallesi Hrant Dink Sokak'ta yer alan salonumuzda, güzellik ve bakım standartlarını en üst seviyeye taşıyoruz.",
        feat1_title: "Otoklav Sterilizasyonu & Medikal Hijyen",
        feat1_desc: "Tüm aletlerimiz her danışanımız sonrasında medikal standartlarda sterilize edilmektedir.",
        feat2_title: "Sertifikalı & Uzman Estetisyenler",
        feat2_desc: "Alanında uzman, uluslararası teknik eğitim almış deneyimli kadro ile hizmet veriyoruz.",
        feat3_title: "Premium Kalite Ürünler",
        feat3_desc: "Sadece dermatolojik olarak test edilmiş, orijinal ve yüksek kaliteli dünya markalarını kullanıyoruz.",
        salon_sub_desc: "Şişli Protez Tırnak & İpek Kirpik Stüdyosu",
        day_mon: "Pazartesi:",
        day_tue: "Salı:",
        day_wed: "Çarşamba:",
        day_thu: "Perşembe:",
        day_fri: "Cuma:",
        day_sat: "Cumartesi:",
        day_sun: "Pazar:",
        status_closed: "Kapalı",
        btn_maps_open: "Google Maps'te Aç",
        reviews_subtitle: "MUTLU DANIŞANLARIMIZ",
        reviews_title: "Müşteri Yorumları",
        reviews_desc: "Danışanlarımızın Golden Bee hakkındaki gerçek değerlendirmeleri.",
        rev1_text: "\"Şişli'deki en güler yüzlü ve kaliteli güzellik salonu! Tırnak ve kirpik işlemlerimde her zaman inanılmaz özenliler. Temizlik ve sterilizasyon 10/10.\"",
        rev1_role: "Google Yorumu (5 Yıldız)",
        rev2_text: "\"Hydrafacial cilt bakımı yaptırdım, cildim pamuk gibi oldu ve siyah noktalardan eser kalmadı. İlginiz için çok teşekkür ederim Golden Bee ekibi!\"",
        rev2_role: "Google Yorumu (5 Yıldız)",
        rev3_text: "\"Buz lazer epilasyon seanslarım harika geçiyor, hiç acı hissetmiyorum ve çok hızlı sonuç aldım. Şişli'de kesinlikle tavsiye edeceğim tek salon.\"",
        rev3_role: "Google Yorumu (5 Yıldız)",
        contact_subtitle: "BİZE ULAŞIN",
        contact_title: "İletişim & Konum",
        contact_lead: "Şişli Merkez Mahallesi Hrant Dink Sokak'taki salonumuzda sizleri ağırlamaktan mutluluk duyarız. İletişim ve randevu için bize hemen ulaşın.",
        c_address_title: "Adresimiz",
        c_phone_title: "Telefon Hattımız",
        direct_title: "Doğrudan İletişime Geçin",
        direct_desc: "Sorularınız, fiyat bilgisi ve randevu talepleriniz için aşağıdaki bağlantılardan bize anında ulaşabilirsiniz.",
        btn_wa_direct: "WhatsApp Randevu & Danışma",
        btn_phone_direct: "Telefon İle Hemen Ara (0534 204 96 96)",
        btn_maps_direct: "Google Maps'te Yol Tarifi Al",
        footer_desc: "Şişli Merkez Mahallesi'nin kalbinde kişiye özel güzellik ve estetik bakımları.",
        footer_title_links: "Hızlı Bağlantılar",
        footer_title_services: "Popüler Hizmetler",
        footer_title_social: "İletişim Bilgileri",
        footer_copyright: "© 2026 Golden Bee Güzellik Merkezi. Tüm Hakları Saklıdır. | Şişli İstanbul"
    },
    en: {
        top_address: "Merkez Mah. Hrant Dink Sok. No:31, Şişli / Istanbul",
        top_hours: "Mon - Sat: 09:00 - 20:00",
        top_wa: "WhatsApp",
        header_wa: "WhatsApp",
        brand_sub: "BEAUTY CENTER • ADMIRE THE BEAUTY",
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About Us",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        hero_badge: "Şişli Center's Prestigious Beauty Salon",
        hero_title: "A Golden Touch <br><span class=\"gradient-text\">To Your Beauty</span>",
        hero_desc: "Pamper yourself at Golden Bee Beauty Center with Gel Nails, Lash Extensions, Skincare, Permanent Makeup, and Laser Hair Removal.",
        hero_btn_wa: "WhatsApp Booking & Info",
        hero_btn_maps: "Directions on Google Maps",
        stat_google_reviews: "Google Maps Reviews",
        stat_satisfaction: "Personalized VIP Care",
        stat_hygiene: "Medical Hygiene Standard",
        hero_card_tag: "Gold VIP Beauty Experience",
        hero_card_desc: "Custom hand-crafted nail art, voluminous lashes, and radiant skincare.",
        mini_tag_1: "💅 Gel Nails",
        mini_tag_2: "👁️ Lash Extensions",
        mini_tag_3: "❄️ Skincare",
        mini_tag_4: "👄 Permanent Makeup",
        badge_google: "Real Client Feedback",
        badge_team: "Expert & Certified Team",
        services_subtitle: "EXCLUSIVE BEAUTY PROTOCOLS",
        services_title: "Our Services",
        services_desc: "Explore our tailor-made aesthetic and luxury beauty treatments with Golden Bee quality.",
        tab_all: "All",
        tab_nails: "Nails & Manicure",
        tab_lashes: "Lashes & Lifting",
        tab_skin: "Skincare & Laser",
        tab_makeup: "Permanent Makeup & Body",
        badge_popular: "Most Popular",
        badge_special: "Special Care",
        badge_medical: "Medical",
        badge_trend: "Trending",
        s1_name: "Gel Nails & Nail Art",
        s1_info: "Durable, elegant gel and acrylic nails. Custom hand-drawn nail art and trending designs.",
        s1_f1: "Medical Form Application",
        s1_f2: "Unlimited Nail Art Palette",
        s1_f3: "3-4 Weeks Long-Lasting",
        s2_name: "Eyelash Extensions (Classic, Volume, Mega)",
        s2_info: "Custom lash extensions tailored to your eye shape. Add depth and elegance to your look.",
        s2_f1: "1:1 Classic & 3D/5D Volume",
        s2_f2: "Hypoallergenic Premium Adhesive",
        s2_f3: "Natural & Lightweight Feel",
        s3_name: "Lash Lift & Brow Lamination",
        s3_info: "Keratin-infused lift that adds natural length, volume, and curl to your lashes.",
        s3_f1: "Keratin & Vitamin Complex",
        s3_f2: "6-8 Weeks Duration",
        s3_f3: "Brow Shaping & Tinting",
        s4_name: "Hydrafacial & Deep Skincare",
        s4_info: "Deep pore cleansing, blackhead removal, and skin rejuvenation with hydration serums.",
        s4_f1: "Vortex Pore Cleansing",
        s4_f2: "LED Light Therapy & RF",
        s4_f3: "Instant Glowing & Radiant Skin",
        s5_name: "Ice Laser Hair Removal",
        s5_info: "Painless, comfortable ice-cooling laser hair removal for all seasons.",
        s5_f1: "Painless Cooling Tip",
        s5_f2: "Suitable for All Skin Types",
        s5_f3: "Fast & Effective Sessions",
        s6_name: "Permanent Makeup & Microblading",
        s6_info: "Natural hair-stroke Microblading, vibrant Lip Blush, and Eyeliner pigmentation.",
        s6_f1: "Natural Organic Pigments",
        s6_f2: "Golden Ratio Eyebrow Mapping",
        s6_f3: "1.5 - 2 Years Durability",
        s7_name: "Body Contouring & G5 Massage",
        s7_info: "Cellulite reduction, localized fat burning, and firming body treatments.",
        s7_f1: "G5 Rhythmic Vibration",
        s7_f2: "Anti-Cellulite & Detox Effect",
        s7_f3: "Firming & Circulation Boost",
        s8_name: "Medical Pedicure & Spa Foot Care",
        s8_info: "Hygienic foot care for ingrown nails, calluses, and heel cracks with luxury spa care.",
        s8_f1: "Sterilized Medical Instruments",
        s8_f2: "Peeling & Moisture Bath",
        s8_f3: "Gel Polish Option",
        about_subtitle: "THE GOLDEN BEE DIFFERENCE",
        about_title: "Why Choose Us?",
        about_lead: "In our salon located in Şişli Merkez Mah. Hrant Dink Street, we elevate beauty standards to the highest level.",
        feat1_title: "Autoclave Sterilization & Medical Hygiene",
        feat1_desc: "All instruments are medical-grade sterilized after every client.",
        feat2_title: "Certified & Expert Estheticians",
        feat2_desc: "Our team consists of certified specialists trained in international beauty techniques.",
        feat3_title: "Premium Quality Products",
        feat3_desc: "We exclusively use dermatologically tested, authentic world-class beauty products.",
        salon_sub_desc: "Şişli Gel Nails & Lash Extension Studio",
        day_mon: "Monday:",
        day_tue: "Tuesday:",
        day_wed: "Wednesday:",
        day_thu: "Thursday:",
        day_fri: "Friday:",
        day_sat: "Saturday:",
        day_sun: "Sunday:",
        status_closed: "Closed",
        btn_maps_open: "Open in Google Maps",
        reviews_subtitle: "HAPPY CLIENTS",
        reviews_title: "Client Reviews",
        reviews_desc: "Real feedback from our clients about Golden Bee Beauty Center.",
        rev1_text: "\"The friendliest and highest quality beauty salon in Şişli! Always meticulous with nails and lashes. Hygiene is 10/10.\"",
        rev1_role: "Google Review (5 Stars)",
        rev2_text: "\"Got a Hydrafacial skincare session and my skin felt like silk. Thank you so much Golden Bee team!\"",
        rev2_role: "Google Review (5 Stars)",
        rev3_text: "\"Ice laser hair removal sessions are amazing, totally pain-free and super fast results. Highly recommended in Şişli!\"",
        rev3_role: "Google Review (5 Stars)",
        contact_subtitle: "GET IN TOUCH",
        contact_title: "Contact & Location",
        contact_lead: "We are delighted to welcome you to our salon in Şişli Merkez Mah. Hrant Dink Street. Reach out to us for inquiries and appointments.",
        c_address_title: "Address",
        c_phone_title: "Phone Number",
        direct_title: "Direct Contact",
        direct_desc: "Reach out instantly via the links below for prices, inquiries, and bookings.",
        btn_wa_direct: "WhatsApp Booking & Info",
        btn_phone_direct: "Call Now (0534 204 96 96)",
        btn_maps_direct: "Get Directions on Google Maps",
        footer_desc: "Personalized beauty and aesthetic care in the heart of Şişli Merkez.",
        footer_title_links: "Quick Links",
        footer_title_services: "Popular Services",
        footer_title_social: "Contact Info",
        footer_copyright: "© 2026 Golden Bee Beauty Center. All Rights Reserved. | Şişli Istanbul"
    }
};

/* Current active language */
let currentLang = localStorage.getItem('golden_bee_lang') || 'tr';

function initLanguageSwitcher() {
    const langBtn = document.getElementById('langToggleBtn');
    if (!langBtn) return;

    setLanguage(currentLang);

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        localStorage.setItem('golden_bee_lang', currentLang);
        setLanguage(currentLang);
    });
}

function setLanguage(lang) {
    const langBtn = document.getElementById('langToggleBtn');
    const langTextSpan = langBtn ? langBtn.querySelector('.lang-text') : null;

    if (langTextSpan) {
        langTextSpan.textContent = lang === 'tr' ? 'EN' : 'TR';
    }

    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

/* 2. Service Filter Tabs */
function initServiceTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const serviceCards = document.querySelectorAll('.service-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            serviceCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    });
}

/* 3. Mobile Nav Menu Toggle */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
}

/* 4. Sticky Header Scroll Effect */
function initScrollHeader() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
            header.style.padding = '12px 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '16px 0';
        }
    });
}
