
// ============================================================
// DARUS SALAAM MOSQUE - SCRIPT
// ============================================================
console.log('✅ Darus Salaam Mosque website ready.');

// ============================================================
// FLOATING MESSAGE - Load from JSON with Fade-In Animation
// ============================================================
function loadFloatingMessage() {
  const msgText = document.querySelector('.floating-msg .msg-text');
  if (!msgText) return;

  const floatingMsg = document.getElementById('floatingMsg');
  
  // Set initial state for fade-in
  if (floatingMsg) {
    floatingMsg.style.opacity = '0';
    floatingMsg.style.transform = 'translateY(20px)';
    floatingMsg.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  }

  // Try to load from JSON file (future CMS)
  fetch('data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('JSON not found, using HTML fallback');
      }
      return response.json();
    })
    .then(data => {
      if (data && data.floatingMessage) {
        msgText.innerHTML = data.floatingMessage;
        console.log('✅ Message loaded from JSON:', data.floatingMessage);
      }
    })
    .catch(error => {
      console.log('ℹ️ Using HTML fallback message');
    })
    .finally(() => {
      // Fade in the message
      if (floatingMsg) {
        floatingMsg.style.opacity = '1';
        floatingMsg.style.transform = 'translateY(0)';
      }
    });
}

// Load message when page loads
loadFloatingMessage();

// ============================================================
// BACK TO TOP BUTTON
// ============================================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

if (backToTopBtn) {
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}


// ============================================================
// NAVIGATION - Mobile Toggle
// ============================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
    });
  });
}