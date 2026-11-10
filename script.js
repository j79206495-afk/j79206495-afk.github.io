// The contact links are already configured in index.html.
// This small script adds keyboard-accessible feedback without requiring setup.
document.querySelectorAll('.contact-item').forEach((item) => {
  item.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') item.click();
  });
});
