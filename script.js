const TEXTURES = {
    flakes: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 60%), linear-gradient(135deg, rgba(0,0,0,0.03) 25%, transparent 25%), linear-gradient(225deg, rgba(0,0,0,0.03) 25%, transparent 25%)",
    creamy: "radial-gradient(circle at 10% 10%, rgba(255,255,255,0.8) 0%, transparent 40%), radial-gradient(circle at 90% 90%, rgba(0,0,0,0.1) 0%, transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.4), transparent)",
    fruit:  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, transparent 20%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.1) 0%, transparent 30%), repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 12px)",
    dots:   "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.2) 0%, transparent 10%), radial-gradient(circle at 45% 45%, rgba(255,255,255,0.5) 0%, transparent 12%)",
    stripes: "linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(0deg, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(45deg, rgba(0,0,0,0.02) 25%, transparent 25%)"
};

/* Für jede Zutat kann ein Bildpfad hinterlegt werden (z.B. "images/hafer.jpg").
   Ist img === null, wird automatisch ein Platzhalter angezeigt. */
const DATABASE = {
    "1. Basen": {
        limitText: "Die perfekte, nahrhafte Grundlage für deine Frühstücks-Bowl",
        items: {
            "hafer":            { name: "Haferflocken", img: "oats-hafer.jpg", amount: 50, kcal: 185, p: 6.5, f: 3.5, c: 30.0, price: 0.60, color: "#C8B89A", texture: TEXTURES.flakes, tags: ["muscle", "vegan"] },
            "dinkel_weizen":    { name: "Dinkelweizenflocken", img: "dinkel-flocken.jpg", amount: 50, kcal: 172, p: 6.1, f: 1.2, c: 31.5, price: 0.75, color: "#D4C5A9", texture: TEXTURES.flakes, tags: ["diet", "vegan"] },
            "weizenflocken":    { name: "Weizenflocken", img: "weizenflocken.jpg", amount: 50, kcal: 165, p: 5.5, f: 1.0, c: 31.0, price: 0.55, color: "#DECFA6", texture: TEXTURES.flakes, tags: ["vegan"] },
            "haferschrot":      { name: "Haferschrot", img: "oats-haferschrot.jpg", amount: 50, kcal: 183, p: 6.6, f: 3.4, c: 29.8, price: 0.65, color: "#BAAA84", texture: TEXTURES.flakes, tags: ["muscle", "vegan"] },
            "dinkel_quinoa_c":  { name: "Dinkel Quinoa Crunch", img: "dinkel-quinoa-crunch.jpg", amount: 50, kcal: 225, p: 5.8, f: 8.1, c: 31.0, price: 0.95, color: "#A89674", texture: TEXTURES.flakes, tags: ["muscle", "vegan"] },
            "low_sugar_c":      { name: "Low Sugar Crunchy", img: "low-sugar-crunchy.jpg", amount: 50, kcal: 195, p: 6.2, f: 5.1, c: 24.0, price: 1.10, color: "#A6977B", texture: TEXTURES.flakes, tags: ["diet", "lowcarb", "vegan"] },
            "skyr":             { name: "Bio Skyr", img: "skyr.jpg", amount: 150, kcal: 95, p: 16.5, f: 0.3, c: 6.0, price: 1.20, color: "#EBEBE9", texture: TEXTURES.creamy, tags: ["muscle", "diet", "lowcarb"] },
            "joghurt":          { name: "Bio Joghurt", img: "joghurt.jpg", amount: 150, kcal: 102, p: 5.1, f: 5.7, c: 7.1, price: 0.95, color: "#F7F6F0", texture: TEXTURES.creamy, tags: ["muscle"] },
            "magerquark":       { name: "Magerquark", img: "magerquark.jpg", amount: 150, kcal: 101, p: 18.0, f: 0.4, c: 6.1, price: 1.10, color: "#FFFDF4", texture: TEXTURES.creamy, tags: ["muscle", "diet", "lowcarb"] },
            "sojajoghurt":      { name: "Sojajoghurt", img: "sojajoghurt.jpg", amount: 150, kcal: 65, p: 6.0, f: 3.2, c: 3.1, price: 1.30, color: "#EAE7DE", texture: TEXTURES.creamy, tags: ["diet", "lowcarb", "vegan"] }
        }
    },
    "2. Früchte": {
        limitText: "Feinste, intensiv aromatische Fruchtbeilagen",
        items: {
            "apfel":            { name: "Apfel", img: "apfel.jpg", amount: 20, kcal: 65, p: 0.2, f: 0.1, c: 14.8, price: 0.60, color: "#E0D5A6", texture: TEXTURES.fruit, tags: ["diet", "vegan"] },
            "brombeeren":       { name: "Brombeeren", img: "brombeeren.jpg", amount: 10, kcal: 32, p: 0.8, f: 0.5, c: 4.5, price: 1.40, color: "#42283B", texture: TEXTURES.dots, tags: ["diet", "lowcarb", "vegan"] },
            "erdbeeren":        { name: "Erdbeeren", img: "erdbeeren.jpg", amount: 10, kcal: 34, p: 0.7, f: 0.4, c: 5.1, price: 1.35, color: "#CF4842", texture: TEXTURES.dots, tags: ["diet", "lowcarb", "vegan"] },
            "kokoschips":       { name: "Kokoschips", img: "kokoschips.jpg", amount: 15, kcal: 91, p: 0.9, f: 9.3, c: 1.1, price: 0.55, color: "#EBE3DE", texture: TEXTURES.flakes, tags: ["lowcarb", "vegan"] },
            "datteln":          { name: "Datteln", img: "datteln.jpg", amount: 25, kcal: 70, p: 0.5, f: 0.1, c: 16.2, price: 0.70, color: "#6E5041", texture: TEXTURES.fruit, tags: ["muscle", "vegan"] },
            "bananen":          { name: "Bananenscheiben", img: "bananen.jpg", amount: 50, kcal: 48, p: 0.6, f: 0.1, c: 11.0, price: 0.65, color: "#F1E4A8", texture: TEXTURES.fruit, tags: ["muscle", "vegan"] },
            "heidelbeeren":     { name: "Heidelbeeren", img: "heidelbeeren.jpg", amount: 40, kcal: 23, p: 0.3, f: 0.2, c: 4.9, price: 1.20, color: "#3B4566", texture: TEXTURES.dots, tags: ["diet", "lowcarb", "vegan"] },
            "himbeeren":        { name: "Himbeeren", img: "himbeeren.jpg", amount: 10, kcal: 34, p: 0.7, f: 0.3, c: 6.0, price: 1.45, color: "#C23B57", texture: TEXTURES.dots, tags: ["diet", "lowcarb", "vegan"] },
            "kiwi":             { name: "Kiwi", img: "kiwi.jpg", amount: 20, kcal: 55, p: 0.6, f: 0.1, c: 12.5, price: 0.85, color: "#D9C34A", texture: TEXTURES.fruit, tags: ["diet", "vegan"] },
            "mango":            { name: "Mango", img: "mango.jpg", amount: 20, kcal: 65, p: 0.4, f: 0.2, c: 15.0, price: 0.90, color: "#E8A33D", texture: TEXTURES.fruit, tags: ["diet", "vegan"] }
        }
    },
    "3. Nüsse und Samen": {
        limitText: "Knackige Energiespender, wertvolle Fette und cremiges Nussmus",
        items: {
            "mandeln":          { name: "Mandeln", img: "mandeln.jpg", amount: 15, kcal: 90, p: 3.2, f: 8.1, c: 0.8, price: 0.65, color: "#9c8069", texture: TEXTURES.stripes, tags: ["lowcarb", "muscle", "vegan"] },
            "walnuss":          { name: "Walnüsse", img: "walnuss.jpg", amount: 15, kcal: 98, p: 2.3, f: 9.8, c: 0.9, price: 0.80, color: "#7A6351", texture: TEXTURES.stripes, tags: ["lowcarb", "vegan"] },
            "cashews":          { name: "Cashews", img: "cashews.jpg", amount: 15, kcal: 86, p: 2.7, f: 6.6, c: 4.0, price: 0.85, color: "#E3D5C5", texture: TEXTURES.stripes, tags: ["muscle", "vegan"] },
            "sonnenblumen":     { name: "Sonnenblumenkerne", img: "sonnenblumen.jpg", amount: 15, kcal: 87, p: 3.4, f: 7.8, c: 1.8, price: 0.40, color: "#D4C5A3", texture: TEXTURES.dots, tags: ["lowcarb", "vegan"] },
            "chia":             { name: "Chiasamen", img: "chia.jpg", amount: 10, kcal: 50, p: 1.7, f: 3.1, c: 0.5, price: 0.45, color: "#4f4b47", texture: TEXTURES.dots, tags: ["lowcarb", "diet", "vegan"] },
            "leinsamen":        { name: "Leinsamen", img: "leinsamen.jpg", amount: 10, kcal: 49, p: 1.9, f: 3.7, c: 0.1, price: 0.35, color: "#61554A", texture: TEXTURES.dots, tags: ["lowcarb", "diet", "vegan"] },
            "nussmus":          { name: "Mandelmus", img: "mandelmus.jpg", amount: 20, kcal: 124, p: 4.2, f: 11.1, c: 1.2, price: 1.40, color: "#EDE3D3", texture: TEXTURES.creamy, tags: ["lowcarb", "muscle", "vegan"] },
            "erdnussmus":       { name: "Erdnussmus", img: "erdnussmus.jpg", amount: 20, kcal: 120, p: 4.9, f: 10.0, c: 2.6, price: 0.95, color: "#B8935E", texture: TEXTURES.creamy, tags: ["lowcarb", "muscle", "vegan"] },
            "macadamia":        { name: "Macadamianüsse", img: "maca.jpg", amount: 15, kcal: 102, p: 1.1, f: 10.6, c: 0.6, price: 1.10, color: "#EFE3C8", texture: TEXTURES.stripes, tags: ["lowcarb", "vegan"] },
            "hanfsamen":        { name: "Hanfsamen", img: "hanfsamen.jpg", amount: 15, kcal: 85, p: 4.9, f: 6.8, c: 0.4, price: 0.55, color: "#C7C79A", texture: TEXTURES.dots, tags: ["muscle", "lowcarb", "vegan"] },
            "pekannuesse":      { name: "Pekannüsse", img: "pekannuesse.jpg", amount: 15, kcal: 100, p: 1.3, f: 10.2, c: 1.9, price: 0.95, color: "#8B5A3C", texture: TEXTURES.stripes, tags: ["lowcarb", "vegan"] },
            "pistazien":        { name: "Pistazien", img: "pistazien.jpg", amount: 15, kcal: 84, p: 3.0, f: 6.8, c: 3.6, price: 0.90, color: "#B7C98A", texture: TEXTURES.stripes, tags: ["lowcarb", "muscle", "vegan"] }
        }
    },
    "4. Extras": {
        limitText: "Zum Veredeln und feinen Abrunden deines Geschmacksmixes",
        items: {
            "kakao_nibs":       { name: "Soja Crispies Kakao", img: "kakao-nibs.jpg", amount: 15, kcal: 65, p: 1.8, f: 2.0, c: 9.5, price: 0.65, color: "#382415", texture: TEXTURES.dots, tags: ["lowcarb", "vegan"] },
            "zimt":             { name: "Zimt", img: "zimt.jpg", amount: 2, kcal: 5, p: 0.1, f: 0.0, c: 1.1, price: 0.20, color: "#9E6D48", texture: TEXTURES.stripes, tags: ["diet", "lowcarb", "muscle", "vegan"] },
            "honig":            { name: "Bio-Honig", img: "honig.jpg", amount: 15, kcal: 46, p: 0.1, f: 0.0, c: 11.3, price: 0.85, color: "#DCA743", texture: TEXTURES.creamy, tags: ["muscle"] },
            "cacao_nibs":       { name: "Kakao-Nibs", img: "kakao-nibs-echt.jpg", amount: 10, kcal: 55, p: 1.3, f: 4.9, c: 1.6, price: 0.75, color: "#4A2A1D", texture: TEXTURES.dots, tags: ["lowcarb", "vegan"] },
            "haselnuss_crunch": { name: "Haselnuss-Crunch", img: "haselnuss-crunch.jpg", amount: 15, kcal: 97, p: 2.2, f: 9.4, c: 1.2, price: 0.75, color: "#C9A876", texture: TEXTURES.stripes, tags: ["lowcarb", "vegan"] }
        }
    }
};

