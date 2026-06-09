// ============================================
// 📦 PRODUKTE - HIER PREISE & BILDER ÄNDERN!
// ============================================
const products = {
    "Streaming Accounts": [
        { id: 1, name: "Netflix Lifetime", price: 6.99, image: "images/netflix.jpg", stock: "Auf Lager", badge: null },
        { id: 2, name: "Disney+ Premium", price: 4.99, image: "images/disney+.jpg", stock: "Auf Lager", badge: null },
        { id: 4, name: "Paramount+", price: 2.99, image: "images/paramount.jpg", stock: "Auf Lager", badge: null },
        { id: 5, name: "Crunchyroll", price: 4.99, image: "images/crunchroll.jpg", stock: "Auf Lager", badge: null },
        { id: 6, name: "HBO Max", price: 6.99, image: "images/hbo.jpg", stock: "Nur noch 5", badge: null },
        { id: 7, name: "Sky Showtime", price: 3.49, image: "images/sky.jpg", stock: "Auf Lager", badge: null }
    ],
    "Premium Accounts": [
        { id: 8, name: "Spotify Premium", price: 4.99, image: "images/spotify.jpg", stock: "Auf Lager", badge: "Bestseller" },
        { id: 9, name: "YouTube Premium", price: 4.99, image: "images/youtube.jpg", stock: "Auf Lager", badge: null },
        { id: 11, name: "Deezer Premium", price: 4.99, image: "images/deezer.jpg", stock: "Auf Lager", badge: null }
    ],
    "Social & Chat": [
        { id: 12, name: "Discord Nitro", price: 4.99, image: "images/discord.jpg", stock: "Auf Lager", badge: "Beliebt" },
        { id: 13, name: "Instagram Accounts", price: 5.99, image: "images/instagram.jpg", stock: "Nur noch 3", badge: null },
        { id: 14, name: "TikTok Accounts", price: 4.99, image: "images/tiktok.jpg", stock: "Auf Lager", badge: null },
        { id: 15, name: "Twitch Accounts", price: 3.99, image: "images/twitch.jpg", stock: "Auf Lager", badge: null },
    ],
    "Tools & Services": [
        { id: 18, name: "NordVPN Lifetime", price: 7.99, image: "images/nordvpn.jpg", stock: "Auf Lager", badge: "Top" },
        { id: 28, name: "CyberGhost 1 Year", price: 5.99, image: "images/cyberghost.jpg", stock: "Auf Lager", badge: null },
        { id: 29, name: "TunnelBear Premium", price: 5.49, image: "images/tunnelbear.jpg", stock: "Auf Lager", badge: null },
        { id: 30, name: "IpVanish 1 Year", price: 6.99, image: "images/ipvanish.jpg", stock: "Auf Lager", badge: null },
        { id: 31, name: "Pure VPN Lifetime", price: 8.99, image: "images/purevpn.jpg", stock: "Auf Lager", badge: null },
        { id: 32, name: "Mullvad VPN", price: 9.99, image: "images/mullvad.jpg", stock: "Auf Lager", badge: null },
        { id: 33, name: "Hotspot Shield Premium", price: 6.49, image: "images/hotshield.jpg", stock: "Auf Lager", badge: null },
        { id: 34, name: "Express VPN", price: 9.49, image: "images/expressvpn.jpg", stock: "Auf Lager", badge: null },
        { id: 35, name: "VPN Generator", price: 9.49, image: "images/vpngenerator.jpg", stock: "Auf Lager", badge: null },
        { id: 40, name: "Gmail 2022 - 2024 Accounts", price: 2.49, image: "images/gmail.jpg", stock: "Auf Lager", badge: null },
        { id: 20, name: "Server Boosts", price: 1.99, image: "images/boost.jpg", stock: "Auf Lager", badge: null },
        { id: 41, name: "Chat GPT+", price: 6.99, image: "images/chatgpt.jpg", stock: "Auf Lager", badge: null }
    ],
    "Gaming Accounts": [
        { id: 21, name: "FiveM Account", price: 6.99, image: "images/fivem.jpg", stock: "Nur noch 2", badge: null },
        { id: 22, name: "Steam Account", price: 7.99, image: "images/steam.jpg", stock: "Auf Lager", badge: "Beliebt" },
        { id: 24, name: "Rockstar Account", price: 6.99, image: "images/rockstar.jpg", stock: "Auf Lager", badge: null },
        { id: 25, name: "Minecraft Account", price: 4.99, image: "images/minecraft.jpg", stock: "Auf Lager", badge: null }
    ], 
    "Valorant Accounts": [
        {
            id: 60,
            name: "Valorant Accounts",
            price: 8.99,
            image: "images/valorant.jpg",
            stock: "Auf Lager",
            badge: null,
            variants: [
                { name: "EU - Level 1-20 Ranked Ready", price: 8.99, description: "Fresh Account, ready for ranked", features: ["Level 1-20", "EU Server", "Ranked Ready"] },
                { name: "EU - Level 1-20 + Knife", price: 12.99, description: "Account mit Knife und Skins", features: ["Level 1-20", "Knife Skin", "1000-3000 VP", "EU Server"] },
                { name: "EU - Level 40-100 + Skins", price: 19.99, description: "High Level Account mit vielen Skins", features: ["Level 40-100", "+ Knives", "3000VP - 10000VP"] },
                { name: "EU - Level 50-200 + Skins", price: 19.99, description: "High Level Account mit vielen Skins", features: ["Level 50-200", "+ Knives", "5000VP - 20000VP"] },
                { name: "EU - Level 100-300 + Skins", price: 19.99, description: "High Level Account mit vielen Skins", features: ["Level 100-300", "+ Knives", "30000VP - 55000VP"] }
            ]
        }
    ],
    "Fortnite Accounts": [
        {
            id: 70,
            name: "Fortnite Accounts",
            price: 7.99,
            image: "images/fortnite.jpg",
            stock: "Auf Lager",
            badge: "Top",
            variants: [
                { name: "100-150 Skins", price: 7.99, description: "Account mit 100-150 verschiedenen Skins", features: ["100-150 Skins", "Sofort verfügbar"] },
                { name: "150-250 Skins", price: 7.99, description: "Account mit 150-250 verschiedenen Skins", features: ["150-250 Skins", "Sofort verfügbar"] },
                { name: "100-250 Tryhard-Skins", price: 7.99, description: "Account mit Tryhard-Skins", features: ["100-250 Skins", "Tryhard Skins", "Sofort verfügbar"] },
                { name: "OG STW + 100-200 Skins", price: 7.99, description: "Account mit 100-200 verschiedenen Skins", features: ["100-200 Skins", "OG Account"] },
                { name: "250-400 Skins", price: 7.99, description: "Account mit 250-400 verschiedenen Skins", features: ["250-400 Skins", "Sofort verfügbar"] },
                { name: "Leviathan Axe + 100-200 Skins", price: 7.99, description: "Account mit Leviathan Axe Skin", features: ["100-200 Skins", "Leviathan Axe", "Rare Skin"] },
                { name: "Minty Axe + 100-250 Skins", price: 7.99, description: "Account mit Minty Axe Skin", features: ["100-250 Skins", "Minty Axe", "Rare Skin"] },
                { name: "350 Level + Tournament Ready", price: 7.99, description: "High-Level Account, bereit für Turniere", features: ["Level 350+", "Tournament Ready", "Competitive"] },
                { name: "Travis Scott + 100-250 Skins", price: 7.99, description: "Account mit Travis Scott Skin", features: ["100-250 Skins", "Travis Scott", "Rare Skin"] },
                { name: "400-600 Skins", price: 7.99, description: "Account mit 400-600 verschiedenen Skins", features: ["400-600 Skins", "Sofort verfügbar"] },
                { name: "Black Knight + 50-250 Skins", price: 7.99, description: "Account mit Black Knight Skin", features: ["50-250 Skins", "Black Knight", "OG Skin"] }
            ]
        }
    ],
    "Fortnite V-Bucks Accounts": [
        {
            id: 90,
            name: "Fortnite V-Bucks Accounts",
            price: 7.99,
            image: "images/fortnitevb.jpg",
            stock: "Auf Lager",
            badge: "Top",
            variants: [
                { name: "800-1200 V-Bucks", price: 7.99, description: "Account mit 800-1200 V-Bucks Guthaben", features: ["800-1200 V-Bucks", "Sofort verfügbar"] },
                { name: "1500-2800 V-Bucks", price: 7.99, description: "Account mit 1500-2800 V-Bucks Guthaben", features: ["1500-2800 V-Bucks", "Sofort verfügbar"] },
                { name: "5000-7000 V-Bucks", price: 9.99, description: "Account mit 5000-7000 V-Bucks Guthaben", features: ["5000-7000 V-Bucks", "Sofort verfügbar", "Bestes Preis-Leistungs-Verhältnis"] }
            ]
        }
    ]
};

