// Show modal with book details
function showModal(title, price) {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-price').innerText = `Price: ${price}`;
    
    // Reset modal display and add 'show' class to trigger CSS transitions
    modal.style.display = 'flex';
    modal.classList.add('show');
    modalContent.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');

    // Add 'hide' class to trigger fade-out transition
    modal.classList.add('hide');
    modalContent.classList.remove('show');

    // Wait for transition to complete before fully hiding
    setTimeout(() => {
        modal.classList.remove('show', 'hide');
        modal.style.display = 'none';
    }, 400);
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}