const MAX_QTY = 2;
let appState = {};
let currentActiveFilter = null;

function navigateTo(pageId) {
    document.querySelectorAll('.app-page').forEach(page => page.classList.remove('active-page'));
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active-nav'));

    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) targetPage.classList.add('active-page');

    const activeNavLink = document.getElementById(`nav-${pageId}`);
    if (activeNavLink) activeNavLink.classList.add('active-nav');

    if (pageId === 'warenkorb') renderWarenkorbPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function findItemData(id) {
    for (const cat in DATABASE) {
        if (DATABASE[cat].items[id]) return DATABASE[cat].items[id];
    }
    return null;
}

function getContrastColor(hexColor) {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 150) ? '#000000' : '#ffffff';
}

function showToast(message) {
    const holder = document.getElementById("toast-holder");
    if (!holder) { alert(message); return; }
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    holder.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("toast-visible"));
    setTimeout(() => {
        toast.classList.remove("toast-visible");
        setTimeout(() => toast.remove(), 300);
    }, 2600);
}

function initApplication() {
    for (const cat in DATABASE) {
        for (const id in DATABASE[cat].items) {
            appState[id] = 0;
        }
    }
    buildInterface();
    setupGlobalEventListeners();
    updateView();
}

function changeQty(id, delta) {
    const current = appState[id] || 0;
    const next = Math.max(0, Math.min(MAX_QTY, current + delta));
    if (next === current) return;
    appState[id] = next;

    if (delta > 0) triggerDropAnimation(id);

    const cardElement = document.getElementById(`card-${id}`);
    if (cardElement) {
        cardElement.classList.toggle("selected", next > 0);
        const item = findItemData(id);
        if (item) {
            cardElement.setAttribute("aria-label", `${item.name}, ${next} von ${MAX_QTY} ausgewählt`);
        }
    }

    const qtyLabel = document.getElementById(`qty-${id}`);
    if (qtyLabel) qtyLabel.textContent = `${next}×`;

    const minusBtn = document.getElementById(`minus-${id}`);
    if (minusBtn) minusBtn.disabled = next === 0;
    const plusBtn = document.getElementById(`plus-${id}`);
    if (plusBtn) plusBtn.disabled = next === MAX_QTY;

    updateView();
    updateCategoryCounters();
}