// ============================================
// 🔐 DISCORD WEBHOOK - HIER DEINE URL EINTRAGEN!
// ============================================
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1513950453140815984/-Ev1AQvMw4SrWDfCoBmHCo9y4SQ1IC5N1sM12LhsQQ7FfwymK2RyDtyq4r9I3kdOtzec";

// ============================================
// 🛒 WARENKORB STATE
// ============================================
let cart = [];

// ============================================
// 🎨 PRODUKTE RENDERN (NUR EINMAL!)
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderAllProducts();
    updateCartUI();
});

function renderAllProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;
    
    container.innerHTML = '';

    for (const [category, categoryProducts] of Object.entries(products)) {
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        
        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'flex items-center gap-3 mb-8';
        categoryTitle.innerHTML = `
            <div class="h-px flex-1 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
            <h3 class="text-2xl font-bold text-white px-4">${category}</h3>
            <div class="h-px flex-1 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
        `;
        
        categorySection.appendChild(categoryTitle);

        const productGrid = document.createElement('div');
        productGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';

        categoryProducts.forEach(product => {
            const productCard = createProductCard(product);
            productGrid.appendChild(productCard);
        });

        categorySection.appendChild(productGrid);
        container.appendChild(categorySection);
    }
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'glass rounded-2xl p-6 hover:border-brand-500/50 transition-all duration-300 group relative overflow-hidden';
    
    const badgeHTML = product.badge ? `
        <div class="absolute top-4 right-4 bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-lg shadow-brand-500/20">
            ${product.badge.toUpperCase()}
        </div>
    ` : '';

    const stockColor = product.stock.includes('Nur noch') ? 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' : 'text-green-400 bg-green-500/10 border-green-500/20';

    const hasVariants = product.variants && product.variants.length > 0;
    const buttonText = hasVariants ? 'Auswählen' : 'Kaufen';
    const buttonAction = hasVariants ? `openVariantModal(${product.id})` : `addToCart(${product.id})`;

    card.innerHTML = `
        ${badgeHTML}
        <div class="flex flex-col h-full">
            <div class="mb-4 overflow-hidden rounded-xl">
                <img src="${product.image}" alt="${product.name}" 
                     class="w-full h-40 object-cover bg-slate-800 group-hover:scale-110 transition-transform duration-500"
                     onerror="this.src='https://placehold.co/400x300/1e293b/6366f1?text=${encodeURIComponent(product.name)}'">
            </div>
            
            <div class="flex justify-between items-start mb-3">
                <span class="${stockColor} text-xs font-bold px-2 py-1 rounded-full border">
                    ${product.stock}
                </span>
            </div>
            
            <h4 class="text-lg font-bold text-white mb-2">${product.name}</h4>
            <p class="text-slate-400 text-sm mb-4 flex-grow">Premium Account mit voller Garantie und Support.</p>
            
            <div class="flex items-end justify-between mt-auto pt-4 border-t border-white/5">
                <div>
                    ${hasVariants ? `<span class="text-slate-400 text-sm">ab</span>` : ''}
                    <div class="text-2xl font-bold text-white">${product.price.toFixed(2)} €</div>
                </div>
                <button onclick="${buttonAction}" 
                        class="bg-white text-slate-900 hover:bg-brand-500 hover:text-white px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg shadow-white/5 cursor-pointer">
                    ${buttonText}
                </button>
            </div>
        </div>
    `;

    return card;
}

