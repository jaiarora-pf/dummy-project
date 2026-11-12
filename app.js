document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('cta-button');

  if (button) {
    button.addEventListener('click', () => {
      button.textContent = 'Started!';
      button.disabled = true;
    });
  }
});