function triggerDropAnimation(id) {
    const item = findItemData(id);
    if (!item) return;

    const spawnZone = document.getElementById("bowl-zone");
    for (let i = 0; i < 4; i++) {
        const particle = document.createElement("div");
        particle.className = "ingredient-particle";
        particle.style.backgroundColor = item.color;
        particle.style.borderRadius = "50%";
        particle.style.width = "8px";
        particle.style.height = "8px";

        const randomX = Math.floor(Math.random() * 180) + 70;
        particle.style.left = `${randomX}px`;
        particle.style.animationDelay = `${i * 0.06}s`;
        spawnZone.appendChild(particle);
        setTimeout(() => particle.remove(), 650);
    }
}

function applyGoalFilter(goal) {
    if (currentActiveFilter === goal) {
        currentActiveFilter = null;
    } else {
        currentActiveFilter = goal;
    }

    document.querySelectorAll(".goal-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-goal") === currentActiveFilter);
    });

    for (const cat in DATABASE) {
        for (const id in DATABASE[cat].items) {
            const item = DATABASE[cat].items[id];
            const card = document.getElementById(`card-${id}`);
            if (!card) continue;

            card.classList.remove("recommended", "recommended-marked");

            if (currentActiveFilter !== null && item.tags.includes(currentActiveFilter)) {
                card.classList.add("recommended", "recommended-marked");
            }
        }
    }
}

