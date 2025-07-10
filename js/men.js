// Get all shoe items
const shoeItems = document.querySelectorAll('.shoe-item a');
const modal = document.getElementById('productModal');
const closeModal = document.getElementsByClassName('close-modal')[0];
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const addToCart = document.getElementById('addToCart');

// Add click event to each shoe item
shoeItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const name = item.querySelector('.arrival-name').textContent;
        const price = item.querySelector('.arrival-price').textContent;
        // Assuming images are named after the product (e.g., addidasultraboost1.0.jpg)
        const imageSrc = name.toLowerCase().replace(/\s+/g, '') + '.jpg';

        modalName.textContent = name;
        modalPrice.textContent = price;
        modalImage.src = imageSrc; // Adjust this path based on your image location
        modal.style.display = 'block';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Add to cart functionality (basic alert for now)
addToCart.addEventListener('click', () => {
    const name = modalName.textContent;
    const price = modalPrice.textContent;
    const quantity = document.getElementById('quantity').value;
    const size = document.getElementById('size').value;
    alert(`Added ${quantity} x ${name} (Size: ${size}) to cart for ${price} each!`);
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuToggle.classList.toggle('show');
});

// Move to top button
const moveToTop = document.querySelector('.move-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        moveToTop.classList.add('show');
    } else {
        moveToTop.classList.remove('show');
    }
});
moveToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Login/Signup popup toggle
document.querySelectorAll('.close-popup').forEach(close => {
    close.addEventListener('click', () => {
        close.closest('.login-popup').classList.remove('active');
    });
});