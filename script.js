// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// Accordion logic (pricing page)
const accordions = document.querySelectorAll('[data-accordion]');

accordions.forEach((btn) => {
  const panel = btn.nextElementSibling;

  btn.addEventListener('click', () => {
    const isOpen = btn.classList.contains('open');

    // Close all others in the same column
    const col = btn.closest('.pricing-col');
    if (col) {
      col.querySelectorAll('.accordion').forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.classList.remove('open');
          const otherPanel = otherBtn.nextElementSibling;
          if (otherPanel) {
            otherPanel.classList.remove('open');
            otherPanel.style.maxHeight = null;
          }
        }
      });
    }

    // Toggle clicked one
    btn.classList.toggle('open', !isOpen);
    if (panel) {
      if (!isOpen) {
        panel.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.classList.remove('open');
        panel.style.maxHeight = null;
      }
    }
  });
});

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