function updateCategoryCounters() {
    let index = 0;
    let globalCount = 0;
    for (const catName in DATABASE) {
        let count = 0;
        for (const id in DATABASE[catName].items) {
            if (appState[id] > 0) { count++; globalCount++; }
        }
        const counterEl = document.getElementById(`counter-${index}`);
        if (counterEl) counterEl.textContent = count > 0 ? `${count} gewählt` : "";
        index++;
    }
    document.getElementById("cart-global-count").textContent = globalCount;
}

function resetApplication() {
    for (const id in appState) {
        appState[id] = 0;
        const qtyLabel = document.getElementById(`qty-${id}`);
        if (qtyLabel) qtyLabel.textContent = "0×";
        const minusBtn = document.getElementById(`minus-${id}`);
        if (minusBtn) minusBtn.disabled = true;
        const plusBtn = document.getElementById(`plus-${id}`);
        if (plusBtn) plusBtn.disabled = false;
        const card = document.getElementById(`card-${id}`);
        if (card) card.classList.remove("selected");
    }
    currentActiveFilter = null;
    applyGoalFilter(null);
    updateView();
    updateCategoryCounters();
}

/* Baut das Bild-/Platzhalter-Element für eine Zutatenkarte */
function buildCardMedia(item) {
    const wrap = document.createElement("div");
    wrap.className = "card-icon";

    if (item.img) {
        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.name;
        wrap.appendChild(img);
    } else {
        wrap.classList.add("card-icon-placeholder");
        wrap.title = "Noch kein Bild hinterlegt";
        wrap.innerHTML = `
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3"></rect>
                <circle cx="9" cy="9" r="1.6"></circle>
                <path d="M21 15l-5-5-4 4-3-3-6 6"></path>
            </svg>`;
    }
    return wrap;
}

