/* ============================================================
   M.E.C – שירלי ימין | קוסמטיקה רפואית מתקדמת
   Core Interactions, Navigation, E-Commerce & Modals
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const CART_STORAGE_KEY = 'mec_cart';

    // --- Dynamic UI Injection (Cart Drawer & Modals) ---
    const injectGlobalUI = () => {
        if (!document.querySelector('.cart-drawer')) {
            const uiHTML = `
                <div class="cart-drawer-overlay" onclick="closeCart()"></div>
                <div class="cart-drawer" aria-label="סל קניות">
                    <div class="cart-header">
                        <h2>סל הקניות שלי</h2>
                        <button class="cart-close" onclick="closeCart()" aria-label="סגור סל קניות"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="cart-body"></div>
                    <div class="cart-footer">
                        <div class="cart-total-row">
                            <span>סה"כ לתשלום:</span>
                            <span class="cart-total-value">₪0</span>
                        </div>
                        <button class="btn btn-wa checkout-btn" onclick="sendOrderViaWhatsApp()">
                            <i class="fab fa-whatsapp"></i> שליחת הזמנה ישירות לוואטסאפ
                        </button>
                    </div>
                </div>
                <div class="modal-overlay" onclick="event.target === this && closeProductModal()" aria-modal="true" role="dialog">
                    <div class="modal-container"></div>
                </div>
            `;
            const div = document.createElement('div');
            div.innerHTML = uiHTML;
            while (div.firstChild) document.body.appendChild(div.firstChild);
        }

        // Floating WhatsApp button if not present
        if (!document.querySelector('.floating-wa')) {
            const floatWA = document.createElement('a');
            floatWA.href = 'https://wa.me/972544410760?text=' + encodeURIComponent('היי שירלי, אשמח להתייעץ איתך בנוגע לטיפולים או מוצרים.');
            floatWA.className = 'floating-wa';
            floatWA.target = '_blank';
            floatWA.rel = 'noopener noreferrer';
            floatWA.setAttribute('aria-label', 'צרי קשר בוואטסאפ');
            floatWA.innerHTML = `
                <div class="floating-wa-icon"><i class="fab fa-whatsapp"></i></div>
                <span>ייעוץ אישי בוואטסאפ</span>
            `;
            document.body.appendChild(floatWA);
        }

        // Toast container
        if (!document.querySelector('.toast-container')) {
            const toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container';
            document.body.appendChild(toastContainer);
        }

        // Floating Accessibility Button & Panel (WCAG 2.1 AA)
        if (!document.querySelector('#accessibilityBtn')) {
            const a11yHTML = `
                <button type="button" class="floating-accessibility-btn" id="accessibilityBtn" aria-label="פתח תפריט נגישות" aria-haspopup="dialog" aria-expanded="false" title="תפריט נגישות">
                    <i class="fas fa-universal-access" aria-hidden="true"></i>
                </button>
                <div class="accessibility-overlay" id="accessibilityOverlay" onclick="closeAccessibilityModal()" aria-hidden="true"></div>
                <div class="accessibility-panel" id="accessibilityPanel" role="dialog" aria-modal="true" aria-labelledby="a11yTitle" aria-hidden="true">
                    <div class="a11y-header">
                        <div class="a11y-header-title">
                            <i class="fas fa-universal-access" aria-hidden="true"></i>
                            <h2 id="a11yTitle">תפריט נגישות</h2>
                        </div>
                        <button type="button" class="a11y-close-btn" id="a11yCloseBtn" aria-label="סגור תפריט נגישות" onclick="closeAccessibilityModal()">
                            <i class="fas fa-times" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div class="a11y-body">
                        <div class="a11y-tool-group">
                            <span class="a11y-tool-label">התאמת גודל טקסט:</span>
                            <div class="a11y-btn-row">
                                <button type="button" class="a11y-btn" id="a11yFontIncrease" aria-label="הגדל גודל טקסט" onclick="changeFontSize(1)">
                                    <i class="fas fa-plus" aria-hidden="true"></i> הגדל
                                </button>
                                <button type="button" class="a11y-btn" id="a11yFontDecrease" aria-label="הקטן גודל טקסט" onclick="changeFontSize(-1)">
                                    <i class="fas fa-minus" aria-hidden="true"></i> הקטן
                                </button>
                                <button type="button" class="a11y-btn" id="a11yFontReset" aria-label="אפס גודל טקסט לברירת מחדל" onclick="changeFontSize(0)">
                                    <i class="fas fa-redo" aria-hidden="true"></i> רגיל
                                </button>
                            </div>
                            <div class="a11y-scale-indicator" id="a11yScaleIndicator" aria-live="polite">גודל נוכחי: 100%</div>
                        </div>

                        <div class="a11y-grid">
                            <button type="button" class="a11y-card-toggle" id="a11yContrast" aria-pressed="false" onclick="toggleAccessibilityFeature('highContrast')">
                                <div class="a11y-card-icon"><i class="fas fa-adjust" aria-hidden="true"></i></div>
                                <span class="a11y-card-title">ניגודיות גבוהה</span>
                                <span class="a11y-card-status" id="status-highContrast">כבוי</span>
                            </button>

                            <button type="button" class="a11y-card-toggle" id="a11yGrayscale" aria-pressed="false" onclick="toggleAccessibilityFeature('grayscale')">
                                <div class="a11y-card-icon"><i class="fas fa-tint-slash" aria-hidden="true"></i></div>
                                <span class="a11y-card-title">גווני אפור</span>
                                <span class="a11y-card-status" id="status-grayscale">כבוי</span>
                            </button>

                            <button type="button" class="a11y-card-toggle" id="a11yHighlightLinks" aria-pressed="false" onclick="toggleAccessibilityFeature('highlightLinks')">
                                <div class="a11y-card-icon"><i class="fas fa-link" aria-hidden="true"></i></div>
                                <span class="a11y-card-title">הדגשת קישורים</span>
                                <span class="a11y-card-status" id="status-highlightLinks">כבוי</span>
                            </button>

                            <button type="button" class="a11y-card-toggle" id="a11yReadableFont" aria-pressed="false" onclick="toggleAccessibilityFeature('readableFont')">
                                <div class="a11y-card-icon"><i class="fas fa-font" aria-hidden="true"></i></div>
                                <span class="a11y-card-title">גופן קריא</span>
                                <span class="a11y-card-status" id="status-readableFont">כבוי</span>
                            </button>
                        </div>

                        <button type="button" class="a11y-reset-all-btn" onclick="resetAccessibilitySettings()" aria-label="איפוס כל הגדרות הנגישות לברירת המחדל">
                            <i class="fas fa-undo" aria-hidden="true"></i> איפוס כל ההגדרות
                        </button>

                        <div class="a11y-statement-note">
                            אתר זה מונגש בהתאם לתקן ת"י 5568 והנחיות WCAG 2.1 ברמת AA.
                        </div>
                    </div>
                </div>
            `;
            const a11yContainer = document.createElement('div');
            a11yContainer.innerHTML = a11yHTML;
            while (a11yContainer.firstChild) document.body.appendChild(a11yContainer.firstChild);

            document.getElementById('accessibilityBtn')?.addEventListener('click', (e) => {
                e.preventDefault();
                openAccessibilityModal();
            });
        }
    };

    injectGlobalUI();

    // --- Header Scroll Effect & Dynamic Offset Sync ---
    const headerWrapper = document.querySelector('.header-wrapper');
    const updateHeaderState = () => {
        if (headerWrapper) {
            if (window.scrollY > 25) {
                headerWrapper.classList.add('scrolled');
            } else {
                headerWrapper.classList.remove('scrolled');
            }
            document.documentElement.style.setProperty('--header-actual-height', headerWrapper.offsetHeight + 'px');
        }
    };
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState, { passive: true });
    updateHeaderState();

    // --- Mobile Drawer Logic (RTL Slide-Out & Scroll Lock) ---
    const drawer = document.querySelector('.mobile-nav-drawer');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const menuTrigger = document.querySelector('.menu-trigger');
    const drawerClose = document.querySelector('.drawer-close');

    const closeMobileMenu = () => {
        if (!drawer || !overlay) return;
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        document.body.classList.remove('menu-drawer-open');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    };

    const openMobileMenu = () => {
        if (!drawer || !overlay) return;
        drawer.classList.add('open');
        overlay.classList.add('open');
        document.body.classList.add('menu-drawer-open');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    };

    const toggleMobileMenu = () => {
        if (drawer?.classList.contains('open')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    };

    window.closeMobileNav = closeMobileMenu;
    window.openMobileNav = openMobileMenu;

    menuTrigger?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMobileMenu();
    });

    menuTrigger?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMobileMenu();
        }
    });

    drawerClose?.addEventListener('click', (e) => {
        e.preventDefault();
        closeMobileMenu();
    });

    overlay?.addEventListener('click', () => closeMobileMenu());

    // Auto-close drawer on tapping navigation links or footer links
    document.querySelectorAll('.drawer-nav a, .drawer-footer a').forEach(link => {
        link.addEventListener('click', () => {
            if (drawer?.classList.contains('open')) closeMobileMenu();
        });
    });

    // --- Reveal On Scroll Animations ---
    const observerOptions = {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const observeReveals = () => {
        document.querySelectorAll('.reveal:not(.active)').forEach(el => revealObserver.observe(el));
    };
    observeReveals();
    window.refreshReveal = observeReveals;

    // --- Smooth Scrolling for Internal Links ---
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 90;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = target.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Toast Notifications ---
    window.showToast = (message) => {
        const toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
        toastContainer.appendChild(toast);

        requestAnimationFrame(() => toast.classList.add('show'));

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, 3200);
    };

    // --- Cart & E-Commerce Logic ---
    const getCart = () => {
        try {
            return JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
        } catch (e) {
            return [];
        }
    };

    const saveCart = (cart) => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        updateCartUI();
    };

    window.addToCart = (product) => {
        if (!product || !product.id) return;
        const cart = getCart();
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            const imgPath = product.image ? (product.image.startsWith('http') || product.image.startsWith('images/') ? product.image : ('images/products/' + product.image)) : '';
            cart.push({
                id: product.id,
                name: product.name,
                price: Number(product.price) || 0,
                brand: product.brand || '',
                volume: product.volume || '',
                image: imgPath,
                quantity: 1
            });
        }
        saveCart(cart);
        window.showToast(`"${product.name}" נוסף לסל הקניות`);
    };

    window.removeFromCart = (productId) => {
        let cart = getCart();
        cart = cart.filter(item => item.id !== productId);
        saveCart(cart);
    };

    window.updateQuantity = (productId, delta) => {
        const cart = getCart();
        const item = cart.find(i => i.id === productId);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                removeFromCart(productId);
                return;
            }
            saveCart(cart);
        }
    };

    window.getTotalCartItems = () => {
        return getCart().reduce((acc, item) => acc + (item.quantity || 1), 0);
    };

    const updateCartUI = () => {
        const totalItems = window.getTotalCartItems();
        document.querySelectorAll('#cartCount').forEach(el => {
            el.textContent = totalItems;
        });
        renderCartDrawer();
    };

    const renderCartDrawer = () => {
        const cart = getCart();
        const drawerBody = document.querySelector('.cart-body');
        const drawerTotal = document.querySelector('.cart-total-value');
        if (!drawerBody) return;

        if (cart.length === 0) {
            drawerBody.innerHTML = `
                <div class="cart-empty">
                    <i class="fas fa-shopping-bag"></i>
                    <p style="font-size:1.1rem; color:var(--text-main); font-weight:500; margin-bottom:8px;">סל הקניות שלך ריק כרגע</p>
                    <p style="font-size:0.9rem;">מוזמנת לעיין במגוון מוצרי הטיפוח המובילים בחנות</p>
                    <a href="shop.html" class="btn btn-primary" onclick="closeCart()" style="margin-top:24px;">מעבר לחנות המוצרים</a>
                </div>
            `;
            if (drawerTotal) drawerTotal.textContent = '₪0';
            return;
        }

        let html = '';
        let total = 0;
        cart.forEach(item => {
            const subtotal = (item.price || 0) * (item.quantity || 1);
            total += subtotal;
            const fallbackSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23FAF8F4'/%3E%3Ctext x='40' y='44' text-anchor='middle' font-family='sans-serif' font-size='10' fill='%23C5A675'%3EM.E.C%3C/text%3E%3C/svg%3E`;
            const imgSrc = item.image || fallbackSvg;

            html += `
                <div class="cart-item">
                    <div class="cart-item-img">
                        <img src="${imgSrc}" alt="${item.name}" onerror="this.onerror=null;this.src='${fallbackSvg}'">
                    </div>
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">₪${subtotal} <span style="font-size:0.8rem; font-weight:400; color:var(--text-light);">(₪${item.price} ליחידה)</span></div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)" aria-label="הפחת כמות"><i class="fas fa-minus"></i></button>
                        <span class="qty-num">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)" aria-label="הוסף כמות"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
            `;
        });
        drawerBody.innerHTML = html;
        if (drawerTotal) drawerTotal.textContent = `₪${total}`;
    };

    window.openCart = () => {
        document.querySelector('.cart-drawer')?.classList.add('open');
        document.querySelector('.cart-drawer-overlay')?.classList.add('open');
        document.body.style.overflow = 'hidden';
        renderCartDrawer();
    };

    window.closeCart = () => {
        document.querySelector('.cart-drawer')?.classList.remove('open');
        document.querySelector('.cart-drawer-overlay')?.classList.remove('open');
        document.body.style.overflow = '';
    };

    window.sendOrderViaWhatsApp = () => {
        const cart = getCart();
        if (!cart.length) {
            window.showToast?.('יש להוסיף מוצרים לסל לפני שליחת ההזמנה');
            return;
        }
        let total = 0;
        const lines = cart.map(item => {
            const subtotal = item.price * item.quantity;
            total += subtotal;
            return `• ${item.name} x${item.quantity} — ₪${subtotal}`;
        });
        const message = `היי שירלי, אני מעוניינת להזמין מהאתר:\n\n${lines.join('\n')}\n\nסה"כ לתשלום: ₪${total}\n\nאשמח לקבל פרטים לגבי תשלום ואיסוף/משלוח.\n\n(נשלח דרך אתר M.E.C – שירלי ימין)`;
        const url = `https://wa.me/972544410760?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    // --- Product Details Modal ---
    window.openProductModal = (id) => {
        const list = (typeof products !== 'undefined' && products) ? products : (window.products || []);
        if (!list.length) return;
        const product = list.find(p => p.id === id);
        if (!product) return;

        const modal = document.querySelector('.modal-overlay');
        const container = document.querySelector('.modal-container');
        if (!modal || !container) return;

        const fallbackSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23FAF8F4'/%3E%3Ctext x='150' y='155' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23C5A675'%3EM.E.C%3C/text%3E%3C/svg%3E`;
        const baseImg = product.image ? (product.image.startsWith('http') || product.image.startsWith('images/') ? product.image : ('images/products/' + product.image)) : fallbackSvg;

        container.innerHTML = `
            <button class="modal-close" onclick="closeProductModal()" aria-label="סגור פרטי מוצר"><i class="fas fa-times"></i></button>
            <div class="modal-content-inner">
                <div class="modal-image-col">
                    <img src="${baseImg}" alt="${product.name}" onerror="this.onerror=null;this.src='${fallbackSvg}'">
                </div>
                <div class="modal-info-col">
                    <span class="modal-brand">${product.brand || 'M.E.C'}</span>
                    <h2 class="modal-title">${product.name}</h2>
                    ${product.volume ? `<div style="font-size:0.9rem; color:var(--text-light); margin-bottom:10px;">תכולה: ${product.volume}</div>` : ''}
                    <span class="modal-price">₪${product.price}</span>
                    
                    <div class="modal-section">
                        <span class="modal-section-title">תיאור המוצר</span>
                        <p class="modal-section-content">${product.fullDescription || product.description || 'מוצר מקצועי לטיפוח ושיקום העור.'}</p>
                    </div>
                    
                    ${product.usage ? `
                        <div class="modal-section">
                            <span class="modal-section-title">הוראות שימוש</span>
                            <p class="modal-section-content">${product.usage}</p>
                        </div>
                    ` : ''}
                    
                    ${product.ingredients ? `
                        <div class="modal-section">
                            <span class="modal-section-title">מרכיבים עיקריים</span>
                            <p class="modal-section-content">${product.ingredients}</p>
                        </div>
                    ` : ''}
                    
                    <div class="modal-footer" style="margin-top:32px;">
                        <button class="btn btn-primary" onclick="addToCartById('${product.id}')" style="width:100%; padding:15px;">
                            <i class="fas fa-cart-plus"></i> הוספה לסל הקניות
                        </button>
                    </div>
                </div>
            </div>
        `;

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    window.closeProductModal = () => {
        document.querySelector('.modal-overlay')?.classList.remove('open');
        document.body.style.overflow = '';
    };

    window.addToCartById = (id) => {
        const list = (typeof products !== 'undefined' && products) ? products : (window.products || []);
        if (!list.length) return;
        const product = list.find(p => p.id === id);
        if (product) addToCart(product);
    };

    // Keyboard Accessibility (Escape key)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.querySelector('.accessibility-panel.open')) {
                closeAccessibilityModal();
            } else if (document.querySelector('.modal-overlay.open')) {
                closeProductModal();
            } else if (document.querySelector('.cart-drawer.open')) {
                closeCart();
            } else if (drawer?.classList.contains('open')) {
                closeMobileMenu();
            }
        }
    });

    // Cart Button Listeners on All Pages
    document.querySelectorAll('.cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openCart();
        });
    });

    // ============================================================
    // Accessibility Controller (WCAG 2.1 AA)
    // ============================================================
    const A11Y_STORAGE_KEY = 'mec_a11y_settings';
    const defaultA11ySettings = {
        fontScale: 0,
        highContrast: false,
        grayscale: false,
        highlightLinks: false,
        readableFont: false
    };

    const getA11ySettings = () => {
        try {
            const saved = localStorage.getItem(A11Y_STORAGE_KEY);
            return saved ? { ...defaultA11ySettings, ...JSON.parse(saved) } : { ...defaultA11ySettings };
        } catch (e) {
            return { ...defaultA11ySettings };
        }
    };

    const saveA11ySettings = (settings) => {
        try {
            localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(settings));
        } catch (e) {}
    };

    let lastA11yFocusElement = null;

    const applyA11ySettings = (settings) => {
        const root = document.documentElement;

        // 1. Font Scale (0: 100%, 1: 110%, 2: 120%, 3: 130%)
        const scale = Number(settings.fontScale) || 0;
        if (scale > 0) {
            root.setAttribute('data-a11y-scale', String(scale));
        } else {
            root.removeAttribute('data-a11y-scale');
        }

        const indicator = document.getElementById('a11yScaleIndicator');
        if (indicator) {
            const percent = 100 + scale * 10;
            indicator.textContent = `גודל נוכחי: ${percent}%`;
        }

        // 2. High Contrast Mode
        root.classList.toggle('a11y-high-contrast', !!settings.highContrast);
        updateA11yCardState('a11yContrast', 'status-highContrast', !!settings.highContrast);

        // 3. Grayscale Mode
        root.classList.toggle('a11y-grayscale', !!settings.grayscale);
        updateA11yCardState('a11yGrayscale', 'status-grayscale', !!settings.grayscale);

        // 4. Highlight Links Mode
        root.classList.toggle('a11y-highlight-links', !!settings.highlightLinks);
        updateA11yCardState('a11yHighlightLinks', 'status-highlightLinks', !!settings.highlightLinks);

        // 5. Readable Font Mode
        root.classList.toggle('a11y-readable-font', !!settings.readableFont);
        updateA11yCardState('a11yReadableFont', 'status-readableFont', !!settings.readableFont);
    };

    const updateA11yCardState = (btnId, statusId, isActive) => {
        const btn = document.getElementById(btnId);
        const status = document.getElementById(statusId);
        if (btn) {
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        }
        if (status) {
            status.textContent = isActive ? 'פעיל' : 'כבוי';
        }
    };

    window.changeFontSize = (delta) => {
        const settings = getA11ySettings();
        if (delta === 0) {
            settings.fontScale = 0;
        } else if (delta > 0) {
            settings.fontScale = Math.min(3, (Number(settings.fontScale) || 0) + 1);
        } else if (delta < 0) {
            settings.fontScale = Math.max(0, (Number(settings.fontScale) || 0) - 1);
        }
        saveA11ySettings(settings);
        applyA11ySettings(settings);
    };

    window.toggleAccessibilityFeature = (key) => {
        const settings = getA11ySettings();
        settings[key] = !settings[key];
        saveA11ySettings(settings);
        applyA11ySettings(settings);
    };

    window.resetAccessibilitySettings = () => {
        const settings = { ...defaultA11ySettings };
        saveA11ySettings(settings);
        applyA11ySettings(settings);
        window.showToast?.('הגדרות הנגישות אופסו לברירת המחדל');
    };

    window.openAccessibilityModal = () => {
        const panel = document.getElementById('accessibilityPanel');
        const overlay = document.getElementById('accessibilityOverlay');
        const trigger = document.getElementById('accessibilityBtn');
        if (!panel || !overlay) return;

        lastA11yFocusElement = document.activeElement;
        panel.classList.add('open');
        overlay.classList.add('open');
        panel.setAttribute('aria-hidden', 'false');
        if (trigger) trigger.setAttribute('aria-expanded', 'true');

        // Focus close button inside panel for keyboard users
        setTimeout(() => {
            const closeBtn = document.getElementById('a11yCloseBtn');
            if (closeBtn) closeBtn.focus();
        }, 50);
    };

    window.closeAccessibilityModal = () => {
        const panel = document.getElementById('accessibilityPanel');
        const overlay = document.getElementById('accessibilityOverlay');
        const trigger = document.getElementById('accessibilityBtn');
        if (!panel || !overlay) return;

        panel.classList.remove('open');
        overlay.classList.remove('open');
        panel.setAttribute('aria-hidden', 'true');
        if (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
            if (lastA11yFocusElement && typeof lastA11yFocusElement.focus === 'function') {
                lastA11yFocusElement.focus();
            } else {
                trigger.focus();
            }
        }
    };

    // Tab Focus Trap inside Accessibility Panel (WCAG 2.1 AA)
    document.addEventListener('keydown', (e) => {
        const panel = document.getElementById('accessibilityPanel');
        if (!panel || !panel.classList.contains('open')) return;

        if (e.key === 'Tab') {
            const focusables = panel.querySelectorAll('button:not([disabled]), [tabindex]:not([tabindex="-1"])');
            if (!focusables.length) return;

            const first = focusables[0];
            const last = focusables[focusables.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }
    });

    // Permanently remove Netlify deploy badge / feedback widgets if injected
    const removeNetlifyWidgets = () => {
        const netlifySelectors = [
            'netlify-badge',
            '#netlify-deploy-badge',
            '.netlify-badge',
            '[data-netlify-badge]',
            '[data-netlify-drawer]',
            '[id*="netlify"]',
            '[class*="netlify"]',
            'iframe[src*="netlify"]',
            'img[src*="netlify.com"]',
            'img[src*="api.netlify.com"]',
            'a[href*="netlify.com"]',
            'a[href*="netlify.app"]'
        ];
        document.querySelectorAll(netlifySelectors.join(',')).forEach(el => {
            try {
                const wrapper = el.closest('div[style*="fixed"], div[style*="absolute"]');
                if (wrapper && wrapper !== document.body) {
                    wrapper.style.display = 'none';
                    wrapper.remove();
                } else {
                    el.style.display = 'none';
                    el.remove();
                }
            } catch (err) {}
        });
    };
    removeNetlifyWidgets();
    setTimeout(removeNetlifyWidgets, 500);
    setTimeout(removeNetlifyWidgets, 1500);
    setTimeout(removeNetlifyWidgets, 3000);

    // Observer to kill Netlify badge the microsecond it gets injected into DOM
    try {
        const netlifyObserver = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === 1) {
                        const tag = (node.tagName || '').toLowerCase();
                        if (tag.includes('netlify') || (node.id && node.id.includes('netlify')) || (node.className && typeof node.className === 'string' && node.className.includes('netlify'))) {
                            node.style.display = 'none';
                            node.remove();
                        }
                    }
                }
            }
        });
        netlifyObserver.observe(document.documentElement, { childList: true, subtree: true });
    } catch (e) {}

    // Initialize Saved Accessibility Settings Immediately
    applyA11ySettings(getA11ySettings());

    // Initialize Cart Badge
    updateCartUI();
});

