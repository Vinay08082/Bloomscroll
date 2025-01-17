const blooms = document.querySelectorAll('.bloom');


function checkVisibility() {
  blooms.forEach(bloom => {
    const rect = bloom.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom>0) {
      bloom.classList.add('visible');
    }
    else{
        bloom.classList.remove('visible');
    }
  });
}


// Event listener for scroll events
window.addEventListener('scroll', checkVisibility);

// Initial check for elements already in view
checkVisibility();