// ============================================
// 🎯 VARIANTEN MODAL FUNKTIONEN
// ============================================
window.openVariantModal = function(productId) {
    let product = null;
    for (const categoryProducts of Object.values(products)) {
        product = categoryProducts.find(p => p.id === productId);
        if (product) break;
    }

    if (!product || !product.variants) return;

    const modal = document.getElementById('variant-modal');
    const modalTitle = document.getElementById('variant-modal-title');
    const modalVariants = document.getElementById('modal-variants');

    if (!modal || !modalTitle || !modalVariants) return;

    modalTitle.innerText = product.name;
    
    modalVariants.innerHTML = product.variants.map((variant, index) => `
        <div onclick="selectVariant(${product.id}, ${index})" 
             class="variant-option glass rounded-xl p-4 cursor-pointer border-2 border-transparent hover:border-brand-500/50 transition-all group">
            <div class="flex justify-between items-start mb-2">
                <h4 class="text-white font-bold group-hover:text-brand-accent transition-colors">${variant.name}</h4>
                <span class="text-brand-accent font-bold text-lg">${variant.price.toFixed(2)} €</span>
            </div>
            <p class="text-slate-400 text-sm mb-3">${variant.description || ''}</p>
            <div class="flex gap-2 flex-wrap">
                ${variant.features ? variant.features.map(feature => `
                    <span class="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded border border-green-500/20">✓ ${feature}</span>
                `).join('') : ''}
            </div>
        </div>
    `).join('');

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0', 'pointer-events-none');
    }, 10);
    document.body.style.overflow = 'hidden';
};

