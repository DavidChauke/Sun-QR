// Elements
const gifContainer = document.getElementById('gif-container');
const pdfContainer = document.getElementById('pdf-container');

// Show GIF instantly
window.onload = () => {
  gifContainer.classList.add('show');

  // After 3 seconds, switch to PDF
  setTimeout(() => {
    gifContainer.style.opacity = '0';
    gifContainer.style.visibility = 'hidden';
    pdfContainer.style.opacity = '1';
    pdfContainer.style.visibility = 'visible';
  }, 3000);  // 3000ms = 3 seconds
};