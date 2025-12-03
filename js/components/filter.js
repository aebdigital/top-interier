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

    const mobileOptionsHTML = filterCategories.map(category => `
        <div class="mobile-filter-option" data-filter="${category.id}">
            ${category.name}
        </div>
    `).join('');

    const filterHTML = `
        <!-- Mobile Dropdown Filter -->
        <div class="mobile-filter-dropdown">
            <div class="mobile-filter-selected" id="mobile-filter-selected">
                <span class="mobile-selected-text">Všetky kategórie</span>
                <span class="mobile-dropdown-arrow">▼</span>
            </div>
            <div class="mobile-filter-options" id="mobile-filter-options">
                ${mobileOptionsHTML}
            </div>
        </div>
        
        <!-- Desktop Filter -->
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

    // Desktop filter buttons
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

    // Mobile dropdown functionality
    const mobileSelected = document.getElementById('mobile-filter-selected');
    const mobileOptions = document.getElementById('mobile-filter-options');
    const mobileOptionItems = filterContainer.querySelectorAll('.mobile-filter-option');

    if (mobileSelected && mobileOptions) {
        // Toggle dropdown
        mobileSelected.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = mobileSelected.classList.contains('open');
            
            if (isOpen) {
                mobileSelected.classList.remove('open');
                mobileOptions.classList.remove('show');
            } else {
                mobileSelected.classList.add('open');
                mobileOptions.classList.add('show');
            }
        });

        // Handle option selection
        mobileOptionItems.forEach(option => {
            option.addEventListener('click', () => {
                const filterId = option.dataset.filter;
                const filterName = option.textContent;
                
                // Update selected display
                const selectedText = mobileSelected.querySelector('.mobile-selected-text');
                selectedText.textContent = filterName;
                
                // Remove active class from all mobile options
                mobileOptionItems.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Close dropdown
                mobileSelected.classList.remove('open');
                mobileOptions.classList.remove('show');
                
                // Apply filter
                applyFilter(filterId);
                
                // Sync with desktop buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                const desktopBtn = filterContainer.querySelector(`[data-filter="${filterId}"]`);
                if (desktopBtn) {
                    desktopBtn.classList.add('active');
                }
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            mobileSelected.classList.remove('open');
            mobileOptions.classList.remove('show');
        });
    }
    
    // Set "Všetky kategórie" as default active
    const showAllBtn = filterContainer.querySelector('.filter-category.show-all');
    const mobileShowAll = filterContainer.querySelector('.mobile-filter-option[data-filter="all"]');
    
    if (showAllBtn) {
        showAllBtn.classList.add('active');
        applyFilter('all');
    }
    
    if (mobileShowAll) {
        mobileShowAll.classList.add('active');
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