window.selectVariant = function(productId, variantIndex) {
    let product = null;
    for (const categoryProducts of Object.values(products)) {
        product = categoryProducts.find(p => p.id === productId);
        if (product) break;
    }

    if (!product || !product.variants) return;

    const selectedVariant = product.variants[variantIndex];
    
    cart.push({
        id: product.id + '_' + variantIndex,
        name: `${product.name} - ${selectedVariant.name}`,
        price: selectedVariant.price,
        image: product.image,
        stock: product.stock,
        quantity: 1,
        variant: selectedVariant.name
    });

    updateCartUI();
    showToast(`${product.name} (${selectedVariant.name}) wurde hinzugefügt.`);
    closeVariantModal();
};

window.closeVariantModal = function() {
    const modal = document.getElementById('variant-modal');
    if (!modal) return;
    
    modal.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
};

// ============================================
// 🛒 WARENKORB FUNKTIONEN
// ============================================
window.addToCart = function(productId) {
    let product = null;
    for (const categoryProducts of Object.values(products)) {
        product = categoryProducts.find(p => p.id === productId);
        if (product) break;
    }

    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast(`${product.name} wurde hinzugefügt.`);
};

window.removeFromCart = function(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
};

window.changeQuantity = function(itemId, delta) {
    const item = cart.find(item => item.id === itemId);
    if (!item) return;

    item.quantity += delta;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        updateCartUI();
    }
};

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartFooter = document.getElementById('cart-footer');
    const cartCountBadge = document.getElementById('cart-count');
    const cartItemsCount = document.getElementById('cart-items-count');
    const cartTotal = document.getElementById('cart-total');

    if (!cartItemsContainer || !cartCountBadge) return;

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCountBadge.innerText = totalItems;
    if (totalItems > 0) {
        cartCountBadge.classList.remove('scale-0');
    } else {
        cartCountBadge.classList.add('scale-0');
    }
    
    if (cartItemsCount) cartItemsCount.innerText = totalItems;

    if (cart.length === 0) {
        cartItemsContainer.classList.add('hidden');
        if (cartFooter) cartFooter.classList.add('hidden');
        if (cartEmpty) cartEmpty.classList.remove('hidden');
        if (cartTotal) cartTotal.innerText = '0,00 €';
        return;
    }

    cartItemsContainer.classList.remove('hidden');
    if (cartFooter) cartFooter.classList.remove('hidden');
    if (cartEmpty) cartEmpty.classList.add('hidden');

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item-enter glass rounded-xl p-4 flex gap-4 items-center">
            <img src="${item.image}" alt="${item.name}" 
                 class="w-16 h-16 rounded-lg object-cover bg-slate-800 flex-shrink-0"
                 onerror="this.src='https://placehold.co/100x100/1e293b/6366f1?text=${encodeURIComponent(item.name.substring(0,3))}'">
            
            <div class="flex-1 min-w-0">
                <h4 class="text-sm font-semibold text-white truncate">${item.name}</h4>
                <div class="text-brand-accent font-bold text-sm mt-1">${item.price.toFixed(2)} €</div>
                
                <div class="flex items-center gap-2 mt-2">
                    <button onclick="changeQuantity('${item.id}', -1)" 
                            class="w-6 h-6 rounded bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors text-sm font-bold">−</button>
                    <span class="text-sm text-white font-semibold w-6 text-center">${item.quantity}</span>
                    <button onclick="changeQuantity('${item.id}', 1)" 
                            class="w-6 h-6 rounded bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors text-sm font-bold">+</button>
                </div>
            </div>

            <button onclick="removeFromCart('${item.id}')" 
                    class="remove-btn p-2 rounded-lg text-slate-500 flex-shrink-0" title="Entfernen">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.innerText = total.toFixed(2).replace('.', ',') + ' €';
}