function buildInterface() {
    const container = document.getElementById("ingredients-container");
    container.innerHTML = "";

    let catIndex = 0;
    let globalDelay = 0;
    for (const catName in DATABASE) {
        const headerDiv = document.createElement("div");
        headerDiv.className = "section-header-div";
        headerDiv.id = `section-header-${catName}`;

        const title = document.createElement("h3");
        title.className = "section-title";
        title.textContent = catName;

        const counter = document.createElement("span");
        counter.className = "category-counter";
        counter.id = `counter-${catIndex}`;

        headerDiv.appendChild(title);
        headerDiv.appendChild(counter);
        container.appendChild(headerDiv);

        const subtitle = document.createElement("div");
        subtitle.className = "section-subtitle";
        subtitle.id = `section-subtitle-${catName}`;
        subtitle.textContent = DATABASE[catName].limitText;
        container.appendChild(subtitle);

        for (const id in DATABASE[catName].items) {
            const item = DATABASE[catName].items[id];
            const card = document.createElement("div");
            card.className = "card";
            card.id = `card-${id}`;
            card.style.animationDelay = `${globalDelay * 0.03}s`;
            card.setAttribute("tabindex", "0");
            card.setAttribute("role", "button");
            card.setAttribute("aria-label", `${item.name} hinzufügen`);
            globalDelay++;

            const leftDiv = document.createElement("div");
            leftDiv.className = "card-left";

            const media = buildCardMedia(item);

            const details = document.createElement("div");
            details.className = "card-details";

            const name = document.createElement("span");
            name.className = "card-name";
            name.textContent = item.name;

            const portion = document.createElement("span");
            portion.className = "card-portion";
            portion.textContent = `${item.amount} g Portion · ${item.kcal} kcal`;

            details.appendChild(name);
            details.appendChild(portion);
            leftDiv.appendChild(media);
            leftDiv.appendChild(details);

            const stepper = document.createElement("div");
            stepper.className = "stepper";

            const minusBtn = document.createElement("button");
            minusBtn.type = "button";
            minusBtn.className = "stepper-btn";
            minusBtn.id = `minus-${id}`;
            minusBtn.textContent = "−";
            minusBtn.disabled = true;
            minusBtn.addEventListener("click", (e) => { e.stopPropagation(); changeQty(id, -1); });

            const qtyLabel = document.createElement("span");
            qtyLabel.className = "stepper-qty";
            qtyLabel.id = `qty-${id}`;
            qtyLabel.textContent = "0×";

            const plusBtn = document.createElement("button");
            plusBtn.type = "button";
            plusBtn.className = "stepper-btn";
            plusBtn.id = `plus-${id}`;
            plusBtn.textContent = "+";
            plusBtn.addEventListener("click", (e) => { e.stopPropagation(); changeQty(id, 1); });

            stepper.appendChild(minusBtn);
            stepper.appendChild(qtyLabel);
            stepper.appendChild(plusBtn);

            card.addEventListener("click", () => changeQty(id, 1));
            card.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    changeQty(id, 1);
                }
            });

            card.appendChild(leftDiv);
            card.appendChild(stepper);
            container.appendChild(card);
        }
        catIndex++;
    }
}

