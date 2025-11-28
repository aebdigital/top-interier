// Filter Component - Category filtering functionality

function initFilter() {
    createFilterHTML();
    bindFilterEvents();
}

const filterCategories = [
    { id: 'all', name: 'Všetky kategórie', class: 'show-all' },
    { id: 'moderne-kuchyne', name: 'Moderné kuchyne' },
    { id: 'obyvacie-izby', name: 'Obývacie izby' },
    { id: 'spalne', name: 'Spálne' },
    { id: 'kupelne', name: 'Kúpeľne' },
    { id: 'kniznica', name: 'Knižnica' },
    { id: 'predsien', name: 'Predsieň a chodba' },
    { id: 'kancelarie', name: 'Kancelárie' },
    { id: 'obchody', name: 'Obchody a interiéry' },
    { id: 'tradicne-kuchyne', name: 'Tradičné kuchyne' }
];

function createFilterHTML() {
    const filterContainer = document.getElementById('filter-container');
    if (!filterContainer) return;

    const categoriesHTML = filterCategories.map(category => `
        <div class="filter-category ${category.class || ''}" data-filter="${category.id}">
            ${category.name}
        </div>
    `).join('');

    const filterHTML = `
        <div class="filter-container">
            <h3 class="filter-title">Kategórie</h3>
            <div class="filter-categories">
                ${categoriesHTML}
            </div>
        </div>
    `;

    filterContainer.innerHTML = filterHTML;
}

function bindFilterEvents() {
    const filterContainer = document.getElementById('filter-container');
    if (!filterContainer) return;

    const filterButtons = filterContainer.querySelectorAll('.filter-category');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterId = button.dataset.filter;
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Apply filter
            applyFilter(filterId);
        });
    });
    
    // Set "Všetky kategórie" as default active
    const showAllBtn = filterContainer.querySelector('.filter-category.show-all');
    if (showAllBtn) {
        showAllBtn.classList.add('active');
        applyFilter('all');
    }
}

function applyFilter(filterId) {
    const items = document.querySelectorAll('[data-category]');
    
    items.forEach(item => {
        if (filterId === 'all') {
            item.style.display = '';
            item.classList.remove('filter-hidden');
        } else {
            const itemCategories = item.dataset.category.split(',');
            if (itemCategories.includes(filterId)) {
                item.style.display = '';
                item.classList.remove('filter-hidden');
            } else {
                item.style.display = 'none';
                item.classList.add('filter-hidden');
            }
        }
    });
    
    // Trigger custom event for any additional filtering logic
    document.dispatchEvent(new CustomEvent('filterChanged', { 
        detail: { filterId } 
    }));
}

// Make functions globally available
if (typeof window !== 'undefined') {
    window.initFilter = initFilter;
    window.applyFilter = applyFilter;
    window.filterCategories = filterCategories;
}