window.toggleCart = function() {
    const panel = document.getElementById('cart-panel');
    const overlay = document.getElementById('cart-overlay');
    if (!panel || !overlay) return;
    
    const isOpen = !panel.classList.contains('translate-x-full');

    if (isOpen) {
        panel.classList.add('translate-x-full');
        overlay.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
    } else {
        panel.classList.remove('translate-x-full');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
    }
};

// ============================================
// 🔐 CHECKOUT - CODE GENERIEREN & DISCORD NOTIFY
// ============================================
window.checkout = function() {
    console.log('🛒 Checkout gestartet...');
    console.log('Warenkorb:', cart);
    
    if (cart.length === 0) {
        alert('Warenkorb ist leer!');
        return;
    }

    const code = generateRandomCode();
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const checkoutData = {
        code: code,
        total: total,
        items: cart,
        timestamp: new Date().toISOString()
    };
    
    console.log('Checkout-Daten:', checkoutData);
    localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
    console.log('✅ Daten in localStorage gespeichert');

    console.log('📡 Sende Discord-Nachricht...');
    sendDiscordNotification(checkoutData)
        .then(() => {
            console.log('✅ Discord-Nachricht erfolgreich gesendet!');
            setTimeout(() => {
                window.location.href = 'checkout.html';
            }, 1000);
        })
        .catch(error => {
            console.error('❌ Fehler beim Senden:', error);
            setTimeout(() => {
                window.location.href = 'checkout.html';
            }, 1000);
        });
};

function generateRandomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 12; i++) {
        if (i > 0 && i % 4 === 0) code += '-';
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// ============================================
// 📡 DISCORD NACHRICHT SENDEN (KORRIGIERT!)
// ============================================
async function sendDiscordNotification(checkoutData) {
    console.log('📡 Discord-Funktion aufgerufen');
    console.log('Webhook URL vorhanden:', !!DISCORD_WEBHOOK_URL);
    
    // ✅ KORRIGIERTE BEDINGUNG - Prüft nur ob URL leer ist
    if (!DISCORD_WEBHOOK_URL || DISCORD_WEBHOOK_URL.trim() === "") {
        console.error('❌ Discord Webhook URL ist leer!');
        throw new Error('Webhook URL nicht konfiguriert');
    }

    const itemsList = checkoutData.items.map(item => 
        `• **${item.name}** x${item.quantity} = ${(item.price * item.quantity).toFixed(2)} €`
    ).join('\n');

    console.log('Artikel-Liste:', itemsList);

    const embed = {
        title: "🛒 Neue Bestellung eingegangen!",
        color: 0x6366f1,
        fields: [
            {
                name: "🔑 Bestell-Code",
                value: `\`${checkoutData.code}\``,
                inline: true
            },
            {
                name: "💰 Gesamtpreis",
                value: `**${checkoutData.total.toFixed(2).replace('.', ',')} €**`,
                inline: true
            },
            {
                name: "📦 Artikel",
                value: itemsList || "Keine Artikel",
                inline: false
            },
            {
                name: "🕐 Zeitpunkt",
                value: new Date(checkoutData.timestamp).toLocaleString('de-DE'),
                inline: false
            }
        ],
        footer: {
            text: "DigitalVault Shop"
        },
        timestamp: checkoutData.timestamp
    };

    const payload = {
        content: "🔔 **Neue Bestellung!** Bitte Discord-Ticket öffnen und Code einlösen.",
        embeds: [embed]
    };

    console.log('📤 Sende Payload an Discord...');
    console.log('Payload:', JSON.stringify(payload, null, 2));

    try {
        const response = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        
        console.log('📥 Response Status:', response.status);
        console.log('📥 Response OK:', response.ok);
        
        if (response.ok) {
            console.log('✅ Discord-Nachricht erfolgreich gesendet!');
            return true;
        } else {
            const errorText = await response.text();
            console.error('❌ Discord API Fehler:', response.status, errorText);
            throw new Error(`Discord API Error: ${response.status}`);
        }
    } catch (error) {
        console.error('❌ Netzwerk/CORS-Fehler:', error);
        console.error('Tipp: Öffne die Seite über einen lokalen Server (z.B. python -m http.server 8000)');
        throw error;
    }
}

// ============================================
// 🔔 TOAST BENACHRICHTIGUNG
// ============================================
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    const toastMessage = document.getElementById('toast-message');
    if (toastMessage) toastMessage.innerText = message;
    
    toast.classList.remove('translate-y-24');
    
    setTimeout(() => {
        toast.classList.add('translate-y-24');
    }, 2500);
}