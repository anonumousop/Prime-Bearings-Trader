document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('productGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Premium expanded bearing size specifications data array
    const bearingProducts = [
        { id: 1, title: "Standard Ball Bearing 608", category: "industrial", series: "Bore: 8mm | OD: 22mm | Width: 7mm", material: "Premium High Carbon Steel", rpm: "Ceiling Fans & Power Tools" },
        { id: 2, title: "Standard Ball Bearing 6201", category: "industrial", series: "Bore: 12mm | OD: 32mm | Width: 10mm", material: "Heavy Duty Shielded Metal", rpm: "Motorcycle Hubs & Water Pumps" },
        { id: 3, title: "Standard Ball Bearing 6202", category: "industrial", series: "Bore: 15mm | OD: 35mm | Width: 11mm", material: "Dual Rubber Sealed Protection", rpm: "Vehicle Axles & Electric Motors" },
        { id: 4, title: "Standard Ball Bearing 6203", category: "industrial", series: "Bore: 17mm | OD: 40mm | Width: 12mm", material: "Reinforced Steel Shield", rpm: "Generators & Heavy Industrial Gear" },
        { id: 5, title: "Standard Ball Bearing 6204", category: "industrial", series: "Bore: 20mm | OD: 47mm | Width: 14mm", material: "Ultra Polished Tough Alloy", rpm: "Washing Machines & Factory Conveyors" },
        { id: 6, title: "Tapered Roller Bearings", category: "automotive", series: "Conical High-Load Design", material: "Hardened Carbon Alloy", rpm: "Truck Wheel Hubs & Car Differentials" },
        { id: 7, title: "Thrust Ball Bearings", category: "precision", series: "Axial Force Specialty Layout", material: "Polished Stainless Steel", rpm: "Car Steering Columns & Rotary Shafts" },
        { id: 8, title: "Needle Roller Bearings", category: "precision", series: "Ultra Compact Cylindrical Design", material: "Precision Micro-Hardened Steel", rpm: "Gearboxes & Motorcycle Engines" },
        { id: 9, title: "Pillow Block Mounted Bearings", category: "heavy", series: "Rigid Cast Iron Block Housing", material: "Heavy-Duty Pre-Greased Steel", rpm: "Factory Conveyor Belts & Farm Machines" }
    ];

    function renderBearings(items) {
        if (!grid) return;
        
        // Render items out cleanly
        grid.innerHTML = items.map(item => `
            <div class="product-card fade-in-up" data-category="${item.category}">
                <div class="product-info">
                    <span class="product-cat">${item.category}</span>
                    <h3 class="product-title">${item.title}</h3>
                    <div class="product-specs">
                        <span><strong>Dimensions:</strong> ${item.series}</span>
                        <span><strong>Quality Build:</strong> ${item.material}</span>
                        <span><strong>Primary Utility:</strong> ${item.rpm}</span>
                    </div>
                    <a href="https://wa.me/918130850593?text=Hi%20Hamza,%20I%20want%20to%20know%20the%20price%20of%20${encodeURIComponent(item.title)}" target="_blank" class="enquiry-btn">
                        <i class="fa-brands fa-whatsapp"></i> Ask Price on WhatsApp
                    </a>
                </div>
            </div>
        `).join('');
    }

    // Filter Logic with fluid entrance animation
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            if(filterValue === 'all') {
                renderBearings(bearingProducts);
            } else {
                const filtered = bearingProducts.filter(item => item.category === filterValue);
                renderBearings(filtered);
            }
        });
    });

    renderBearings(bearingProducts);

    // ─── SMOOTH SCROLL MOTION / REVEAL ON SWIPE INTERSECTION OBSERVER ───
    const revealElements = document.querySelectorAll('.reveal');
    
    const observerOptions = {
        root: null,
        threshold: 0.05, // Instantly fires smooth interaction as soon as content hits container frame
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});