function updateMacroDonut(totals) {
    const donut = document.getElementById("macro-donut");
    const legend = document.getElementById("macro-legend");
    if (!donut) return;

    const pKcal = totals.p * 4;
    const cKcal = totals.c * 4;
    const fKcal = totals.f * 9;
    const sumKcal = pKcal + cKcal + fKcal;

    if (sumKcal === 0) {
        donut.style.background = "conic-gradient(var(--border-color) 0deg 360deg)";
        legend.innerHTML = `<span class="legend-empty">Wähle Zutaten für deine Makro-Verteilung</span>`;
        return;
    }

    const pDeg = (pKcal / sumKcal) * 360;
    const cDeg = (cKcal / sumKcal) * 360;

    donut.style.background = `conic-gradient(
        var(--accent-red) 0deg ${pDeg}deg,
        var(--recommend-green) ${pDeg}deg ${pDeg + cDeg}deg,
        var(--oat-beige) ${pDeg + cDeg}deg 360deg
    )`;

    legend.innerHTML = `
        <span class="legend-item"><i style="background:var(--accent-red)"></i>Protein ${Math.round((pKcal / sumKcal) * 100)}%</span>
        <span class="legend-item"><i style="background:var(--recommend-green)"></i>Kohlenhydrate ${Math.round((cKcal / sumKcal) * 100)}%</span>
        <span class="legend-item"><i style="background:var(--oat-beige)"></i>Fett ${Math.round((fKcal / sumKcal) * 100)}%</span>
    `;
}

