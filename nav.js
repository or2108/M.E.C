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
    };

    injectGlobalUI();

    // --- Header Scroll Effect ---
    const headerWrapper = document.querySelector('.header-wrapper');
    const onScroll = () => {
        if (window.scrollY > 25) {
            headerWrapper?.classList.add('scrolled');
        } else {
            headerWrapper?.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // --- Mobile Drawer Logic ---
    const drawer = document.querySelector('.mobile-nav-drawer');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const menuTrigger = document.querySelector('.menu-trigger');
    const drawerClose = document.querySelector('.drawer-close');

    const toggleMenu = () => {
        if (!drawer || !overlay) return;
        const isOpen = drawer.classList.contains('open');
        if (isOpen) {
            drawer.classList.remove('open');
            overlay.classList.remove('open');
            document.body.style.overflow = '';
        } else {
            drawer.classList.add('open');
            overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    };

    menuTrigger?.addEventListener('click', toggleMenu);
    drawerClose?.addEventListener('click', toggleMenu);
    overlay?.addEventListener('click', toggleMenu);

    document.querySelectorAll('.drawer-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (drawer?.classList.contains('open')) toggleMenu();
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
            if (document.querySelector('.modal-overlay.open')) {
                closeProductModal();
            } else if (document.querySelector('.cart-drawer.open')) {
                closeCart();
            } else if (drawer?.classList.contains('open')) {
                toggleMenu();
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

    // Initialize Cart Badge
    updateCartUI();
});
