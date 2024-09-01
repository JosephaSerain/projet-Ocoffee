console.log("Catalogue script loaded");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");

    const selectElement = document.getElementById('categories');
    console.log("Select element:", selectElement);

    if (selectElement) {
        const productCardWrappers = document.querySelectorAll('.product-card-wrapper');
        console.log("Product card wrappers:", productCardWrappers);

        selectElement.addEventListener('change', function() {
            const selectedCategory = this.value;
            console.log("Category changed to:", selectedCategory);

            productCardWrappers.forEach(wrapper => {
                const cardCategory = wrapper.dataset.category;
                console.log("Card category:", cardCategory);

                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    wrapper.style.display = 'flex';
                } else {
                    wrapper.style.display = 'none';
                }
            });
        });
    } else {
        console.error("Select element not found");
    }
});