function updateView() {
    let totals = { weight: 0, kcal: 0, p: 0, f: 0, c: 0, price: 0 };
    const bowlPreview = document.getElementById("bowl-preview");
    bowlPreview.innerHTML = "";

    const activeEntries = [];
    for (const id in appState) {
        const qty = appState[id];
        if (qty > 0) {
            const item = findItemData(id);
            if (!item) continue;
            const weight = item.amount * qty;
            totals.weight += weight;
            totals.kcal += item.kcal * qty;
            totals.p += item.p * qty;
            totals.f += item.f * qty;
            totals.c += item.c * qty;
            totals.price += item.price * qty;
            activeEntries.push({ item, weight });
        }
    }

    activeEntries.forEach(({ item, weight }) => {
        const layer = document.createElement("div");
        layer.className = "layer";
        const share = totals.weight > 0 ? (weight / totals.weight) * 100 : 0;
        layer.style.height = `${Math.max(share, 8)}%`;

        layer.style.backgroundColor = item.color;
        if (item.img) {
            layer.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url("${item.img}")`;
            layer.style.backgroundSize = "cover";
            layer.style.backgroundPosition = "center";
            layer.style.color = "#ffffff";
            layer.style.textShadow = "0 1px 3px rgba(0,0,0,0.6)";
        } else if (item.texture) {
            layer.style.backgroundImage = item.texture;
            layer.style.backgroundSize = "16px 16px";
            layer.style.color = getContrastColor(item.color);
        } else {
            layer.style.color = getContrastColor(item.color);
        }

        const textSpan = document.createElement("span");
        textSpan.textContent = item.name;
        layer.appendChild(textSpan);
        bowlPreview.appendChild(layer);
    });

    document.getElementById("out-total").textContent = totals.weight;
    document.getElementById("out-kcal").textContent = Math.round(totals.kcal);
    document.getElementById("out-fat").textContent = totals.f.toFixed(1);
    document.getElementById("out-protein").textContent = totals.p.toFixed(1);
    document.getElementById("out-carbs").textContent = totals.c.toFixed(1);
    document.getElementById("out-price").textContent = totals.price.toFixed(2);

    updateMacroDonut(totals);
}

function renderWarenkorbPage() {
    const target = document.getElementById("cart-content-target");
    target.innerHTML = "";

    let chosenItems = [];
    let totalPrice = 0;

    for (const id in appState) {
        const qty = appState[id];
        if (qty > 0) {
            const item = findItemData(id);
            if (item) { chosenItems.push({ item, qty }); totalPrice += item.price * qty; }
        }
    }

    if (chosenItems.length === 0) {
        target.innerHTML = `<div class="empty-cart-msg">Dein Warenkorb ist aktuell noch leer. Gehe zurück zum Mixer, um deine Bowl zu erstellen!</div>`;
        document.getElementById("btn-checkout-execute").style.display = "none";
        return;
    }

    document.getElementById("btn-checkout-execute").style.display = "block";
    const listWrapper = document.createElement("div");
    listWrapper.className = "cart-item-list";

    chosenItems.forEach(({ item, qty }) => {
        const row = document.createElement("div");
        row.className = "cart-item";

        const left = document.createElement("div");
        left.className = "cart-item-left";
        left.appendChild(buildCardMedia(item));

        const nameWrap = document.createElement("span");
        nameWrap.className = "cart-item-name";
        nameWrap.innerHTML = `${item.name} <span style="font-weight:400; font-size:0.9rem; color:var(--slate-grey);">(${item.amount * qty} g · ${qty}×)</span>`;
        left.appendChild(nameWrap);

        const priceEl = document.createElement("span");
        priceEl.className = "cart-item-price";
        priceEl.textContent = `${(item.price * qty).toFixed(2)} €`;

        row.appendChild(left);
        row.appendChild(priceEl);
        listWrapper.appendChild(row);
    });

    const totalRow = document.createElement("div");
    totalRow.className = "cart-total-row";
    totalRow.innerHTML = `
        <span>Gesamtsumme (1 Bowl)</span>
        <span>${totalPrice.toFixed(2)} €</span>
    `;

    target.appendChild(listWrapper);
    target.appendChild(totalRow);
}

function applyIngredientSearch(query) {
    const normalized = query.trim().toLowerCase();

    for (const catName in DATABASE) {
        let visibleInCategory = 0;
        for (const id in DATABASE[catName].items) {
            const item = DATABASE[catName].items[id];
            const card = document.getElementById(`card-${id}`);
            if (!card) continue;

            const matches = normalized === "" || item.name.toLowerCase().includes(normalized);
            card.style.display = matches ? "" : "none";
            if (matches) visibleInCategory++;
        }

        const headerEl = document.getElementById(`section-header-${catName}`);
        const subtitleEl = document.getElementById(`section-subtitle-${catName}`);
        const hideSection = normalized !== "" && visibleInCategory === 0;
        if (headerEl) headerEl.style.display = hideSection ? "none" : "";
        if (subtitleEl) subtitleEl.style.display = hideSection ? "none" : "";
    }
}

function setupGlobalEventListeners() {
    document.getElementById("btn-reset").addEventListener("click", () => {
        resetApplication();
        showToast("Deine Bowl wurde zurückgesetzt.");
    });

    document.getElementById("btn-order").addEventListener("click", () => {
        const active = Object.values(appState).some(v => v > 0);
        if (!active) { showToast("Bitte wähle zuerst mindestens eine Zutat aus!"); return; }
        navigateTo('warenkorb');
    });

    document.getElementById("btn-checkout-execute").addEventListener("click", () => {
        resetApplication();
        navigateTo('erfolg');
    });

    document.querySelectorAll(".goal-btn").forEach(btn => {
        btn.addEventListener("click", () => applyGoalFilter(btn.getAttribute("data-goal")));
    });

    const searchInput = document.getElementById("ingredient-search");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => applyIngredientSearch(e.target.value));
    }
}

document.addEventListener("DOMContentLoaded", initApplication);
